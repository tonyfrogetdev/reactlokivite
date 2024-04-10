import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DishDetails = () => {
  const { slug } = useParams();

  return (
    <Container>
      <Row>
        <h1>{slug}</h1>
      </Row>
    </Container>
  );
};

export default DishDetails;
