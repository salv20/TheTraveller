import { useEffect, useState, useContext } from "react";
import Bookingform from "../Pages/booking/bookingform";
import Bookinglist from "../Pages/booking/bookinglist";
import asyncFunc from "../redux/countryApi/countryAction";
import { connect } from "react-redux";
import ThreeDotsWave from "../components/dotwave";
import { contextProvider } from "../App";

const Booking = ({ countryData, fetchCountry }) => {
    const [fetchStorage, setFetchStorage] = useState(false)

    const tripContext = useContext(contextProvider)
    const trip = tripContext[0]
    const setTrip = tripContext[1]
    const storageFunc = () => {
        setFetchStorage(!fetchStorage)
        setTrip(!trip)
    }
    useEffect(() => {
        fetchCountry()
    }, [])
    return (
        <section>
            {(!countryData || (countryData.loading)) && <ThreeDotsWave />}
            {
                countryData &&
                !(countryData.loading) &&
                (
                    !countryData.country.length ?
                        <div className=' text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4'>
                            {countryData.error} please check internet connection and reload.
                        </div>
                        :
                        <div className="space-y-6 pb-8">
                            <article className="pr-1 font-semibold text-lg">
                                <p>Online booking system for all services based industies and individals.
                                    <span>We offer the easiest and the best booking services. Book your flight 24hrs with us.</span>
                                </p>
                            </article>

                            <article>
                                <Bookingform countryData={countryData} storageFunc={storageFunc} />
                            </article>
                            <Bookinglist storageFunc={storageFunc} fetchStorage={fetchStorage} />
                        </div>
                )}

        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        countryData: state,
    };
};
const mapDispatchProps = (dispach) => {
    return {
        fetchCountry: () => dispach(asyncFunc()),
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Booking)
