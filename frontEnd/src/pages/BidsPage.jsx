import { Link } from "react-router-dom"

function BidsPage(){
    return(
        <article className="bids-page">
        <h1>Biddings currently closed</h1>
        <Link to="/"><button>Back to Home Page</button></Link>
        </article>
    )
}
export default BidsPage