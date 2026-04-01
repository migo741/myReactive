import trackOpType from "../contanst.js";

const trigger = (target, key, opType) => {
  console.log("拦截到了", target, key, opType);
};

export default trigger;
