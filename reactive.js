import { handle } from "./handle.js";
import { isObject } from "./utils.js"

export function reactive(target) {
    if(!isObject(target)){
        return target;
    }
    const obj = new Proxy(target,handle())
    return obj
}
