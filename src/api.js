import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID -0oqEPztN7NZrkNfVoum3VUD0DbScw_m5uhptx6ibag",
    },
    params: {
      query: term,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
