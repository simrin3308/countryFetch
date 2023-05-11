import "./country.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../features/contries/contriesAction";
import { reset } from "../../features/contries/contriesSlice";
import { Link } from "react-router-dom";

const Country = () => {
  const { countriesData, loading, success, error, region, searchTerm } =
    useSelector((state) => state.country);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());
    if (error) {
      console.log(error);
    }
    if (region) {
      dispatch(searchByRegion(region));
    }
  }, [dispatch, error, success, region, searchTerm]);

  const data = countriesData.filter((item) => {
    return item.name.common.toLowerCase().includes(searchTerm);
  });

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, index) => {
          return (
            <Link to={`/${item.cioc}`} className="country-card" key={index}>
              <img
                src={item.flags.png}
                alt={item.flag.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3>{item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
