import axios from "axios";
import { New } from "../models/new";
const options = {
  method: "GET",
  url: "https://free-news.p.rapidapi.com/v1/search",
  params: { q: "Elon Musk", lang: "en" },
  headers: {
    "X-RapidAPI-Key": "572214fb6emsh0c156e2874a742ap1a1757jsnb51002a745d0",
    "X-RapidAPI-Host": "free-news.p.rapidapi.com",
  },
};

export const getNews = (): Promise<any> => {
  return axios.request(options);
};
