import { FindForm } from "./FindFormStyled";
import { BiSearchAlt } from "react-icons/bi";
import { getCityInfo } from "../../service/cityAPI";
import { useState } from "react";

export const SearchForm = () => {
  const [cityName, setSityName] = useState("");

  const onChaige = (event) => {
    const target = event.target;
    setSityName(target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await getCityInfo(cityName);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FindForm onSubmit={onSubmit}>
      <input type="text" name="cityName" onChange={onChaige} value={cityName} />
      <button type="submit">
        <BiSearchAlt />
      </button>
    </FindForm>
  );
};
