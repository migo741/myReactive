import { reactive } from "./reactive.js";
import { effect } from "./effect.js";  
export const fnArr = []

const state = reactive({
    count: 0
});
effect(()=>{
    console.log(state.count)
})

state.count++