/**
 * Local storage helpers
 */

export const storageGetItem = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const storageSetItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const storageRemoveItem = item => {
  localStorage.removeItem(item);
};
