import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state
      try {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=40&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles || []); // Ensure articles is an array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest{" "}
        <span className="badge bg-danger">{category.toUpperCase()} News</span>
      </h2>
      {loading && <p className="text-center">Loading...</p>}{" "}
      {/* Show loading message */}
      {error && <p className="text-center text-danger">{error}</p>}{" "}
      {/* Show error message */}
      {articles.length > 0
        ? articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title || "No title available"} // Fallback title
              description={news.description || "No description available"} // Fallback description
              src={
                news.urlToImage ||
                "https://via.placeholder.com/345x200?text=No+Image"
              } // Fallback image
              url={news.url}
            />
          ))
        : !loading &&
          !error && (
            <p className="text-center">No news available at the moment.</p>
          )}
    </div>
  );
};

export default NewsBoard;
