import React from 'react'
import {useParams} from 'react-router-dom/cjs/react-router-dom'
import query from 'query-string'
import _ from 'lodash'

import PostsList from './postsList'
import Post from './post'
import {useLocation} from 'react-router-dom'

const Posts = ({match, location}) => {
  const posts = [
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'},
  ]

  // const {postId} = useParams()
  const postId = match.params.postId

  // const location = useLocation();
  const search = query.parse(location.search)
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts

  console.log('search:', search)

  return (
    <>
      {postId
        ? <Post postId={postId} posts={posts}/>
        : <PostsList posts={cropPosts}/>
      }
    </>
  )
}

export default Posts
