import handleGet from "./handleGet.js";
import handleSet from "./handleSet.js";
import handleDelete from "./handleDelet.js";
import handleOwnKeys from "./handleOwnKeys.js";
import handleHas from "./handleHas.js";
const handle = {
  get: handleGet,
  set: handleSet,
  deleteProperty: handleDelete,
  ownKeys: handleOwnKeys,
  has: handleHas,
};

export default handle;
