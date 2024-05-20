import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Adjust the import path as necessary
import RegisterPage from '../pages/RegisterPage';
import CheckEmailPage from '../pages/CheckEmailPage';
import CheckPasswordPage from '../pages/CheckPasswordPage';
import Home from '../pages/Home';
import MessagePage from '../components/MessagePage';
import AuthLayouts from '../layout/index'; // Adjust the import path as necessary
import Forgotpassword from '../pages/Forgotpassword';
import Homepage from '../pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        // {
        //     index: true,
        //     element: <AuthLayouts><Homepage /></AuthLayouts>
        //   },
      {
        path: 'register',
        element: <AuthLayouts><RegisterPage /></AuthLayouts>
      },
      {
        path: 'email',
        element: <AuthLayouts><CheckEmailPage /></AuthLayouts>
      },
      {
        path: 'password',
        element: <AuthLayouts><CheckPasswordPage /></AuthLayouts>
      },
      {
        path: 'forgot-password',
        element: <AuthLayouts><Forgotpassword /></AuthLayouts>
      },
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: ':userId',
            element: <MessagePage />
          }
        ]
      }
    ]
  }
]);



export default router;
