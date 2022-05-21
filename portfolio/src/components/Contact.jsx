import Card from "react-bootstrap/Card"

const Contact = () => {
    return <div>
        <Card className="contact">
            <Card.Body>
                <Card.Title as="h3">Contact info:</Card.Title>
                <Card.Text>
                Email: wm4705211@gmail.com
                </Card.Text>
                <Card.Text>
                Phone No: 07376 643298
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default Contact