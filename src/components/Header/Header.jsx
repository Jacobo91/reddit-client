import './header.css';
import redditLogo from '../../images/redditLogo.png';

export default function Header(){
    return(
        <header className="header flex-center-y-axis">

            <div className='logo-wrapper flex-center-y-axis'>
                <img src={redditLogo} alt="reddit logo" className='logo' />
                <span className='bold logo-word margin-inline'><span className='bold highlight' >Reddit</span>Minimal</span>
            </div>

            <div className='searchbar' >
                <input type="text" placeholder='Search' className='search-input'/>
                <button>
                    <i class="fa-solid fa-magnifying-glass margin-inline"></i>
                </button>
            </div>

            <span></span>

        </header>
    )
}