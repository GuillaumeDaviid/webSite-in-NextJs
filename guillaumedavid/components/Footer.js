import Fade from 'react-reveal/Fade';

export default function Footer() {
    return(
        <div className="Footer">
            <p>Vivre, apprendre et monter de niveau chaque jours</p>

            <Fade right>
            <p className="Footer_copyright">2022. All Rights Reserved</p>
            </Fade>
        </div>
    )
}