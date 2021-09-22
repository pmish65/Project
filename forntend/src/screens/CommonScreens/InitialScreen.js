import HomeNavigation from "../../components/HomeNavigation";
import bg2 from "../../images/bg_2.jpg";
import person1 from "../../images/person_1.jpg"
import person2 from "../../images/person_2.jpg";
import person3 from "../../images/person_3.jpg";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";
import product1 from "../../images/product_01.png";
import product2 from "../../images/product_02.png";
import product3 from "../../images/product_03.png";
import { Carousel } from "react-bootstrap";

const InitialScreen = (props) => {
  return (
    <>
      <HomeNavigation />
      <Carousel>
        <Carousel.Item>
          <a href="/signin">
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
              height="600px"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/signin">
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
              height="600px"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/signin">
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
              height="600px"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/signin">
            <img
              className="d-block w-100"
              src={carousel4}
              alt="Fourth slide"
              height="600px"
            />
          </a>
        </Carousel.Item>
      </Carousel>

      <div className="container marketing mt-5 bg-light p-3 border border-3 border-dark rounded">

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading.</h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src={bg2} alt="pic1" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src={bg2} alt="pic2" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src={bg2} alt="pic3" />
          </div>
        </div>


        <hr className="featurette-divider" />
        <h3 className="text-center mb-5">Top Products</h3>

        <div className="row">
          <div className="col-lg-4">
            <img src={product1} alt="person1" width="200" height="300" />
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p></p>
          </div>
          <div className="col-lg-4">
            <img src={product2} alt="person2" width="200" height="300" />
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p></p>
          </div>
          <div className="col-lg-4">
            <img src={product3} alt="person3" width="200" height="300" />
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p></p>
          </div>
        </div>

        

        <hr className="featurette-divider" />
        <h3 className="text-center mb-5">Customer reviews</h3>

        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src={person1} alt="person1" width="140" height="140" />
            <p className="mt-2">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src={person2} alt="person2" width="140" height="140" />
            <p className="mt-2">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src={person3} alt="person3" width="140" height="140" />
            <p className="mt-2">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p></p>
          </div>
        </div>

      </div>


    </>
  )
};

export default InitialScreen;
