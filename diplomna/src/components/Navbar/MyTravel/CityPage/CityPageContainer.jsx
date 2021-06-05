import React from "react";
import {connect} from "react-redux";
import CityPage from "./CityPage";
import {getCitiesByCountry, searchCity} from "../../../../redux/travel-reducer";

class CityPageContainer extends React.Component {

    componentDidMount() {
        this.props.getCitiesByCountry(this.props.selectedCountryId);
    }

    render() {
        return (
            <div>
                <CityPage cities={this.props.cities}
                          searchCity={this.props.searchCity}
                          selectedCountryId={this.props.selectedCountryId}
                />
            </div>
        );

    }
}

let mapStateToProps = (state) => ({
    cities: state.travelPage.cities,
    selectedCountryId: state.travelPage.selectedCountryId
});

export default connect(mapStateToProps, {
    getCitiesByCountry,
    searchCity
})(CityPageContainer);