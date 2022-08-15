import { useEffect } from 'react'
import { fetchAllPosts } from "../services/postService"
import { fetchAllUsers } from '../services/usersService'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../components/Loader'
import PostCard from '../components/post/PostCard'
import { useInfiniteScroll ,useFetch} from '../hooks'

const Explore = () => {
  const {isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  const { loadMoreRef, page } = useInfiniteScroll()
  const { posts, loading } = useFetch(page)
  useEffect(
    () => {
      setTimeout(() => {
        dispatch(fetchAllPosts())
        dispatch(fetchAllUsers())
      }, 1000)
    },
    []
  )
  return (
    isLoading ?
      <div className='explore page load'>
        <Loader />
      </div> :
      <div className='explore page'>
      {posts.map(
        (post) =>
          <PostCard key={post.id} post={post} users={users}
          />
        )}
        <div ref={loadMoreRef}>
          {loading && <>loading...</>}
        </div>
      </div>
  )
}

export default Explore