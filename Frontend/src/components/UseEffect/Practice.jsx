import React, { useState, useEffect } from "react";
import axios from "axios";

const Practice = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); // Set the posts data to the state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
        setLoading(false); // Stop loading in case of error
      });
  }, []); // Empty dependency array means this runs only on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-redd-500 bg-blue-300 text-center">
        {posts.map((post) => (
          <p key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.name}</p>
          </p>
        ))}
    </div>
  );
};

export default Practice;
