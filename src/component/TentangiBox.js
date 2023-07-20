
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";

const TentangiBox = (props) => {
  return (
    <Carousel>
      <img
        className="d-block w-100"
        src={props.image}
        height='250'
        alt="First slide"
      />
    </Carousel>
    
  
  );
};

export default TentangiBox;
