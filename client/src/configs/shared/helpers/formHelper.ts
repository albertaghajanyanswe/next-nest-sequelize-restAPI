// eslint-disable-next-line prefer-regex-literals
const EMAIL_PATTERN = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const isEmail = (email: string) => EMAIL_PATTERN.test(email);

const requiredErrMsg = (t: any, field: string) => t('required').replace('{field}', field);

const validateFieldForMinChar = (t: any, field: string, value: string, minChar: number) => value.length < minChar ? t('minChars').replace('{field}', field).replace('{count}', minChar) : true;
const validateFieldMaxValue = (t: any, field: string, value: string, maxValue: number) => +value > maxValue ?
  t('maxValue').replace('{field}', field).replace('{maxValue}', maxValue) :
  true;
const validateGreaterZero = (t: any, field: string, value: string) => +value <= 0 ? t('greaterZero').replace('{field}', field) : true;

export { isEmail, requiredErrMsg, validateFieldForMinChar, validateFieldMaxValue, validateGreaterZero };
