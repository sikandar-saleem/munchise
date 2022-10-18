import { SideMenuProps } from "./types";
import SortingFilter from "./sortingFilter";

const SideMenu = ({
  total,
  specialityList,
  citiesList,
  onClickFilter,
  onClickReset,
}: SideMenuProps) => {
  return (
    <>
      <h2 className="uppercase font-greed font-black text-numa-md lg:text-numa-lg text-numa-black-700 mb-5">
        {`${total} companies found`}
      </h2>
      <div>
        <SortingFilter
          title="Cities"
          type="city"
          items={citiesList}
          onClickFilter={onClickFilter}
          onClickReset={onClickReset}
        />
      </div>
      <div>
        <SortingFilter
          title="Speciality"
          type="speciality"
          items={specialityList}
          onClickFilter={onClickFilter}
          onClickReset={onClickReset}
        />
      </div>
    </>
  );
};

export default SideMenu;
