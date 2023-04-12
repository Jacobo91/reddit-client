import './header.css';
import redditLogo from '../../images/redditLogo.png';
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from '../../redux/searchterm/searchTermSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'animate.css';


export default function Header(){

    const term = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    function handleOnChange(e){
        const term = e.target.value
        dispatch(setSearchTerm(term))
    }
    
    function handleClearSearchTerm(){
        dispatch(clearSearchTerm())
    }
    return(
        <header className="header flex-center-y-axis">

            <div className='logo-wrapper flex-center-y-axis animate__animated animate__bounceIn'>
                <img src={redditLogo} alt="reddit logo" className='logo' />
                <span className='bold logo-word margin-inline'><span className='bold highlight' >Reddit</span>Minimal</span>
            </div>

            <div className='searchbar' >

                <input 
                    type="text" 
                    placeholder='Search' 
                    className='search-input'
                    onChange={handleOnChange}
                    value={term}
                />

                
                    {
                        term  
                            ?
                            <button
                                onClick={handleClearSearchTerm}
                            >
                                <i className="fa-solid fa-x margin-inline"></i>
                            </button>

                            : 
                                <i className="fa-solid fa-magnifying-glass margin-inline"></i>                         
                    }
                
            </div>

            <span></span>

        </header>
    )
}