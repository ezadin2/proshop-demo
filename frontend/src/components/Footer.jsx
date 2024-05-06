import { Container,Row,Col } from "react-bootstrap"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center">
                    <p>Eza proshop Copyright &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
        

    </footer>
  )
}

export default Footer