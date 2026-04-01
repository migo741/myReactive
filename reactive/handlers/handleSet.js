import trigger from "../effect/trigger.js";

const handleSet = (target, key, value) => {
  const oldValue = target[key];
  const type = target.hasOwnProperty(key) ? trackOpType.SET : trackOpType.ADD;
  if (Object.is(oldValue, value)) {
    return false;
  }
  trigger(target, key, type);
  Reflect.set(target, key, value);
};
export default handleSet;
