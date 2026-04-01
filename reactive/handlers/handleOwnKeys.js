import trigger from "../effect/trigger.js";
import { trackOpType } from "../contanst.js";

const handleOwnKeys = (target) => {
  trigger(target, trackOpType.ITERATE);
  return Reflect.ownKeys(target);
};
export default handleOwnKeys;
