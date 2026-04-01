import track from "../effect/track.js";

const handleGet = (target, key) => {
  console.log("拦截到了", target, key);
  return Reflect.get(target, key);
};
export default handleGet;
