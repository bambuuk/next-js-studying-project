"use client";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </>
  )
}

export default BlogPage
