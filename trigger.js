import { fnArr } from "./test.js";

export function trigger(){
    for(const fn of fnArr){
        fn()
    }
}