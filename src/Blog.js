import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Blog extends React.Component {
    render() {
        return  <Container>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title><h1>In Progress</h1></Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
    }
}
export default Blog;