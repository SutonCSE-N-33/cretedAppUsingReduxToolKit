import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './PostSlice';

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) =>state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts());
    },[])
    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            {
                posts && posts.map((post) => (
                    <div key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default PostView;