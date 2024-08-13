import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout'
import { RestaurantPage } from '../components/RestaurantPage/RestaurantPage';
import AllRestaurants from '../components/Restaurants/AllRestaurants';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <h1>Welcome!</h1>,
			},
			{
				path: '/login',
				element: <LoginFormPage />,
			},
			{
				path: '/signup',
				element: <SignupFormPage />,
			},
			{
				path: '/restaurants',
				element:<AllRestaurants/>
			},
			{
				path: '/restaurants/:id/menu-items',
				element: <RestaurantPage />,
			}
		],
	},
]);
