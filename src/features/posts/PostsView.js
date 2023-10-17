import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice';

export default function PostsView() {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <section>
            <h3>PostsView</h3>
            {isLoading && <h4>Loading...</h4>}
            {error && <p>{error}</p>}
            {
                posts[0] && <div className="posts">
                    {
                        posts.map((post) => <article
                            key={post?.id}
                            className="post"
                        >

                            <h4>{post?.title}</h4>
                            <p>{post?.body}</p>
                        </article>
                        )
                    }
                </div>
            }
        </section>
    )
}
