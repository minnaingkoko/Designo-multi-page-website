import Passionate from '../assets/home/desktop/illustration-passionate.svg'
import Resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import Friendly from "../assets/home/desktop/illustration-friendly.svg"
import FigureCard from "./Figurecard"

const MainSub2 = () => {
    return (
        <div className="additionalInfo additional__info__home">
            <FigureCard src={Passionate} alt="passionate" title="Passionate"
                summary="Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge
            art, design, and technology into exciting new solutions." />

            <FigureCard src={Resourceful} alt="resourceful" title="Resourceful"
                summary="Everything that we do has a strategic purpose.
                We use an agile approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our clients’ needs." />

            <FigureCard src={Friendly} alt="friendly" title="friendly"
                summary=" We are a group of enthusiastic folks who know how to put people first.
                Our success depends on our customers, and we
                strive to give them the best experience a company can provide." />


        </div>
    )
}
export default MainSub2