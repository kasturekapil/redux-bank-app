export default (state, action) => {
    console.log(JSON.stringify(action) + "action");
    console.log(JSON.stringify(state) + "state");
    switch(action.type){
        case "CASH_WITHDRAW":
        return {
            ...state,
            totalAmount: action.updatedcash
        };
        default :
        return state;
    }
}