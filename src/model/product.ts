export type ProductState = {
  productData?: ProductData[];
  filteredProductData?: ProductData[];
};

export type SearchPrductParam = {
  text?: string;
  switchBtn?: boolean;
  dropDownListSelectedItem?: string;
};

export type ProductData = {
  id: number;
  name: string;
  price: number;
  brand?: string;
  seatCount?: number;
  engineSize?: number;
  yearOfManufacture?: string;
  establishedDate?: number;
  lastModifyDate?: number;
  modifyBy?: string;
  description?: string;
  productStatus?: string;
  numOfDoor?: any;
  fuelType?: any;
  used?: boolean;
  images: Image[];
};
export interface Image {
  id: string;
  filePath: string;
  productId: string;
}
