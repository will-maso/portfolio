import {Link} from "react-router-dom"

const NavBar = () => {
    return <nav>
        <Link to="/" className="Link">William Mason</Link> /
        <Link to="/Contact" className="Link"> Contact </Link> /
        <Link to="/About" className="Link"> About </Link>
        <br></br>
        <a target="_blank" className="Link" href="https://github.com/will-maso"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub logo" width="40" height="40"></img>  </a>
        <a target="_blank" className="Link" href="https://www.linkedin.com/in/william-mason-73aa1b239/"><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn logo" width="40" height="40"></img></a>
    </nav>
}

export default NavBar