const fetchDataFromApi = async (urlEndPoint, options = {}) => {
  const url = urlEndPoint;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`src :: utils :: api.js \n${error}`);
  }
};

export default fetchDataFromApi;
