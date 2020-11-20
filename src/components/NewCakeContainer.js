import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakeQty } from "../actions/cakeActions";
import PropTypes from "prop-types";

function NewCakeContainer(props) {
    const [qty, setQty] = useState(1);

    const onSubmit = e => {
        e.preventDefault();
        props.buyCakeQty(qty);
        setQty(1);
    };

    return (
        <div>
            <label>Number of cakes - {props.numOfCakes} </label>
            <form onSubmit={onSubmit}>
                <input
                    type="number"
                    onChange={e => setQty(e.target.value)}
                    value={qty}
                />
                <button type="submit">Buy cake</button>
            </form>
        </div>
    );
}

NewCakeContainer.propTypes = {
    numOfCakes: PropTypes.number.isRequired,
    buyCakeQty: PropTypes.func.isRequired
};
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    };
};

export default connect(mapStateToProps, { buyCakeQty })(NewCakeContainer);
