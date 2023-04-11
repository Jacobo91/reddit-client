import './postitem.css';

export default function PostItem(){


    return(
        <article className="post" >

            <div className='likes' >
                <button>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>                
                <p className="number-of-likes"> 10k</p>                
                <button>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <div className='post-content'>              
                <h2 className='post-title' >Title goes here</h2>

                <figure className='post-image-wrapper' >
                    <img 
                        src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" 
                        alt="" 
                        className='post-image'
                        />
                </figure>

                <hr />

                <div className='post-info' >
                    <p className='user-name bold'>username</p>
                    <p>4 hours ago</p>
                    <button>
                        <i className="fa-regular fa-comment"></i>
                        <p>100</p>
                    </button>
                </div>
            </div>
        </article>
    )
}