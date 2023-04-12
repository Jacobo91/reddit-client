import './postitem.css';
import 'animate.css';


export default function PostItem({ id, likes, 
                                    title, thumbnail, 
                                    author, created, 
                                    num_comments })
{

    const millisecondsInADay = 1000*60*60*24;
    let date1 = new Date(created*1000).getTime();
    let date2 = new Date().getTime();
    let difference = Math.round((date2 - date1) / 3600000)

    return(
        <article className="post animate__animated animate__fadeInUp">
            <div className='likes' >
                <button>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>                
                <p className="number-of-likes">{likes}</p>                
                <button>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <div className='post-content'>              
                <h2 className='post-title' >{title}</h2>

                <figure 
                    className='post-image-wrapper' 
                    style={{
                        width: "95%",
                    }}
                >
                    <img 
                        src={thumbnail} 
                        alt={id} 
                        className='post-image'
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "5px"
                        }}
                        />
                </figure>

                <hr />

                <div className='post-info' >
                    <p className='user-name bold'>{author}</p>
                    <p>{`${difference} hours ago`}</p>
                    <button>
                        <i className="fa-regular fa-comment"></i>
                        <p className='num-comments'>{num_comments}</p>
                    </button>
                </div>
            </div>
        </article>
    )
}