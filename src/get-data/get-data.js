const axios = require(`axios`);
const mapArrToStrings = require(`../map-arr-to-strings/map-arr-to-strings`);

const dataSrc = `https://jsonplaceholder.typicode.com/users`;

const getData = async () => {
  const response = await axios.get(dataSrc);
  const usersId = response.data.map(({ id }) => id);

  return mapArrToStrings(usersId);
};

module.exports = getData;
