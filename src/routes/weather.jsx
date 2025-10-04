import { useEffect, useState } from "react";
import axios from "axios";
import ThreeDotsWave from "../components/dotwave";
import Weatherui from "../Pages/weather/weatherui";

const API_KEY = `${import.meta.env.VITE_COUNTRY_STATE_CITY_API}==`;
const COUNTRY_API = "https://api.countrystatecity.in/v1/countries";

const Weather = () => {
  const [list, setList] = useState({});
  const [errorWeather, setErrorWeather] = useState("");
  const [errorCountry, setErrorCountry] = useState("");
  const [countryName, setCountryName] = useState([]);
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(false);
  const [fetchTime, setFetchTime] = useState(false);

  useEffect(() => {
    axios
      .get(COUNTRY_API, {
        headers: {
          "X-CSCAPI-KEY": API_KEY,
        },
      })
      .then((res) => {
        const countries = res.data.map((country) => ({
          name: country.name,
          iso2: country.iso2,
        }));
        setCountryName(countries);
      })
      .catch((err) => setErrorCountry(err.message));
  }, []);

  // get current location forecast (default)
  useEffect(() => {
    if (!search) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
              import.meta.env.VITE_WEATHER_API
            }`
          )
          .then((res) => setList(res.data))
          .catch((err) => setErrorWeather(err.message));
      });
    }
  }, []);

  // fetch forecast when user searches
  useEffect(() => {
    if (search) {
      const selected = countryName.find(
        (c) => c.name.toLowerCase() === search.toLowerCase().trim()
      );
      if (selected) {
        axios
          .get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${
              selected.name
            }&limit=1&appid=${import.meta.env.VITE_WEATHER_API}`
          )
          .then((res) => {
            console.log(res.data);

            if (res.data.length > 0) {
              const { lat, lon } = res.data[0];
              return axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
                  import.meta.env.VITE_WEATHER_API
                }`
              );
            }
          })
          .then((res) => res && setList(res.data))
          .catch((err) => setErrorWeather(err.message));
      }
    }
  }, [fetchTime]);

  return (
    <section className="py-8 bg-heading min-h-screen">
      {errorCountry ? (
        <div className=" text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4">
          {errorCountry} please check internet connection and reload.
        </div>
      ) : countryName.length && list ? (
        <div className="w-11/12 sm:w-3/5 md:2/3 lg:w-2/5 mx-auto">
          <article>
            <div className="flex justify-between space-x-3">
              <input
                type="search"
                placeholder="Search destinations"
                className="outline-none py-3 rounded-lg text-center w-3/4 border-2"
                value={search}
                onChange={(e) => {
                  setOpenState(true);
                  setSearch(e.target.value);
                }}
              />
              <button
                type="button"
                aria-label="search"
                className="capitalize bg-orange text-white font-bold text-center px-6 rounded-lg"
                onClick={() => {
                  setOpenState(false);
                  setFetchTime(!fetchTime);
                }}
              >
                search
              </button>
            </div>
          </article>

          {/* Suggestions */}
          <article
            className={`${
              countryName.length && openState ? "block" : "hidden"
            } searchOptions absolute overflow-y-scroll h-60 bg-white w-3/4 md:w-1/2 pl-6 pt-2 space-y-2 font-semibold mt-2`}
          >
            {countryName
              .filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((c, index) => (
                <div key={index} className="cursor-pointer">
                  <p
                    onClick={() => {
                      setOpenState(false);
                      setFetchTime(!fetchTime);
                      setSearch(c.name);
                    }}
                  >
                    {c.name}
                  </p>
                </div>
              ))}
          </article>

          {/* Weather results */}
          {errorWeather ? (
            <div className=" text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4">
              {errorWeather} please check internet connection and reload.
            </div>
          ) : (
            <Weatherui list={list} setOpenState={setOpenState} />
          )}
        </div>
      ) : (
        <ThreeDotsWave />
      )}
    </section>
  );
};

export default Weather;
