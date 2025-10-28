import { reactive } from "./reactive.js";
import { effect } from "./collectUpdates/effect.js";  
export const reactiveMap = new Map()

const state = reactive({
    count: 0
});
effect(state,()=>{
    console.log(state.count)
})
effect(state,()=>{
    console.log(`实现响应式系统${state.count}`)
})
state.count++
console.log("reactiveMap---",reactiveMap)