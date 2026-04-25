import React from "react";

function ActivityCard({title, date, category}) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ActivityCard;