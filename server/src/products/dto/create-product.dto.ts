import { StaticFiles } from "src/staticFiles/staticFiles.model";

export enum IntendedForEnum {
  ForSale = 'FOR_SALE',
  ForRent = 'FOR_RENT',
  ForFreeGiving = 'FOR_FREE_GIVING',
}

export enum ProductStateEnum {
  New = 'NEW',
  Used = 'USED',
  NotOperable = 'NOT_OPERABLE',
}

export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly currency: string;
  readonly province: string;
  readonly city: string;
  readonly address: string;
  readonly otherInfo: string;
  readonly intendedFor: IntendedForEnum;
  readonly productState: ProductStateEnum;
  readonly categoryId: number;
  readonly userId: number;
  readonly staticFiles?: StaticFiles[];
}
