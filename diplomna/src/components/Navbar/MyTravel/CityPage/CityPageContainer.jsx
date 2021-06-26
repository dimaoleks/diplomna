import React from "react";
import {connect} from "react-redux";
import CityPage from "./CityPage";
import {getCitiesByCountry, searchCity, setCity} from "../../../../redux/travel-reducer";

class CityPageContainer extends React.Component {

    componentDidMount() {
        this.props.getCitiesByCountry(this.props.selectedCountry?.id);
    }

    render() {
        return (
            <div>
                <CityPage cities={this.props.cities}
                          searchCity={this.props.searchCity}
                          selectedCountry={this.props.selectedCountry}
                          setCity={this.props.setCity}
                />
            </div>
        );

    }
}

let mapStateToProps = (state) => ({
    cities: state.travelPage.cities,
    selectedCountry: state.travelPage.selectedCountry
});

export default connect(mapStateToProps, {
    getCitiesByCountry,
    searchCity,
    setCity
})(CityPageContainer);