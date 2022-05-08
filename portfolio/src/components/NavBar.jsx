import {Link} from "react-router-dom"

const NavBar = () => {
    return <nav>
        <Link to="/" className="Link">William Mason</Link> /
        <Link to="/Contact" className="Link"> Contact </Link> /
        <Link to="/About" className="Link"> About </Link>
        <br></br>
        <Link to="/GitHub" target="_blank" className="Link" ><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub logo" width="40" height="40"></img>  </Link>
        <Link to="/LinkedIn" target="_blank" className="Link" ><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn logo" width="40" height="40"></img></Link>
    </nav>
}

export default NavBar