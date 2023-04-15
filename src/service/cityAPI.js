import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "948ace52dfmshdfe5b745718ea6bp11c7ecjsnd661a3957043",
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};

export const getCityInfo = async (name) => {
  try {
    const result = await axios.get(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        params: {
          namePrefix: name,
          types: "CITY",
        },
        headers,
      }
    );
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};
