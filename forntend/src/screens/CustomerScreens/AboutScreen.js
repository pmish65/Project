import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const AboutScreen = (props) => {
  return (
    <div>
      <Navigation />
      <Header title="About Us" />
      <div className="main1">
        <p>
          The main aim of developing this application is to supply the medicines
          all over the country by just a single click and to reduce the time
          consumption. Online pharmacy is a web-based application. The user can
          post requirement for medicine. User can purchase medicine online.
          Medicine is provided at your doorstep by the nearest associate store.
          As per the prescription by local doctor, the user can search medicine
          and useful information. This application provides information for
          daily consumption of medicine. This application provides user login to
          the customer. And admin can get the all-expired medicines information
          and he can able to see all orders information of clients.
        </p>
        <h4>MISSION</h4>
        <p>
          To provide safe, high quality patient care in an atmosphere of
          professionalism, respect, and effective communication.
        </p>
        <h4>VISION</h4>
        <p>
          Our vision is to enable faster, easier and more convenient access to
          your medication
        </p>
        <h4>OUR OBJECTIVE</h4>
        <p>
          Increase digital convenience Deliver world-class experience Deliver
          innovative solutions
        </p>
        <h4>OUR VALUES</h4>
        <p>
          Build TrustFulfil Commitment Increase Efficiency Consistent Delivery
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
