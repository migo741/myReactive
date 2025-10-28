import { handle } from "./handle.js";

function reactive(target) {
    const obj = new Proxy(target,handle)
    return obj
}