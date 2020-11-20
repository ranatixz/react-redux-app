import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../actions/cakeActions";
import { buyIceCream } from "../actions/iceCreamAction";

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
            <h2>Num of Ice creams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>
                Buy Ice cream
            </button>
        </div>
    );
}

export default HookCakeContainer;
