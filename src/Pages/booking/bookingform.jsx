import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bookvalidation from "./bookvalidation";

const Bookingform = ({ countryData, storageFunc }) => {
  const path = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

  const [formdata, setFormdata] = useState({
    from: "",
    depart: startDate,
    back: lastDate,
    passenger: 1,
    class: "First Class",
    airline: "Ethiopian Airline",
  });

  const [to, setTo] = useState("");
  const [detectedLocation, setDetectedLocation] = useState("");

  useEffect(() => {
    // GETTING USERS CURRENT LOCATION
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const locationApi = async () => {
        const res = await fetch(
          `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&location=${longitude},${latitude}`
        );
        const data = await res.json();
        const countryName = data.address.CntryName;
        setDetectedLocation(countryName);
      };
      locationApi();
    });

    // RETRIVING LOCATION DESTINATION FROM DISCOVER PAGE
    if (path.state) setTo(path.state);
  }, []);

  return (
    <form className="grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold">
      <div>
        <FaMapMarkerAlt className="inline-block" />
        <label>from</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            required
            placeholder={
              detectedLocation
                ? `Suggested: ${detectedLocation}`
                : "Enter location"
            }
            className="block outline-none border-b-2 border-lightgray w-full"
            value={formdata.from}
            onChange={(e) => {
              setFormdata({ ...formdata, from: e.target.value });
              document.querySelector(".errorFrom").classList.add("hidden");
            }}
          />

          {detectedLocation && !formdata.from && (
            <button
              type="button"
              onClick={() =>
                setFormdata({ ...formdata, from: detectedLocation })
              }
              className="text-sm text-blue-600 underline"
            >
              Use
            </button>
          )}
        </div>
        <p className="errorFrom normal-case text-red-600 hidden">
          Please enter a valid country name
        </p>
      </div>

      <div>
        <label>to</label>
        <input
          type="text"
          required
          className="block outline-none border-b-2 border-lightgray w-full"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
            document.querySelector(".errorTo").classList.add("hidden");
          }}
        />
        <p className="errorTo normal-case text-red-600 hidden">
          Please enter a valid country name
        </p>
      </div>

      {/* Depart Date */}
      <div>
        <div className="flex pb-2">
          <FaCalendarAlt className="mt-1" />
          <label>depart</label>
        </div>
        <div className="border-lightgray border-b-2 departDate">
          <DatePicker
            className="outline-none"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setFormdata({ ...formdata, depart: date });
              document.querySelector(".errordepart").classList.add("hidden");
            }}
          />
        </div>
        <p className="errordepart normal-case text-red-600 hidden">
          Please enter a valid date
        </p>
      </div>

      {/* Return Date */}
      <div>
        <label className="pb-2 block">return</label>
        <div className="border-lightgray border-b-2 returnDate">
          <DatePicker
            className="outline-none"
            selected={lastDate}
            onChange={(date) => {
              setLastDate(date);
              setFormdata({ ...formdata, back: date });
              document.querySelector(".errorreturn").classList.add("hidden");
            }}
          />
        </div>
        <p className="errorreturn normal-case text-red-600 hidden">
          Please enter a valid date
        </p>
      </div>

      {/* Passenger */}
      <div>
        <label className="block">passenger</label>
        <input
          type="number"
          min="1"
          required
          className="block outline-none border-b-2 border-lightgray w-full"
          value={formdata.passenger}
          onChange={(e) => {
            document.querySelector(".errorpassenger").classList.add("hidden");
            setFormdata({ ...formdata, passenger: e.target.value });
          }}
        />
        <p className="errorpassenger normal-case text-red-600 hidden">
          Passenger(s) must be at least 1 and at most 10
        </p>
      </div>

      {/* Class */}
      <div>
        <label className="block">class</label>
        <select
          className="outline-none border-b-2 border-lightgray w-full capitalize"
          value={formdata.class}
          onChange={(e) => setFormdata({ ...formdata, class: e.target.value })}
        >
          <option value="First Class">First Class</option>
          <option value="Business Class">Business Class</option>
          <option value="Economy Class">Economy Class</option>
        </select>
      </div>

      {/* Airline */}
      <div>
        <label className="block">airline</label>
        <select
          className="outline-none border-b-2 border-lightgray w-full capitalize"
          value={formdata.airline}
          onChange={(e) =>
            setFormdata({ ...formdata, airline: e.target.value })
          }
        >
          <option value="Ethiopian Airline">Ethiopian Airline</option>
          <option value="American Airline">American Airline</option>
          <option value="British Airline">British Airline</option>
        </select>
      </div>

      <Bookvalidation
        formdata={formdata}
        to={to}
        setTo={setTo}
        countryData={countryData}
        storageFunc={storageFunc}
      />
    </form>
  );
};

export default Bookingform;
