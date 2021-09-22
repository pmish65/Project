import { useSelector } from "react-redux";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const AdminScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { response } = userSignin;

  console.log("response", response);

  return (
    <div>
      <AdminDeliveryNavigation />
      <h3 className="title mt-2 fw-bold text-center">Welcome {response && response.data.user.firstName}</h3>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/add-product" className="text-decoration-none text-black">
                    <span> Add Product </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/view-products" className="text-decoration-none text-black">
                    <span>
                      View Products
                    </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/sales-report" className="text-decoration-none text-black">
                    <span>
                      Sales Report
                    </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* </a> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/add-delivery" className="text-decoration-none text-black">
                    <span>
                      Add Delivery Boy
                    </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/delivery-pending" className="text-decoration-none text-black">
                    <span>
                      Delivery Status
                    </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="bg-light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="fs-3">
                  <Link to="/payment-status" className="text-decoration-none text-black">
                    <span>
                      Payment Status
                    </span>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AdminScreen;
