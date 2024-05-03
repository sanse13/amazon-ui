import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../../components/Card/CardList/CardList';
import Toolbar from '../../components/Toolbar/Toolbar';
import { UserService } from '../../services/user/user.service';
import { User } from '../../shared/types';

const Dashboard = () => {
  const userService = new UserService();
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access-token');
  const [user, setUser] = useState<User | null>(null);

  const fetchUserByEmail = async (email: string) => {
    const user = await userService.getUserByEmail(email);
    setUser(user);
  };

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else if (user === null) {
      const userEmail = (jwtDecode(accessToken) as User).email;
      fetchUserByEmail(userEmail);
    }
  }, [accessToken, user]);

  return (
    <div>
      {user && <Toolbar user={user} />}
      <CardList />
    </div>
  );
};

export default Dashboard;
