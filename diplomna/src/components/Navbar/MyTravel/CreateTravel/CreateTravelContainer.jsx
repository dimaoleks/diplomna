import React from "react";
import CreateTravel from "./CreateTravel";
import {connect} from "react-redux";

class CreateTravelContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                <CreateTravel selectedCountry={this.props.selectedCountry}
                              selectedCity={this.props.selectedCity}
                              travels={this.props.travels}
                              currencies={this.props.currencies}/>
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    selectedCountry: state.travelPage.selectedCountry,
    selectedCity: state.travelPage.selectedCity,
    travels: state.travelPage.travels,
    currencies: state.travelPage.currencies
});

export default connect(mapStateToProps, {})(CreateTravelContainer);