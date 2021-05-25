export const setDataToLocal = (itemName, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(itemName, serializedState);
  } catch {
    // ignore write errors
  }
};
export const getDataFromLocal = (itemName) => {
  try {
      return JSON.parse(localStorage.getItem(itemName));
  } catch {
      return undefined;
  }
};