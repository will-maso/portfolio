import Card from "react-bootstrap/Card"

const About = () => {
return <div>
    <Card style={{ width: '800px' }} className="about">
        <Card.Body>
            <Card.Title as="h3">About me:</Card.Title>
            <Card.Text>
            I recently graduated Northcoders bootcamp and am looking for employment as a Junior Software Developer.<br></br>
            In terms of the course it is a 3 month intensive curriculum mainly focused on learning JavaScript, HTML, CSS and SQL.<br></br>
            On said course we used a multitude of plugins such as express, react and postgresql.
            </Card.Text>
        </Card.Body>
    </Card>
</div>
}

export default About