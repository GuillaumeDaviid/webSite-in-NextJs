import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import Fade from 'react-reveal/Fade';

export default function Article({posts}) {
  const [p, setp] = useState(0);
  const [nbr, setNbr] = useState(1);

  function handleClickNext() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr < 7){
            setNbr(nbr + 1);
            const newp = p - 1
            setp(newp);
            carrousel.style.transform = "translate("+newp*25+"vw)";
            carrousel.style.transition = "all 0.5s ease";
        }
    }
}

function handleClickPrevious() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr > 1){
            setNbr(nbr - 1);
            const newp = p + 1;
            setp(newp);
        carrousel.style.transform = "translate("+newp*25+"vw)";
        carrousel.style.transition = "all 0.5s ease";
        }
        
    }
}

  const loaderProp =({ src }) => {
    return src;
}
    return(
        <div className="Article">
            <Fade bottom>
            <h2>Article</h2>
            <div className="Article_separator"></div>
            
            <div className="Article_items">
                <button className="Article_items-btn right" onClick={handleClickPrevious}>&#60;</button>
                <button className="Article_items-btn left" onClick={handleClickNext}>&#62;</button>

                <div className='Article_items-elt' id="carrousel">

                {posts.items.map((data, index) => 
                  <div key={index} className="Article_items-elt-item">
                    
                    {<div className='wrapper_img' >  
                    <Image className='item_img' src={data.thumbnail} alt={data.categories[1]} width="80%" height="30%" layout="responsive" objectFit="contain" unoptimized="false" loader={loaderProp}/>
                </div> }

                
                    {<Link href={data.link}>
                    <a className='item_link' target="_blank"><h3>{data.title}</h3></a>
                </Link>}
                    
                  </div> 
                )}

                </div>
                
            </div>
            </Fade>
        </div>
    )
}