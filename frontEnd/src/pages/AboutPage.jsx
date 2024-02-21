import { Link } from "react-router-dom"

function AboutPage(){
    return(
        <article className="about-page">
        <h1>Page under construction</h1>
        <p>About page</p>
        <Link to="/"><button>Back to Home Page</button></Link>
        </article>
    )
}
export default AboutPage