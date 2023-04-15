import { FindForm } from "./FindFormStyled";
import { BiSearchAlt } from "react-icons/bi";

export const SearchForm = () => {
  return (
    <FindForm>
      <input type="text" />
      <button type="submit">
        <BiSearchAlt />
      </button>
    </FindForm>
  );
};
