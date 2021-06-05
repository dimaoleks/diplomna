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
                <MyTravel addNewTravel={this.props.addNewTravel}
                          searchCountry={this.props.searchCountry}
                          travels={this.props.travels}
                          countries={this.props.countries}
                          currencies={this.props.currencies}
                          setCountry={this.props.setCountry}

                />
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    travels: state.travelPage.travels,
    countries: state.travelPage.countries,
    currencies: state.travelPage.currencies
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