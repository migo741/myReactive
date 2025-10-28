import { fnArr } from "./test.js";


export function track(){
    if(global.activeEffect){
        fnArr.push(global.activeEffect)
    }
}