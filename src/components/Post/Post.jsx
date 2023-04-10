import './post.css';

export default function Post(){
    return(
        <article className="post" >
            <div className='likes' >
                <i class="fa-solid fa-arrow-up"></i>
                <p className="number-of-likes"> 10k</p>
                <i class="fa-solid fa-arrow-down"></i>
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
                    <p>comments</p>
                </div>
            </div>
        </article>
    )
}