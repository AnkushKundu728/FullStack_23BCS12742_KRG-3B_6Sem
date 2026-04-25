import React from "react";
import ActivityCard from "./components/ActivityCard";

function App() {
  const activities = [
    { title: "Gym", date: "25-04-2026", category: "Fitness" },
    { title: "Study", date: "25-04-2026", category: "Education" },
    { title: "Cricket", date: "25-04-2026", category: "Sports" },
    { title: "Movie", date: "25-04-2026", category: "Entertainment" }
  ];

  return (
    <div>
      <h1>My Activities</h1>
      {activities.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          date={activity.date}
          category={activity.category}
        />
      ))}
    </div>
  );
}

export default App;