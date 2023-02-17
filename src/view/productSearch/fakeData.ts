import { GeneralResponse } from "../../model/user";
import { ProductData } from "./../../model/product";
export const fakeProductResponse: GeneralResponse<ProductData[]> = {
  apiMsg: {
    rspCode: 1000,
    rspTitle: "Success",
    rspMsg: "Success",
  },
  data: [
    {
      id: 54,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 20210131,
      lastModifyDate: 20210131,
      modifyBy: "root",
      description: "2021-01-31",
      productStatus: "2021-01-31",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "1",
          filePath: "~/assets/product/car1.jpg",
          productId: "54",
        },
        {
          id: "3",
          filePath: "~/assets/product/car2.jpg",
          productId: "55",
        },
        {
          id: "3",
          filePath: "~/assets/product/car3.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 55,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 20210131,
      lastModifyDate: 20210131,
      modifyBy: "root",
      description: "2021-01-31",
      productStatus: "2021-01-31",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car2.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 56,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 1661765193,
      lastModifyDate: 1661765193,
      modifyBy: "root",
      description: "1661765193",
      productStatus: "1661765193",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car3.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 57,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 1661765193,
      lastModifyDate: 1661765193,
      modifyBy: "root",
      description: "1661765193",
      productStatus: "1661765193",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car1.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 58,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 1661765193,
      lastModifyDate: 1661765193,
      modifyBy: "root",
      description: "1661765193",
      productStatus: "1661765193",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car2.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 59,
      name: "productVehicleTest",
      price: 50,
      brand: "root",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 1661765193,
      lastModifyDate: 1661765193,
      modifyBy: "root",
      description: "1661765193",
      productStatus: "1661765193",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car3.jpg",
          productId: "55",
        },
      ],
    },
    {
      id: 60,
      name: "producta",
      price: 1000,
      brand: "branda",
      seatCount: 4,
      engineSize: 5000,
      yearOfManufacture: "2021",
      establishedDate: 1661765193,
      lastModifyDate: 1661765193,
      modifyBy: "root",
      description: "1661765193",
      productStatus: "1661765193",
      numOfDoor: null,
      fuelType: null,
      used: null,
      images: [
        {
          id: "3",
          filePath: "~/assets/product/car1.jpg",
          productId: "55",
        },
      ],
    },
  ],
};