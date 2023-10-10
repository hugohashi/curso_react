import { Link } from "react-router-dom";
import "./button.css"

function StickyButton(){
    return (
        <div className="button_div">
            <Link to={"/ContactForm"}>
                    <button className="pedir_orcamento" type="submit">

                        <b><p className="orcgratis">Orçamentos Grátis
                        <br></br>Peça já o seu!</p></b>

                    </button>
            </Link>
        </div>
    )
};

export default StickyButton;