const generateId = () => {
  const randomString = Math.random().toString(32).substring(2);
  const date = Date.now().toString(32);
  return randomString + date;
};

module.exports = { generateId };
