import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { setSearchTerm } from "../../../features/contries/contriesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const {searchTerm} = useSelector((state)=>state.country)
  const handleInputValueChange = (e)=>{
    dispatch(setSearchTerm(e.target.value.toLowerCase()))
  }
  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
      onChange={handleInputValueChange}
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
      />
    </section>
  );
};

export default Search;
