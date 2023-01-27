export interface ProductType {
  brand : string;
  category : string;
  description : string;
  discountPercentage : number;
  id : number;
  images : string[];
  price : number;
  rating : number;
  stock : number;
  thumbnail : string;
  title : string;
  [key: string]: string | number | string[]
}

export interface ProductProps {
  product : ProductType[]
}

export interface DropDownType {
  id : number;
  name : string;
  status : string;
}