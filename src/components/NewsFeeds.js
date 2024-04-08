import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Loader from "./Loader";
import Categories from "./Categories";

const NewsFeeds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetching articles by category from NEWSAPI
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=f1daf82e495748ffa4e91160a20b3246"
        );
        const articlesData = response.data.sources;
        setArticles(articlesData);
        const uniqueCategories = [
          ...new Set(articlesData.map((article) => article.category)),
        ];
        setCategories(uniqueCategories); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(categories)
    fetchData()
  }, []);

  const newsFeeds = () => {
    // Fetching articles from New York Times. By Default these articles will be shown 
    try {
      setLoading(true);
      axios
        .get(
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9j4uzRMC3xL1IPxxjI8WzKhmRCFKB2jQ"
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
        <div className="col-md-12">
          <Categories
            articles={articles}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setArticles={setArticles}
          />
        </div>

        {/* Spacer Column */}
        {/* <div className="col-md-1"></div> */}

        {/* Card Columns */}
        {
          selectedCategory.length >0 ? (
            null 
          ):(
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
