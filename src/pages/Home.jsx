import { useEffect } from 'react'
import { fetchAllPosts } from "../services/postService"
import { fetchAllUsers } from '../services/usersService'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../components/Loader'
import PostCard from '../components/post/PostCard'
import { CreatePost } from '../components/post/CreatePost'
import { Users } from '../components/Users'

const Home = () => {
	const { allposts, isLoading } = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const { users } = useSelector((state) => state.users)
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
		isLoading ? (
			<div className='home page load'>
				<Loader />
			</div>) : (
				<div className='home page'>
					<CreatePost />
					<Users users={users} />
				{allposts.map(
					(post) =>
						<PostCard key={post._id} post={post} users={users}
						/>
				)}
			</div>
		)
	)
}

export default Home