import { Container,Row,Col,Button } from "react-bootstrap";
const MainContent = () =>
{
    return (
        <Container className="d-flex flex-column main-container" fluid>
            <Row className="mainRow row">
                <Col className="d-flex flex-column side-option justify-content-around" style={{color:"white"}}>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Roll</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Tea</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Fries</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Biryani</Button>
                </Col>
                <Col className="d-flex justify-content-center main-option" style={{color:"white"}}>Hi Baby</Col>
                
                <Col className="d-flex flex-column side-option justify-content-around" style={{color:"white"}}>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Pizza</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Coffee</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Ice Cream</Button>
                        <Button class="btn btn-outline-success menu-option" variant="outline-success">Pastry</Button>
               </Col>
            </Row>
        </Container>
    )
}

export default MainContent;