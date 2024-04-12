import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <Container>
      <Row>
        <Helmet>
                 <h1>Page non trouvée</h1>
        </Helmet>
 
      </Row>
    </Container>
  );
};

export default NotFound;
