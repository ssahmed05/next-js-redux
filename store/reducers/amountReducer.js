const amountReducer = (state = 69420, action)  => {

    if(action.type == "deposit"){
        return state + Number(action.payload);
    }
    else if(action.type == "withDraw"){
        
        return state - Number(action.payload);
        
    } else {
        return state ;

    }
}

export default amountReducer