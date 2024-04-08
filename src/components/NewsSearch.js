import React, { useState } from "react";
import axios from "axios";

const NewsSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newsData, setNewsData] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://content.guardianapis.com/search?q=${searchTerm}&api-key=0c59c91f-e7f2-4553-b50e-c59e54746e46`
      );
      console.log("SEARCH API", response.data.response.results);
      setNewsData(response.data.response.results);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {newsData?.map((article) => (
            <li key={article.webTitle}>
              <a
                href={article.webUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {article.webTitle}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsSearch;
