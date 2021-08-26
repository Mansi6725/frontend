export const passaction=(pass)=>{
    return{
        type:"changed_pass",
        newpass:pass
    }
}