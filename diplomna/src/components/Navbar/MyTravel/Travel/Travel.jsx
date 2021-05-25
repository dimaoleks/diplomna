import React from "react";
import s from './../MyTravel.module.css';

class Travel extends React.Component {

    const
    onItemClick = () => {
        return 123;
    }

    render() {
    debugger;
        return (
            <div className={s.travelItem} onDoubleClick={this.onItemClick}>
                <div className={s.itemHeadText}>
                    <h2>{this.props.name}</h2>
                </div>
                <div className={s.itemCountryText}>
                    <h3>{this.props.country}</h3>
                </div>
                <div className={s.itemDetailsText}>
                    Budget: {this.props.money} ({this.props.currency})
                </div>
                <div className={s.itemDetailsText}>
                    <h4>Date</h4> <div>{this.props.date}</div>
                </div>
                <div className={s.addButtonCategory}>
                    <button>Add Category</button>
                </div>
            </div>
        );
    }
}

export default Travel;