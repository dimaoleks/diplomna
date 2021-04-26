import MyTravel from "./MyTravels";
import React from "react";
import {connect} from "react-redux";
import {addNewTravel} from "../../../redux/travel-reducer";

class MyTravelContainer extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <MyTravel addNewTravel={addNewTravel}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    travels: state.travelPage.travels
});

export default connect(
    mapStateToProps,
    {
        addNewTravel
    }
)(MyTravel);