import { useDispatch, useSelector } from 'react-redux';
import { environment } from '../../environments/environment-dev';
import { RootState, setCurrentUser } from '../../reducers/userReducer';
import { User } from '../../shared/types';

export class UserService {
  dispatch = useDispatch();
  user = useSelector((state: RootState) => state.user.user);

  async getUser(token: string) {
    const response = await fetch(`${environment.apiUri}/user/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    const response = await fetch(
      `${environment.apiUri}/user/get-user?email=${email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const user = (await response.json()) as User;
    this.dispatch(setCurrentUser(user));
    return user;
  }
}
