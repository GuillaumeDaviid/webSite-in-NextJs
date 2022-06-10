import Image from 'next/image'
import Link from 'next/link'

export default function Article({posts}) {

  const loaderProp =({ src }) => {
    return src;
}
    return(
        <div className="Article">
            <h2>Article</h2>
            <div className="Article_separator"></div>
            <div className="Article_items">
                <button className="Article_items-btn right"></button>
                <button className="Article_items-btn left"></button>

                <div className='Article_items-elt'>

                {posts.items.map((data, index) => 
                  <div key={index} className="Article_items-elt-item">
                    
                    {<div className='wrapper_img'>  
                    <Image className='item_img' src={data.thumbnail} alt={data.categories[1]} width="200px" height="100px" loader={loaderProp}/>
                </div> }

                
                    {<Link href={data.link}>
                    <a className='item_link' target="_blank"><h3>{data.title}</h3></a>
                </Link>}
                    
                  </div> 
                )}

                </div>
                
            </div>
        </div>
    )
}