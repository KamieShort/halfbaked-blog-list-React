// - Main component should have a state variable called `blogs` that defaults to an empty array
// - Main component should use a `useEffect` hook to call `getBlogs` from the services layer asynchronously and then set the returned data in state

import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../services/blogs';
import BlogCard from '../../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();

      setBlogs(resp);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
}
