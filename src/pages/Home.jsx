import { useEffect } from 'react'
import {
	fetchAllPosts,
	fetchUserPost,
	fetchUserFeed,
	fetchPostWithLimit,
	deleteUserPost,
	editUserPost,
	likeUserPost,
	dislikeUserPost,
	createUserPost,
} from "../services/postService"
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../components/Loader'
import PostCard from '../components/post/PostCard'

const Home = () => {
	const { allposts, isLoading } = useSelector((store) => store.posts)
	const dispatch = useDispatch()

	useEffect(
		() => {
			setTimeout(() =>
				dispatch(fetchAllPosts()), 3000)
		},
		[]
	)
	return (
		isLoading ? (
			<div className='home page load'>
				<Loader />
			</div>) : (
			<div className='home page'>
				{allposts.map(
					(post) =>
						<PostCard key={post._id} post={post}
						/>
				)}
			</div>
		)
	)
}

export default Home