import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../../components/Card/CardList/CardList';
import Toolbar from '../../components/Toolbar/Toolbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const userLoggedIn = sessionStorage.getItem('access-token');

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/login');
    }
  }, [userLoggedIn]);

  return (
    <div>
      <Toolbar />
      <CardList />
    </div>
  );
};

export default Dashboard;
