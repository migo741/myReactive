import track from "../effect/track.js";
import reactive from "../reactive.js";
import { trackOpType } from "../contanst.js";

const handleGet = (target, key) => {
  track(target, key, trackOpType.GET);

  const res = Reflect.get(target, key);
  if (res instanceof Object) {
    reactive(res);
  }

  return res;
};
export default handleGet;
