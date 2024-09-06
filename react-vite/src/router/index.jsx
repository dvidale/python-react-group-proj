import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import { RestaurantPage } from '../components/RestaurantPage/RestaurantPage';
import HomePage from '../components/HomePage/HomePage';
// import MenuItemsList from '../components/MenuItemsList/MenuItemsList';
import MenuItemRating from '../components/MenuItemRating/MenuItemRating';
import ReviewsList from '../components/Reviews/ReviewsList';
import RestaurantForm from '../components/RestaurantForm';
import RestaurantManagement from '../components/RestaurantManagement';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
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
				path: '/restaurants/:id',
				element: <RestaurantPage />,
			},
			{
				path: '/restaurants/new',
				element: <RestaurantForm />,
			},
			{
				path: '/restaurants/current/:id',
				element: <RestaurantForm />,
			},
			{
				path: '/restaurants/:id/reviews',
				element: <ReviewsList />,
			},
			{
				path: '/menu-items/:id/ratings',
				element: <MenuItemRating />,
			},
			{
				path: '/restaurants/current',
				element: <RestaurantManagement />,
			},
			{
				path:'/*',
				element: <HomePage />
			}			
		],
	},
]);
