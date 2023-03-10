import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../services/posts'

interface Post {
  id: string
  title: string
}

export function PostList() {
  const [posts, setPosts] = useState<Array<Post>>([])
  useEffect(() => {
    getPosts().then(setPosts)
  }, [])
  return (
    <>
      {posts.map((post) => {
        return (
          <h1 key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h1>
        )
      })}
    </>
  )
}
