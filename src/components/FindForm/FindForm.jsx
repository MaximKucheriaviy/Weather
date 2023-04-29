import { FindForm } from "./FindFormStyled";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = ({setCitys}) => {
  const [cityName, setSityName] = useState("");
  const navigate = useNavigate();

  const onChaige = (event) => {
    const target = event.target;
    setSityName(target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    navigate(`/list/${cityName}`)
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
