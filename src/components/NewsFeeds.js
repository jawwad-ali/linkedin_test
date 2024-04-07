import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeeds = () => {
  const [data, setData] = useState([]);

  const newsFeeds = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f1daf82e495748ffa4e91160a20b3246"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data.articles);
      });
  };

  useEffect(() => {
    newsFeeds();
  }, []);

  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <img
            src={item.urlToImage}
            alt=""
            style={{ height: "100px", width: "100px" }}
          />

          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
