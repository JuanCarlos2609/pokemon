import { Login } from '../components/Login/Login';
import { FullScreenLayout } from '../layouts/FullScreenLayout/FullScreenLayout';
import { Error } from '../views/Error/Error';
import { Home } from '../views/Home/Home';
// import { Test2 } from '../views/Test_2/Test2';

const auth = {
  login: {
    path: '/login',
    layout: FullScreenLayout,
    component: Login,
    exact: true,
    private: false,
    titleMessage: 'Login',
  },
};

const user = {
  users: {
    path: '/',
    layout: FullScreenLayout,
    component: Home,
    exact: true,
    private: false,
    titleMessage: 'Home',
  },
  // test2: {
  //   path: "/test_2",
  //   layout: FullScreenLayout,
  //   component: Test2,
  //   exact: true,
  //   private: false,
  //   titleMessage: 'Home'
  // }
};

export const routesByRole = {
  public: [...Object.values(auth)],
  user: [...Object.values(user)],
};

export const notFoundRoute = {
  component: Error,
  layout: FullScreenLayout,
};
