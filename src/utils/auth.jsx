/* 

Component : auth

*/
/** ****************************** Import Packages *************************** */
import { storageSetItem, storageGetItem } from "./localStorage";
import { storageRemoveItem } from "./localStorage";

const KARMA_USER = "KARMA_USER";

const saveLocalUser = user => storageSetItem(KARMA_USER, user);

const getLocalUser = () => storageGetItem(KARMA_USER);

const deleteLocalUser = () => storageRemoveItem(KARMA_USER);

export { saveLocalUser, getLocalUser, deleteLocalUser };
