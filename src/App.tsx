import React, { useEffect, useState } from "react";
import { Data, Doctor, Option } from "./App.type";
import Card from "./components/Card";
import FilterCheckbox from "./components/FilterCheckbox";
import Loader from "./components/Loader";
import { numbers } from "./Helper/constant";
import { removeDuplicate } from "./Helper/removeDuplicate";

function App() {
  const [doctors, setDoctors] = useState<Array<Doctor>>([]);
  const [hospitals, setHospitals] = useState<Array<Option>>([]);
  const [specializations, setSpecializations] = useState<Array<Option>>([]);
  const [selectedHospital, setSelectedHospital] = useState<Array<Option>>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    Array<Option>
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc"
      );
      const responseData = await response.json();
      const data: Array<Data> = responseData.data;
      const doctors: Array<Doctor> = data.map((item) => {
        return {
          doctor_id: item.doctor_id,
          name: item.name,
          photo: item.photo.formats.thumbnail,
          hospital: item.hospital[0].name,
          price: item.price.formatted,
          about: item.about,
          specialization: item.specialization.name,
        };
      });

      const hospitals: Array<Option> = data.map((item) => {
        return {
          label: item.hospital[0].name,
          value: item.hospital[0].id,
        };
      });

      const specializations: Array<Option> = data.map((item) => {
        return {
          label: item.specialization.name,
          value: item.specialization.id,
        };
      });

      const removeDuplicateHospitals = removeDuplicate(hospitals);
      const removeDuplicateSpecializations = removeDuplicate(specializations);
      setDoctors(doctors);
      setHospitals(removeDuplicateHospitals);
      setSpecializations(removeDuplicateSpecializations);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const onSearch = (event: React.FocusEvent<HTMLInputElement>) => {
    if (selectedHospital.length > 0) {
      setSelectedHospital([]);
    } else if (selectedSpecialization.length > 0) {
      setSelectedSpecialization([]);
    }
    setSearch(event.target.value);
  };

  const onChangeHospital = (selectedHospital: Array<Option>) => {
    if (search) {
      setSearch("");
    } else if (selectedSpecialization.length > 0) {
      setSelectedSpecialization([]);
    }
    setSelectedHospital(selectedHospital);
  };

  const onChangeSpecialization = (selectedSpecialization: Array<Option>) => {
    if (search) {
      setSearch("");
    } else if (selectedHospital.length > 0) {
      setSelectedHospital([]);
    }
    setSelectedSpecialization(selectedSpecialization);
  };

  const showCard = () => {
    const filterDoctors = doctors.filter((item) => {
      return search === ""
        ? selectedHospital.length > 0
          ? selectedHospital.some(
              (hospital) => hospital.label === item.hospital
            )
          : selectedSpecialization.length > 0
          ? selectedSpecialization.some(
              (specialization) => specialization.label === item.specialization
            )
          : item
        : item.name.toLowerCase().includes(search.toLowerCase());
    });

    if (loading && doctors.length === 0) {
      return numbers.map((item) => <Loader key={item} />);
    }

    if (!loading && filterDoctors.length === 0) {
      return (
        <div className="text-base font-medium text-gray-700">
          Oops, data is not available
        </div>
      );
    }

    return filterDoctors.map((item) => (
      <Card
        key={item.doctor_id}
        imageURL={item.photo}
        name={item.name}
        about={item.about}
        hospital={item.hospital}
        price={item.price}
        specialization={item.specialization}
      />
    ));
  };

  return (
    <div className="flex justify-center p-6">
      <div className="container">
        <div className="w-full border border-gray-500 px-4 pt-3 pb-5 mb-8">
          <div className="text-xl font-bold mb-3">Doctor Finder</div>
          <div className="w-1/2 flex justify-between">
            <input
              placeholder="Keyword"
              value={search}
              className="w-50 h-10 border border-gray-500 p-2"
              onChange={onSearch}
            />
            <FilterCheckbox
              options={hospitals}
              selected={selectedHospital}
              onChange={onChangeHospital}
              labelledBy="Hospital"
            />
            <FilterCheckbox
              options={specializations}
              selected={selectedSpecialization}
              onChange={onChangeSpecialization}
              labelledBy="Specialization"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">{showCard()}</div>
      </div>
    </div>
  );
}

export default App;
