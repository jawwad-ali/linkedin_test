import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const NewsFeeds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const newsFeeds = () => {
    try {
      setLoading(true);
      // axios 
      //   .get(
      //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=f1daf82e495748ffa4e91160a20b3246"
      //   )
      axios.get(
        'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9j4uzRMC3xL1IPxxjI8WzKhmRCFKB2jQ'
      )
        .then((response) => {
          console.log(response.data.results);
          setData(response.data.results);
        });
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    newsFeeds();
  }, []);

  return (
    <div className="container" key={Math.random() * 10}>
      <div className="row">
        {/* <div className="col-md-3">
          <h2>Categories</h2>
          <ul> 
            <li>Politics</li>
            <li>Politics</li> 
            <li>Politics</li>
            <li>Politics</li>
          </ul>
        </div>  */}

        {/* Spacer Column */}
        {/* <div className="col-md-1"></div> */}

        {/* Card Columns */}

        {loading ? (
          <Loader />
        ) : (
          data?.map((item, index) => (
            <NewsCard
              index={index}
              img={item.multimedia[0].url}
              title={item.title}
              description={item.abstract}
              link={item.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeeds;


