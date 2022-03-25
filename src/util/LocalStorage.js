const setItems = (value) => localStorage.setItem('item', JSON.stringify(value));
const getItems = (key) => JSON.parse(localStorage.getItem(key));
export { setItems, getItems };
