import trigger from "../effect/trigger.js";
import trackOpType from "../contanst.js";

const handleDelete = (target, key) => {
  if (!target.hasOwnProperty(key)) {
    return false;
  }
  trigger(target, key, trackOpType.DELETE);
  Reflect.deleteProperty(target, key);
};
export default handleDelete;
