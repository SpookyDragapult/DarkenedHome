// src/components/NewsSection.js
import React from 'react';

const NewsSection = ({ news }) => {
  return (
    <div className="news-section" style={{marginLeft: "150px"}}>
      <h3>Latest News</h3>
      <ul className="list-group">
        {news.map(item => (
          <li key={item.id} className="list-group-item">
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
