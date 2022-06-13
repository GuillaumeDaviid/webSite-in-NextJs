import Link from 'next/link'

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


            <h2>COMPETENCES</h2>
            <div></div>

            <div>
                <div>HTML/CSS</div>
                <div>SASS/SCSS</div>
                <div>TypeScript</div>
                <div>SQL</div>
                <div>NodeJS</div>
                <div>NextJS</div>

                <div>Javascript</div>
                <div>React.JS</div>
                <div>PHP</div>
                <div>Python</div>
                <div>MySQL</div>
                <div>GitHub</div>
            </div>

            
        </div>
    )
}