import CardItem from '../components/Card/CardItem/CardItem';
import Toolbar from '../components/Toolbar/Toolbar';
const Dashboard = () => {
  let userLoggedIn = localStorage.getItem('userLoggedIn');
  return (
    <div>
      {userLoggedIn && <Toolbar />}
      <CardItem />
    </div>
  );
};

export default Dashboard;
