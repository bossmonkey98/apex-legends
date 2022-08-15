import { useRef, useState, useCallback, useEffect } from "react"

export const useInfiniteScroll = () => {
    const [page, setPage] = useState(0)
    const loadMoreRef = useRef(null)

    const handleObserver = useCallback((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            setPage(page+1)
        }
    }, [])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold:1.0,
        }
        const observer = new IntersectionObserver(handleObserver, option)
        if (loadMoreRef.current)
            observer.observe(loadMoreRef.current)
    }, [handleObserver])
    return {loadMoreRef ,page}
}