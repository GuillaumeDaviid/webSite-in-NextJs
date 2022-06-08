export default function Header() {
    return(
        <section id="home">
        <div className="Header">
            <nav>
                <ul>
                <li><a href="#home"><span>Accueil</span></a></li>
                <li><a href="#portfolio"><span>Portfolio</span></a></li>
                <li><a href="#contact"><span>Contact</span></a></li>
                </ul>
            </nav>
            <h1 className="Header_title">GUILLAUME DAVID</h1>
            <div className="Header_separator"></div>
            <h3 className="Header_description">Développeur Front End / Javascript / React</h3>
        </div>
        </section>
    )
}