const getUser = () => {
  const existingUser = sessionStorage.getItem('raselEcom');
  if (existingUser) {
      return existingUser;
  } else {
      const newUser = 'rasel-' + new Date().getTime();
      sessionStorage.setItem('raselEcom', newUser)
      return newUser;
  }
}
// Session
// raselEcom - rasel-123947
const getDataKey = () => {
  const userId = getUser();
  return `rasel/carts/${userId}`
}
// rasel/carts/rasel-123947
const getDatabaseCart = () => {
  const dataKey = getDataKey();
  const data = localStorage.getItem(dataKey) || "{}";
  return JSON.parse(data);
}

const addToDatabaseCart = (key, count) => {
  const currentCart = getDatabaseCart();
  currentCart[key] = count;
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}
addToDatabaseCart('chamos', 3);
addToDatabaseCart('plate', 6);
addToDatabaseCart('handi-patil', 2);
addToDatabaseCart('kata-chamos', 12);

const removeFromDatabaseCart = key => {
  const currentCart = getDatabaseCart();
  delete currentCart[key];
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
  localStorage.removeItem(getDataKey());
}