import { BASE_URL } from "@/constans";
import api from "./interseptors";

export const getHighlights = async () => {
  const response = await api.get(`${BASE_URL}/items.json`);

  return response.data
};
