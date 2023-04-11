import { useSelector } from 'react-redux';
import { selectSubReddits } from '../../redux/subreddits/subredditsSlice';
import PostItem from '../PostItem/PostItem';
import { useParams } from 'react-router-dom';

export default function Posts(){

    const subReddits = useSelector(selectSubReddits);
    const param = useParams();
    const lowerCaseParam = param.forum.toLowerCase();
    const endPoint = `https://www.reddit.com/r/${lowerCaseParam}.json`;
    return(
        <PostItem/>
    )
}