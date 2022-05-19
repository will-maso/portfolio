const Home = () => {
    return <div className="Home">
        <h2>Portfolio:</h2>
        <ul className="List">
            <li><h4>NC news frontend project:</h4>
            This app allows you to view news articles. The list of articles is intially populated with all the articles in the db nicely paginated for ease of access.
            Articles can then be sorted using a variety of parameters in the drop down menu. Comments can be viewed on each article and comments can be added by existing users,
            as well as upvotes being added by only existing users.<br></br>
            <a href="https://github.com/will-maso/nc-news" className="Link">GitHub repository</a> / <a href="https://super-cool-site-by-will-maso.netlify.app/" className="Link">Hosted Frontend</a></li>
            <li><h4>NC news backend project:</h4>
            This project is a backend project that houses a database containing articles, users, comments and topics tables 
            each of which is interlinked and provides multiple endpoints from which you can extract useful information. <br></br>
            <a href="https://github.com/will-maso/be-news" className="Link">GitHub repository</a> / <a href="https://news-williammason.herokuapp.com/" className="Link">Hosted Database</a></li>
            <li><h4>DnDinder fullstack project:</h4>
            This project is a meeting place for DnD players, it allows them to create a user profile, 
            they are also able to create groups and add other users to their group. On the group page the dungeon master's email will be displayed to allow them to organise a game, 
            we plan to add a chat functionality in the future. All of this is done using firebase aswell as cloud functions to make a serverless backend, 
            while the frontend uses React.<br></br>
            <a href="https://github.com/boa-constructor/backend-firebase" className="Link">Backend repository</a> / <a href="https://github.com/boa-constructor/frontend-react-app" className="Link">Frontend repository</a>
            </li>
        </ul>
        </div>
}

export default Home