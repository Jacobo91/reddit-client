import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { selectSubReddits } from '../../redux/subreddits/subredditsSlice';
import {ThreeDots} from 'react-loader-spinner';
import { clearSearchTerm } from '../../redux/searchterm/searchTermSlice';

export default function SideBar(){

    const subReddits = useSelector(selectSubReddits)

    const loading = subReddits.isLoading;

    const dispatch = useDispatch();

    function handleClearSearchTerm(){
        dispatch(clearSearchTerm())
    }

    return(
        <aside>
            <h2 className='aside-title'>
                Subreddits
            </h2>
            <ul>
            {
                loading || subReddits.length === 0 ? 
                    <ThreeDots
                        height="40"
                        width="40"
                        radius="9"
                        color="#3D5AF1"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    /> 
                    : 
                    subReddits.data.children.map((subReddit) => (
                        <li 
                            key={subReddit.data.display_name}
                            onClick={handleClearSearchTerm}
                        >
                            <NavLink to={`/r/${subReddit.data.display_name}`} className="navlink bold">
                                <img 
                                    src={subReddit.data.icon_img} 
                                    alt="" 
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        border:`3px solid ${subReddit.data.key_color}`,
                                        marginRight: 10,
                                    }}
                                />
                                {subReddit.data.display_name}
                            </NavLink>
                        </li>
                    ))
            }
            </ul>
        </aside>
    )
}



