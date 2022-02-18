import { Container,Row,Col } from "react-bootstrap"


const Footer =() =>
{
        return(
            <footer className="footer">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-start">footer section 1</Col>
                        <Col className="d-flex justify-content-center">footer section 2</Col>
                        <Col className="d-flex flex-row-reverse">footer section 3</Col>
                </Row>
            </Container>
            </footer>
        )
}

export default Footer