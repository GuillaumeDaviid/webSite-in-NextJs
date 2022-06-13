export default function Form() {
    return(
        <div className="Form">

            <div className="Form_text">
            <h2>DEMANDEZ UN DEVIS</h2>
            <div className="Form_text-separator"></div>
            <p className="Form_text-content">Envie d&apos;un nouveau site web ? Ou alors d&apos;une refonte de celui-ci ? 
            Vous cherchez un développeur qui répond à vos besoins sur-mesure et qui respect les délais et le budget ? Demandez un Devis !</p>
            </div>

            <div>
                <h4>COORDONNEES</h4>
                <p>Loos-en-Gohelle (62) - France</p>
                <p>guillaumedaavidpro@gmail.com</p>
                <p>Guillaume David</p>
                <a>Twitter</a>
                <a>github</a>
                <a>medium</a>
                <a>linkedin</a>
            </div>

            <div>
                <form>
                    <div>
                        <input type="text" name="user_name" placeholder="Nom"/>
                    </div>

                    <div>
                        <input type="email" name="user_mail" placeholder="Email"/>
                    </div>

                    <div>
                        <textarea name="user_message" placeholder="Message"/>
                    </div>

                    <div>
                        <input type="submit" value="ENVOYER" />
                    </div>
                </form>
            </div>
        </div>
    )
}