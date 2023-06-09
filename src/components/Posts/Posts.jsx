import './posts.css';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPosts, postsSelector } from '../../redux/posts/postsSlice';
import { selectSearchTerm } from '../../redux/searchterm/searchTermSlice';
import {ThreeDots} from 'react-loader-spinner';

export default function Posts(){
    const searchTerm = useSelector(selectSearchTerm)
    const dispatch = useDispatch();

    const posts = useSelector(postsSelector);
    const param = useParams();
    const lowerCaseParam = param.forum ? param.forum.toLowerCase() : '';
    const endPoint = searchTerm ?
    `https://www.reddit.com/search.json?q=${searchTerm.replace(' ', '%20').toLowerCase()}` :
    `https://www.reddit.com/r/${lowerCaseParam}.json`;
    

    useEffect(() => {
        dispatch(fetchPosts(endPoint))
    }, [endPoint])
    
    const loading = posts.isLoading;
    return(
        <section className='posts-gallery' >
            {
                loading || posts.length === 0 ? (
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#3D5AF1"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />

                ) : (
                posts.data.children.map(post => (
                    <PostItem
                        key={post.data.id}
                        id={post.data.id}
                        likes={post.data.likes}
                        title={post.data.title} 
                        thumbnail={post.data.thumbnail}
                        author={post.data.author}
                        created={post.data.created_utc}
                        num_comments={post.data.num_comments}    
                    />
                ))
            )}
        </section>
    )
}

