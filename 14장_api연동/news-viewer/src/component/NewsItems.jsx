import React, { Fragment } from "react";

const NewsItems = (props) => {
  return (
    <div style={{ border: "solid" }}>
      <p>{props.article.title}</p>
      <p>{props.article.description}</p>
      <a href={props.article.url}> LINK</a>
      <img src={props.article.urlToImage} style={{ width: "200px" }} />
    </div>
  );
};

export default NewsItems;
