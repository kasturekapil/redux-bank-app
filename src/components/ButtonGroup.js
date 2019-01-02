import React from "react";
import {store} from "../store";
import { withdrawCash } from "../actions";

const ButtonGroup = ({ amount }) => (
    <div className="button-group">
        {amount.map((totalAmount, i) => (
            <button
                data-totalAmount={totalAmount}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
               WithDraw {amount}
            </button>
        ))}
    </div>
);



export default ButtonGroup;