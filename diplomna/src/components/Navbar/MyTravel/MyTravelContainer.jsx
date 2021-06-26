import MyTravel from "./MyTravels";
import React from "react";
import {connect} from "react-redux";
import {
    addNewTravel,
    getInitialTravelValues,
    getTravels,
    searchCountry,
    setCountry
} from "../../../redux/travel-reducer";
import {compose} from "redux";
import CityPage from "./CityPage/CityPage";

class MyTravelContainer extends React.Component {

    componentDidMount() {
        this.props.getInitialTravelValues();

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props !== prevProps) {
    //         this.props.getTravels();
    //     }
    // }

    render() {
        return (
            <div>
                <MyTravel searchCountry={this.props.searchCountry}
                          countries={this.props.countries}
                          setCountry={this.props.setCountry}

                />
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    countries: state.travelPage.countries
});

export default compose(connect(
    mapStateToProps,
    {
        addNewTravel,
        getInitialTravelValues,
        getTravels,
        searchCountry,
        setCountry
    }
))(MyTravelContainer);