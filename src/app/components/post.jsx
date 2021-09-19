import React from 'react'

const Post = ({postId, posts}) => {

  const getPostById = (id) => posts.find(post => post.id.toString() === id)

  const post = getPostById(postId)

  return (
    <h2>{post ? post.label : 'Post did not find'}</h2>
  )
}

export default Post
