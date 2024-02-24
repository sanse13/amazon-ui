import Toolbar from "../components/Toolbar/Toolbar";
const Dashboard = () => {
  let userLoggedIn = localStorage.getItem("userLoggedIn");
  return <div>{userLoggedIn && <Toolbar />}</div>;
};

export default Dashboard;
