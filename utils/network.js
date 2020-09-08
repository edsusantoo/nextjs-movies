const baseUrl = process.env.THEMOVIEDB_API_BASEURL;
const apiKey = process.env.THEMOVIEDB_APIKEY;

async function fetchQuery(path, params = null) {
  let url;
  if (params !== null) {
    url = `${baseUrl}${path}/${params}?api_key=${apiKey}`;
  } else {
    url = `${baseUrl}${path}?api_key=${apiKey}`;
  }

  try {
    const response = await fetch(`${url}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      throw error;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

const fetcher = (url) => fetch(url).then((r) => r.json());

export { baseUrl, fetchQuery, fetcher };
