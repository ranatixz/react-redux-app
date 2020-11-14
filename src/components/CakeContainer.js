import React from 'react'
import { buyCake } from '../actions/cakeActions';
import { buyIceCream } from '../actions/iceCreamAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CakeContainer(props) {
    console.log(props);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <h2>Number of ice creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy ice cream</button>
        </div>
    )
}

CakeContainer.propTypes = {
    numOfCakes: PropTypes.number.isRequired,
    buyCake: PropTypes.func.isRequired,
    numOfIceCreams: PropTypes.number.isRequired,
    buyIceCream: PropTypes.func.isRequired
};

const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes,
        numOfIceCreams: state.iceCream.numOfIceCream
    }
};

export default connect (mapStateToProps, { buyCake, buyIceCream })(CakeContainer);
