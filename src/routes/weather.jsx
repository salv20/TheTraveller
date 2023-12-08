import { useEffect } from 'react'
import { connect } from 'react-redux';
import asyncFunc from '../redux/countryApi/countryAction';
import ThreeDotsWave from '../components/dotwave';
const Weather = ({ countryData, fetchCountry }) => {
    useEffect(() => {
        fetchCountry()
    }, [])
    console.log(countryData);
    return (
        <div>
            <h1>weather</h1>
            <ThreeDotsWave />
        </div>
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

export default connect(mapStateToProps, mapDispatchProps)(Weather)
