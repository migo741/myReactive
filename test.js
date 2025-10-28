import { reactive } from "./reactive.js";

const state = reactive({
    count: 0
});
console.log(state.count)