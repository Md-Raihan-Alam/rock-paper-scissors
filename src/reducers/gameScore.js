const counterReducer=(state=0,action)=>{
    switch(action.type){
        case 'WIN':
            return state+1
        case 'LOSS':
            return state-1
        default:
            return state
    }
}
export default counterReducer