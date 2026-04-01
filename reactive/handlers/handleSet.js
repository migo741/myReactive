import trigger from "../effect/trigger.js";

const handleSet = (target, key, value) => {
  console.log("拦截到了", target, key, value);
  Reflect.set(target, key, value);
};
export default handleSet;
