const initialState={
    user:"",
    email:"",
    pass:""
};
 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "changed_user":
            return {
                ...state,
                user:action.newuser,
            };
        case "changed_email":
            return{
                ...state,
                email:action.newemail,
            };
        // case "changed_pass":
        //     return{
        //         pass:action.newpass
        //     };
        default: return state;
    }
}
export default reducer;