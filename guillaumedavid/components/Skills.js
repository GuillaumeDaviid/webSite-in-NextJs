import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function Skill() {
    return(
        <div>
            <div className="project">
                    <div className='project_block'>
                <Link href={`/`}>
                    
                    <a className='project_btn' target="_blank">VOTRE PROJET</a>
                </Link>
                </div>
                </div>


            <div className='Skill'>
                <Fade bottom>
            <h2>COMPETENCES</h2>
            <div className='Skill_separator'></div>
            </Fade>

            <div className='Skill_skills'>
                <div className='skills'>HTML/CSS</div>
                <div className='skills'>SASS/SCSS</div>
                <div className='skills'>TypeScript</div>
                <div className='skills'>React.JS</div>
                <div className='skills'>NodeJS</div>
                <div className='skills'>NextJS</div>

                <div className='skills'>Javascript</div>
                <div className='skills'>SQL</div>
                <div className='skills'>PHP</div>
                <div className='skills'>Python</div>
                <div className='skills'>MySQL</div>
                <div className='skills'>GitHub</div>
            </div>
            </div>

            
        </div>
    )
}