import trackOpType from "../contanst.js";

const track = (target, key, type) => {
  if (type === trackOpType.ITERATE) {
  }
  console.log("拦截到了", target, key);
};
export default track;
