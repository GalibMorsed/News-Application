import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card text-bg-dark mb-3 d-inline-block my-1 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || "https://via.placeholder.com/345x200?text=No+Image"}
        className="card-img"
        alt={title || "News image"}
        style={{
          height: "300px",
          objectFit: "cover",
          opacity: 0.5,
          background: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h5 className="card-title text-light">
          {title || "No Title Available"}
        </h5>
        <p className="card-text text-light" style={{ color: "#d3d3d3" }}>
          {description
            ? description.length > 100
              ? description.substring(0, 100) + "..."
              : description
            : "Description not available."}{" "}
          {}
        </p>
        <a
          href={url || "#"}
          className="btn btn-primary btn-sm mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
