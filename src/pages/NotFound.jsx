import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <Container>
      <Row>
        <Helmet>
          <title>Page non trouvée</title>
        </Helmet>
        <h1>Page non trouvée</h1>
      </Row>
    </Container>
  );
};

export default NotFound;
