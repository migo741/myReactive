import { reactiveMap } from "../test.js";

export function trigger(){
    for(const fnSet of reactiveMap.values()){
        for(const fn of fnSet){
            fn()
        }
    }
}