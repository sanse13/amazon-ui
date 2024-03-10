import CardList from '../components/Card/CardList/CardList';
import Toolbar from '../components/Toolbar/Toolbar';
const Dashboard = () => {
  let userLoggedIn = localStorage.getItem('userLoggedIn');
  return (
    <div>
      {userLoggedIn && <Toolbar />}
      <CardList />
    </div>
  );
};

export default Dashboard;
