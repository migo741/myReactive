import { reactiveMap } from "../test.js";


export function track(){
    if(!global.activeEffect) return
    if(!reactiveMap.has(global.prop) ) {
        reactiveMap.set(global.prop,new Set())
    }
    reactiveMap.get(global.prop).add(global.activeEffect)
}