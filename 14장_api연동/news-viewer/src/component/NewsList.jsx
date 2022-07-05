import React, { Fragment, useCallback } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const NewsList = (props) => {
  const API_KEY = "418fcdbc90db4504a296e795e107ed34";
  const URL =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-06-05&sortBy=publishedAt" +
    "&apiKey=" +
    API_KEY;
  if (props.data) props.data.map((ele) => console.log(ele.title));
  const sample = {
    title: "제목",
    description: "설명",
    url: "naver.com",
    img: "asdf.jpg",
  };
  const [articles, setArticles] = useState(null);
  const dataFetching = useCallback(async () => {
    try {
      const response = await axios.get(URL);

      console.log(response.data.articles);
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  }, [URL]);
  useEffect(() => {
    dataFetching();
  }, [dataFetching]);
  if (!articles) return null;
  return (
    <Fragment>
      {articles.map((ele) => {
        return <NewsItems article={ele} />;
      })}
    </Fragment>
  );
};

export default NewsList;
