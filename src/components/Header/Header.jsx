import './header.css';
import redditLogo from '../../images/redditLogo.png';
import { setSearchTerm } from '../../redux/searchterm/searchTermSlice';
import { useDispatch } from 'react-redux';
import 'animate.css';
import { useState } from 'react';


export default function Header(){

    const [myTerm, setMyTerm] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const term = myTerm;
        dispatch(setSearchTerm(term))
        setMyTerm('')
    }

    return(
        <header className="header flex-center-y-axis">

            <div className='logo-wrapper flex-center-y-axis animate__animated animate__bounceIn'>
                <img src={redditLogo} alt="reddit logo" className='logo' />
                <span className='bold logo-word margin-inline'><span className='bold highlight' >Reddit</span>Minimal</span>
            </div>

            <form 
                className='searchbar' 
                onSubmit={handleSubmit}
            >

                <input 
                    type="text" 
                    placeholder='Search' 
                    className='search-input'
                    value={myTerm}
                    onChange={(e) => setMyTerm(e.target.value)}
                />

                <button>
                    <i className="fa-solid fa-magnifying-glass margin-inline"></i>
                </button>  
                
            </form>

            <span></span>

        </header>
    )
}