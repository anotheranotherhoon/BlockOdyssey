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
  status : string | undefined;
}

export interface DropDownProps {
  isDropDownShow: boolean;
  selectedName: string | undefined;
  selectedStatus: string | undefined;
  handleDropDown: () => void;
  handleCurrentIndex: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  list: DropDownType[]
}

export interface PaginationProps {
  total: number
}

interface UseDropDownResult {
  isDropDownShow : boolean;
  selectedName : string | undefined;
  selectedStatus : string | undefined;
  handleDropDown : ()=>void;
  handleCurrentIndex :  (e :React.MouseEvent<HTMLButtonElement, MouseEvent> )=>void;
}

export interface UseDropDownParam {
  (name :  string |undefined,   status : string | undefined, isLimit : boolean) : UseDropDownResult
}

export interface InitialStateType {
  page : number;
  limit : number;
  filter : string | undefined;
  q : string | undefined;
  selectedFilterName: string | undefined;
}