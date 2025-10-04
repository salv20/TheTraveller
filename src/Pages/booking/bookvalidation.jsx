import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookvalidation = ({ formdata, to, setTo, countryData, storageFunc }) => {
  let bookedFlights = [];
  const [countryName, setCountryName] = useState([]);
  const [bookings, setBookings] = useState({
    id: "",
    from: "",
    to: "",
    airline: "",
    fee: "",
    duration: "",
    class: "",
    departureTime: "",
    departureDate: "",
    returnDate: "",
    passenger: "",
  });

  const presentData = JSON.parse(localStorage.getItem("bookedFlights"));
  if (localStorage.bookedFlights) bookedFlights = presentData;

  useEffect(() => {
    const finalData = countryData.country.map((country) => country.name);
    setCountryName(finalData);
  }, [countryData]);

  useEffect(() => {
    if (bookings.id) {
      bookedFlights.push(bookings);
      localStorage.setItem("bookedFlights", JSON.stringify(bookedFlights));
    }
  }, [bookings]);

  return (
    <div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const idNum = Math.floor(Math.random() * 2000);
          const priceNum = Math.round(Math.random() * 50);
          const time = Math.round(Math.random() * 10) + 1;

          const destination = countryName.find(
            (country) =>
              country.toLowerCase().trim() === to.toLowerCase().trim()
          );

          if (!destination) {
            document.querySelector(".errorTo").classList.remove("hidden");
          }

          const takeOff = countryName.find(
            (country) =>
              country.toLowerCase().trim() ===
              formdata.from.toLowerCase().trim()
          );

          if (!takeOff) {
            document.querySelector(".errorFrom").classList.remove("hidden");
          }

          if (!formdata.depart) {
            document.querySelector(".errordepart").classList.remove("hidden");
          }

          if (!formdata.back) {
            document.querySelector(".errorreturn").classList.remove("hidden");
          }

          if (
            Number(formdata.passenger) < 1 ||
            Number(formdata.passenger) > 10
          ) {
            document
              .querySelector(".errorpassenger")
              .classList.remove("hidden");
          }

          if (
            takeOff &&
            destination &&
            formdata.depart &&
            formdata.back &&
            Number(formdata.passenger) >= 1 &&
            Number(formdata.passenger) <= 10
          ) {
            setBookings({
              ...bookings,
              id: idNum,
              from: takeOff,
              to: destination,
              airline: formdata.airline,
              fee: `${priceNum}.00`,
              duration: `${time}hrs`,
              class: formdata.class,
              departureDate: formdata.depart,
              returnDate: formdata.back,
              departureTime: `${time}:${priceNum}`,
              passenger: formdata.passenger,
            });
            toast.success(`flight successfully booked.`);
            storageFunc();
            setTo("");
          }
        }}
        className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white"
      >
        Book flight
      </button>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Bookvalidation;
