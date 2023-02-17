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
  used?: string;
  images: Image[];
};
export interface Image {
  id: string;
  filePath: string;
  productId: string;
}
