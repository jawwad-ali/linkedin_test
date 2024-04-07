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
    <div className="container row ">
      {data.map((item, idx) => (
        <div className="col mb-5">
          <div key={idx} className="card" style={{ width: "18rem" }}>
            <img src={item.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href={item.url} target="_blank" className="btn btn-primary">
                Read News
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
