import Card from 'react-bootstrap/Card';

const Home = () => {
    return <div className="Home">
        <h2>Portfolio:</h2>
        <ul className="List">
            <li className='listitem'>
                <Card >
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU" className="cardimg"/>
                        <Card.Title as="h3">NC news</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Frontend app</Card.Subtitle>
                        <Card.Text>
                        This app allows you to view news articles. The list of articles is intially populated with all the articles in the db nicely paginated for ease of access.
                        Articles can then be sorted using a variety of parameters in the drop down menu. Comments can be viewed on each article and comments can be added by existing users,
                        as well as upvotes being added by only existing users.
                        </Card.Text>
                        <Card.Link href="https://github.com/will-maso/nc-news" className='Link'>GitHub repository</Card.Link> / <Card.Link href="https://super-cool-site-by-will-maso.netlify.app/" className='Link'>Hosted Frontend</Card.Link>
                    </Card.Body>
                </Card>
            </li>
            <li className='listitem'>
                <Card >
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU" className="cardimg" />
                        <Card.Title as="h3">NC news</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Backend SQL database</Card.Subtitle>
                        <Card.Text>
                        This project is a backend project that houses a database containing articles, users, comments and topics tables 
                        each of which is interlinked and provides multiple endpoints from which you can extract useful information.
                        </Card.Text>
                        <Card.Link href="https://github.com/will-maso/be-news" className='Link'>GitHub repository</Card.Link> / <Card.Link href="https://news-williammason.herokuapp.com/" className='Link'>Hosted database</Card.Link>
                    </Card.Body>
                </Card>
            </li>
            <li className='listitem'>
                <Card >
                    <Card.Body>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" className="cardimg"/>
                        <Card.Title as="h3">D&Dinder</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Fullstack project</Card.Subtitle>
                        <Card.Text>
                       This project is a meeting place for DnD players, it allows them to create a user profile, 
                        they are also able to create groups and add other users to their group. On the group page the dungeon master's email will be displayed to allow them to organise a game, 
                        we plan to add a chat functionality in the future. All of this is done using firebase aswell as cloud functions to make a serverless backend, 
                        while the frontend uses React.
                        </Card.Text>
                        <Card.Link href="https://github.com/boa-constructor/backend-firebase" className='Link'>Backend repository</Card.Link> / <Card.Link href="https://github.com/boa-constructor/frontend-react-app" className='Link'>Frontend repository</Card.Link>
                    </Card.Body>
                </Card>
            </li>
        </ul>
        </div>
}

export default Home