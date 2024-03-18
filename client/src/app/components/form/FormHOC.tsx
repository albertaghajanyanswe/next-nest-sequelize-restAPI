'use client'

import React, { memo, MemoExoticComponent, ReactElement, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import FormTextField from "./textField";
import FormPhoneField from "./phoneNumberInput";
import FormSwitchField from "../switchField";
import FormFileInput from "./imageInput";
import FormFileInputMultiple from "./imageInputMultiple";
import FormSelectField from "./selectField";

export function testStepsIntersection(steps: StepType<any, any>[]) {
  const names: {[key: string]: number} = {}
  steps.forEach(step => {
    step.STEPS.forEach(name => {
      if (names[name]) {
        names[name] += 1
      } else {
        names[name] = 1
      }
    })
  })
  return Object.entries(names).filter(([name, count]) => count > 1).map(([name]) => name)
}

export function testStepsCoverage(
  steps: StepType<any, any>[],
  defaults: {[key: string]: any},
  extra: {[key: string]: any}
) {
  const names: {[key: string]: number} = {}
  steps.forEach(step => {
    step.STEPS.forEach(name => {
      names[name] = 1
    })
  })
  return {
    missing: Object.keys(defaults).filter(name => !names[name] && !(name in extra)),
    extra: Object.keys(names).filter(name => !(name in defaults))
  }
}

export function genForm<Form extends FieldValues>() {
  return {
    Content: {} as Form,
    TextField: FormTextField<Form>,
    PhoneField: FormPhoneField<Form>,
    SwitchField: FormSwitchField<Form>,
    AvatarImageField: FormFileInput<Form>,
    FileInputMultiple: FormFileInputMultiple<Form>,
    SelectField: FormSelectField<Form>,
  }
}

const StepHOC = <T,>() => <L extends keyof T & string>(STEPS: readonly L[]) => {
  const Form = genForm<Pick<T, L>>();
  const GeneratorFunc = <Props,>(
    Component: React.FC<Props & {Form: ReturnType<typeof genForm<Pick<T, L>>>}>
  ) => {
    const WrappedComponent: MemoExoticComponent<(props: Props) => ReactElement | null> & {
      STEPS: L[];
    // eslint-disable-next-line react/display-name
    } = memo(
      (props: Props) => {
        const {
          setFocus,
          formState: { errors },
        } = useFormContext();

        useEffect(() => {
          const firstError = Object.keys(errors).find((field) => {
            return !!errors[field]
          });
          if (firstError) {
            try {
              (document.querySelector(
                `.form-input-named-${firstError}`
              ) as HTMLInputElement | null)?.focus();
            } catch(e) {
              console.log(e)
            }
            setFocus?.(firstError);
          }
        }, [errors, setFocus]);

        return <Component {...props} Form={Form}/>
      }
    ) as any
    WrappedComponent.STEPS = [...STEPS];
    return WrappedComponent as StepType<T, Props>
  }
  GeneratorFunc.Form = Form;
  return GeneratorFunc
}

export type StepType<T, Props> = React.FC<Props> & {
  STEPS: (keyof T & string)[]
}

export default StepHOC;