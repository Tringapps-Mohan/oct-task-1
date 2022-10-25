export const Reducer = (state={storedContent :localStorage.getItem("oct-task-1")?JSON.parse(localStorage.getItem("oct-task-1")):{}},action) =>{
    switch(action.type){
        case "GetCards":
            return ({
                ...state,storedContent :localStorage.getItem("oct-task-1")?JSON.parse(localStorage.getItem("oct-task-1")):{}
            }) ;
        default:
            return state;  
    }
};