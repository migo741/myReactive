import handle from "./handlers/handle.js";

function reactive(target) {
  const obj = new Proxy(target, handle);
  return obj;
}
export default reactive;
