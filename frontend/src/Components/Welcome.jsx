import logo from "../assets/speak.png";

function Welcome() {
  return (
    <div className="welcome-container">
      <img src={logo} alt="logo" className="welcome-logo" />
      <p>View and text directly to people in the chat Rooms</p>
    </div>
  );
}

export default Welcome;
