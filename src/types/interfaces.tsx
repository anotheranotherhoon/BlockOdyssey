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

export interface DropDownProps {
  isDropDownShow: boolean;
  selectedName: string | null;
  selectedStatus: string | null;
  handleDropDown: () => void;
  handleCurrentIndex: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  list: DropDownType[]
}

export interface PaginationProps {
  total: number
}

interface UseDropDownResult {
  isDropDownShow : boolean;
  selectedName : string | null;
  selectedStatus : string | null;
  handleDropDown : ()=>void;
  handleCurrentIndex :  (e :React.MouseEvent<HTMLButtonElement, MouseEvent> )=>void;
}

export interface UseDropDownParam {
  (name :  string |null,   status : string | null, isLimit : boolean) : UseDropDownResult
}

export interface InitialStateType {
  page : number;
  limit : number;
  filter : string;
  q : string;
  selectedFilterName: string | null;
}