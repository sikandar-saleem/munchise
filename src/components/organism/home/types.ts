type Logo = {
  src: string;
  alt: string;
};

type Company = {
  name: string;
  logo: Logo;
  speciality: string;
  city: string;
};

type City = {
  title: string;
  isChecked: boolean;
};

type Speciality = {
  title: string;
  isChecked: boolean;
};

export type FilterItem = {
  title: string;
  isChecked: boolean;
};

type FilterOnToggle = (type: string, item: FilterItem) => void;
type FilterOnReset = (type:string) => void;

export type SortingFilterProps = {
  title: string;
  type: string;
  items: FilterItem[];
  onClickFilter: FilterOnToggle;
  onClickReset: FilterOnReset;
};

export type SideMenuProps = {
  total: number;
  specialityList: FilterItem[];
  citiesList: FilterItem[];
  onClickFilter: FilterOnToggle;
  onClickReset: FilterOnReset;
};

export type Data = Company[];
export type Cities = City[];
export type Specialities = Speciality[];

export type HomeProps = {
  data: Data;
  cities: Cities;
  specialities: Specialities;
};
