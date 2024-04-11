import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Categories from "./Categories";

import Loader from "./Loader";
 
const NewsFeeds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetching articles by category from NEWSAPI
    const fetchArticleByCategory = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=f1daf82e495748ffa4e91160a20b3246"
        );
        const articlesData = response.data.sources;
        setArticles(articlesData);

        // There are no duplicates in categories
        const uniqueCategories = [
          ...new Set(articlesData.map((article) => article.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchArticleByCategory();
  }, []);

  // CONSOLE LOGS
  console.log("default data", data);
  console.log(categories);
  console.log("Category Articles", articles);
  console.log("selectedCategory", selectedCategory);

  const newsFeeds = async () => {
    // Fetching articles from New York Times. By Default these articles will be shown
    try {
      setLoading(true);
      await axios
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
    <div className="container">
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

        {/* Card Columns */}
        {loading ? (
          <Loader />
        ) : selectedCategory.length > 0 ? null : (
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
