import { trackOpType } from "../contanst.js";
import track from "../effect/track.js";

const handleHas = (target, key) => {
  track(target, key, trackOpType.HAS);
  return Reflect.has(target, key);
};
export default handleHas;
