export const emailaction=(email)=>{
    return{
        type:"changed_email",
        newemail:email
    }
}