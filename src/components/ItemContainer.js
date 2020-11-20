import React from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { buyCake } from "../actions/cakeActions";
import { buyIceCream } from "../actions/iceCreamAction";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={() => props.buyItem()}>buyItem</button>
        </div>
    );
}

ItemContainer.propType = {
    item: PropType.number.isRequired,
    buyItem: PropType.func.isRequired
};
const mapStateToProps = (state, ownProps) => {
    //if the cake is passed in or not
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCream;

    return {
        item: itemState
    };
};
const mapDistpatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    };
};
export default connect(mapStateToProps, mapDistpatchToProps)(ItemContainer);
