import axios from "axios";

export const searchCards = async (query: string) => {
  const response = await axios.get(
    `https://api.scryfall.com/cards/search?q=${query}`
  );
  return response.data;
};
