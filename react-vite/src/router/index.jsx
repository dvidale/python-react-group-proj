import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
<<<<<<< HEAD

import { RestaurantPage } from '../components/RestaurantPage/RestaurantPage';
=======
import MenuItemsList from '../components/MenuItemsList/MenuItemsList';
import Reviews from '../components/Reviews/Reviews';
>>>>>>> nk-feature

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <h1>Welcome!</h1>,
			},
			{
				path: 'login',
				element: <LoginFormPage />,
			},
			{
				path: 'signup',
				element: <SignupFormPage />,
			},
			{
				path: 'restaurants/:id/menu-items',
				element: <RestaurantPage />,
			},
			{
				path: 'restaurants/:id/reviews',
				element: <Reviews />
			}
		],
	},
]);
