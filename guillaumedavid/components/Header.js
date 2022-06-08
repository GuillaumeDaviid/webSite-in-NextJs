export default function Header() {
    return(
        <section id="home">
        <div className="Header">

        <nav className="Header_nav">
                <ul>
                <li><a href="#home"><span>Accueil</span></a></li>
                <li><a href="#portfolio"><span>Portfolio</span></a></li>
                <li><a href="#contact"><span>Contact</span></a></li>
                </ul>
                <a href="#" className="cd-close-menu">Close<span></span></a>
            </nav>

            <a className="cd-menu-trigger" href="#main-nav"><span></span></a>

            <h1 className="Header_title">GUILLAUME DAVID</h1>

            <div className="Header_separator-white"></div>

            <h3 className="Header_description">Développeur Front End / Javascript / React</h3>

            <a className="mouse-scroll" href="#introduction">
						<span className="mouse">
							<span className="mouse-movement"></span>
						</span>
						<span className="mouse-message fadeIn">scroll</span>
			</a>
        </div>
        </section>
    )
}