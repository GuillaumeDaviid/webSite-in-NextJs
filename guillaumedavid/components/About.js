import Link from 'next/link'

export default function About() {
    return(
        <section id="introduction">
        <div className="About">
            <h2 className="About_title">A PROPOS</h2>
            <div className="About_separator"></div>
            <p className="About_text">Développeur web <strong>Front-End</strong> Freelance dans les Hauts-de-France (Lille), 
                Spécialisé <strong>Javascript / React.js</strong> et dans l&apos;intégration /
                développement responsive <strong>HTML/CSS/JS</strong>. Je vous accompagne dans le développement de votre projet web. Vous retrouverez ici mon portfolio et un moyen de me contacter.</p>

                <div className="creativity">
                    <div className='creativity_block'>
                <Link href={`https://codepen.io/GuillaumeDAv`}>
                    
                    <a className='creativity_btn' target="_blank">Créativité</a>
                </Link>
                </div>
                </div>
                
        </div>
        </section>
    )
}