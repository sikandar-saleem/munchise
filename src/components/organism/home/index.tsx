import React from "react";
import Input from "../../atoms/input";
import SideMenu from "./sideMenu";
import Card from "../../molecules/card";
import Header from "../../molecules/header";

import { HomeProps, Data, FilterItem, Cities, Specialities } from "./types";

const Home = ({ data, cities, specialities }: HomeProps) => {
  const [companiesData, setCompaniesData] = React.useState<Data | []>(
    JSON.parse(JSON.stringify(data))
  );
  const [citiesList, setCitiesList] = React.useState<Cities | []>(
    JSON.parse(JSON.stringify(cities))
  );
  const [specialitiesList, setSpecialitiesList] = React.useState<
    Specialities | []
  >(JSON.parse(JSON.stringify(specialities)));
  const [term, setTerm] = React.useState<string>("");

  React.useEffect(() => {
    if (isFilterEmpty(citiesList) && isFilterEmpty(specialitiesList))
      resetCompaniesData(data);
    else if (!isFilterEmpty(citiesList) && isFilterEmpty(specialitiesList)) {
      const filteredArray = data.filter((elem) =>
        citiesList.find(
          ({ title, isChecked }) =>
            elem.city.toLowerCase() === title.toLowerCase() && isChecked
        )
      );
      resetCompaniesData(filteredArray);
    } else if (isFilterEmpty(citiesList) && !isFilterEmpty(specialitiesList)) {
      const filteredArray = data.filter((elem) =>
        specialitiesList.find(
          ({ title, isChecked }) =>
            elem.speciality.toLowerCase() === title.toLowerCase() && isChecked
        )
      );
      resetCompaniesData(filteredArray);
    } else {
      let filteredArray = data.filter((elem) =>
        citiesList.find(
          ({ title, isChecked }) =>
            elem.city.toLowerCase() === title.toLowerCase() && isChecked
        )
      );
      filteredArray = filteredArray.filter((elem) =>
        specialitiesList.find(
          ({ title, isChecked }) =>
            elem.speciality.toLowerCase() === title.toLowerCase() && isChecked
        )
      );
      setCompaniesData(filteredArray);
    }
    if (term !== "") {
      setCompaniesData((value) =>
        value.filter((val) => {
          const value = term.trim().toLowerCase();
          return (
            val.name.toLowerCase().includes(value) ||
            val.speciality.toLowerCase().includes(value)
          );
        })
      );
    }
  }, [citiesList, data, specialitiesList, term]);

  const onClickFilter = React.useCallback(
    (type: string, item: FilterItem) => {
      if (type.toLowerCase() === "city") {
        const index = citiesList.findIndex((obj) => obj.title === item.title);
        const values = [...citiesList];
        values[index].isChecked = !values[index].isChecked;
        setCitiesList([...values]);
      }
      if (type.toLowerCase() === "speciality") {
        const index = specialitiesList.findIndex(
          (obj) => obj.title === item.title
        );
        const values = [...specialitiesList];
        values[index].isChecked = !values[index].isChecked;
        setSpecialitiesList([...values]);
      }
    },
    [citiesList, specialitiesList]
  );

  const onClickReset = React.useCallback(
    (type: string): void => {
      if (type.toLowerCase() === "city") {
        setCitiesList(JSON.parse(JSON.stringify(cities)));
      }
      if (type.toLowerCase() === "speciality") {
        setSpecialitiesList(JSON.parse(JSON.stringify(specialities)));
      }
    },
    [cities, specialities, setCitiesList, setSpecialitiesList]
  );

  const resetCompaniesData = (companies: Data): void => {
    setCompaniesData(JSON.parse(JSON.stringify(companies)));
  };

  const isFilterEmpty = (arr: Cities): boolean => {
    return arr.every((e) => !e.isChecked);
  };

  const handleSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const val = event.target.value.toString();
      setTerm(val);
    },
    []
  );

  return (
    <>
      <Header />
      <section className="bg-gray-100">
        <div className="grid grid-cols-12 space-x-6 pt-18 pt-30 mx-auto px-5 px-0 py-10 max-w-7xl">
          <aside className="col-span-12 lg:col-span-3 lg:pr-7 sticky top-0">
            <SideMenu
              total={companiesData.length || 0}
              citiesList={citiesList}
              specialityList={specialitiesList}
              onClickFilter={onClickFilter}
              onClickReset={onClickReset}
            />
          </aside>
          <div className="col-span-12 lg:col-span-9 space-y-12 lg:space-y-16">
            <Input
              placeholder="Search by name or speciality..."
              term={term}
              handleSubmit={handleSearch}
            />
            {companiesData?.map((val, index) => (
              <Card
                key={index}
                logo={val.logo}
                companyName={val.name}
                speciality={val.speciality}
                city={val.city}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
