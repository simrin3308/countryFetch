import { useEffect, useState } from "react";
import "./filter.css";
import { searchByRegion } from "../../../features/contries/contriesAction";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../../features/contries/contriesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const regions = ["Africa", "Asia", "Oceania", "Europe", "America", "All"];

  const [filter, setFilter] = useState(null);
  const [displayDropDown, setDisplayDropDown] = useState(false);

  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };

  useEffect(() => {
    if(filter !== ""){
      dispatch(setRegion(filter))
    }
    return ()=>{
      dispatch(reset())
    }
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropDown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>
      {displayDropDown && (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropDown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Filter;
