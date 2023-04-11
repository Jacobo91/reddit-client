import { useSelector } from 'react-redux';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { selectSubReddits } from '../../redux/subreddits/subredditsSlice';

export default function SideBar(){

    const subReddits = useSelector(selectSubReddits)

    const loading = subReddits.isLoading;

    return(
        <aside>
            <h2 className='aside-title'>
                Subreddits
            </h2>
            <ul>
            {
                loading || subReddits.length === 0 ? "Loading..." : 
                    subReddits.data.children.map((subReddit) => (
                        <li key={subReddit.data.display_name}>
                            <NavLink to={`/r/${subReddit.data.display_name}`} className="navlink">
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



