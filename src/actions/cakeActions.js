import { BUY_CAKE, BUY_CAKE_QTY } from "../types/cakeTypes";

export const buyCake = () => {
    return {
        type: BUY_CAKE
    };
};

export const buyCakeQty = qty => {
    return {
        type: BUY_CAKE_QTY,
        payload: qty
    };
};
