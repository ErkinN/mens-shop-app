import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="">Visit our local stores and get discounts !!!</h5>
          <p>Until end of the month enjoy big discount sales !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/new1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="">Visit our local stores and get discounts !!!</h5>
          <p>Until end of the month enjoy big discount sales !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/new.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h5 className="">Visit our local stores and get discounts !!!</h5>
          <p>Until end of the month enjoy big discount sales !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
