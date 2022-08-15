import { useCallback, useEffect, useState } from "react"
import { fetchdata } from "../utils/api"

export const useFetch = (page) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const limit = 2
    
    const getlimitedPosts = useCallback(async () => {
        try {
            setLoading(true)
            const res = await fetchdata('get', `/posts/${limit}/${page}`, false)
            console.log(page)
            console.log(res.data.posts)
            setPosts(res.data.posts)
            setLoading(false)
            console.log(page)
        }
        catch (err) {
            console.log(err)
        }
    }, [page])

    useEffect(() => {
        getlimitedPosts()
    }, [getlimitedPosts])
    return {posts ,loading}
}