import axios from "axios";
import swal from 'sweetalert';

export const getAllPizza = ()=>async(dispatch)=>{
    dispatch({type:"GET_PIZZA_REQUEST"})
    try {
        const res = await axios.get("/api/pizzas/getAllPizzas")
        // console.log(res)
        dispatch({type:"GET_PIZZA_SUCCESS",payload:res.data})
    } catch (error) {
        dispatch({type:"GET_PIZZA_FAIL",payload:error})
    }

}

export const addPizza = (pizza)=>async(dispatch)=>{
    dispatch({type:"ADD_PIZZA_REQUEST"})
    try {
        const res = await axios.post("/api/pizzas/addPizza",{pizza})
        // console.log(res)
        dispatch({type:"ADD_PIZZA_SUCCESS",payload:res.data})
    } catch (error) {
        dispatch({type:"ADD_PIZZA_FAIL",payload:error})
    }

}

export const getPizzaById = (pizzaId)=>async(dispatch)=>{
    dispatch({type:"GET_PIZZABYID_REQUEST"})
    try {
        const res = await axios.post("/api/pizzas/getpizzabyid",{pizzaId})
        // console.log(res)
        dispatch({type:"GET_PIZZABYID_SUCCESS",payload:res.data})
    } catch (error) {
        dispatch({type:"GET_PIZZABYID_FAIL",payload:error})
    }
}

export const updatePizzaById = (updatedPizza)=>async(dispatch)=>{
    dispatch({type:"UPDATE_PIZZABYID_REQUEST"})
    try {
        const res = await axios.post("/api/pizzas/updatepizza",{updatedPizza})
        // console.log(res)
        dispatch({type:"UPDATE_PIZZABYID_SUCCESS",payload:res.data})
        window.location.href = "/admin/pizzalist"
    } catch (error) {
        dispatch({type:"UPDATE_PIZZABYID_FAIL",payload:error})
    }
}

export const deletePizzaById = (pizzaId)=>async(dispatch)=>{
    try {
     await axios.post("/api/pizzas/deletepizza",{pizzaId})
        swal("Pizza Delete Successfully", "success");
        window.location.href ="/admin/pizzalist"
    } catch (error) {
        swal("Error while deleting the pizza");
    }
}

export const filterPizza = (searchKey,category)=>async(dispatch)=>{
    let filterdPizza;
    dispatch({type:"GET_PIZZA_REQUEST"})
        try {
            const res = await axios.get("/api/pizzas/getAllPizzas")
            filterdPizza = res.data.filter((pizza)=>{
                   return( pizza.name.toLowerCase().includes(searchKey))
            });
            if (category!=="all"){
                filterdPizza = res.data.filter((pizza)=>{
                    return( pizza.category.toLowerCase()===category)
             });
            }
            dispatch({type:"GET_PIZZA_SUCCESS",payload:filterdPizza})
        } catch (error) {
            dispatch({type:"GET_PIZZA_FAIL",payload:error})
        }
}