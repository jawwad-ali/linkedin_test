import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

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
      <div class="container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            class="btn btn-outline-primary ml-2"
            type="button"
            onClick={handleSearch}
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <div className="row"> 
              <ol>
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
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsSearch;
