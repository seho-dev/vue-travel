export default{
    changecity(state,data){
        state.city=data
        try {
            localStorage.city=data
        } catch (error) {}
    }
}