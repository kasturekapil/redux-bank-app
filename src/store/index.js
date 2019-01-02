import reducer from "../reducers";
import {createStore} from "redux";
import {withdrawCash} from "../actions";

const initalState = {
    username: "Janny",
    totalAmount: 2500701
  };

export const store = createStore(reducer, initalState);

export function dispatchBtnAction (event) {
    console.log("hi");
    const withdrawAmount = event.target.dataset.amount;
    console.log(withdrawAmount);
    
    const totalAmount = (store.getState().totalAmount - withdrawAmount);
    console.log(totalAmount);
    store.dispatch(withdrawCash(totalAmount));
}