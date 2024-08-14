import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import { RestaurantPage } from '../components/RestaurantPage/RestaurantPage';
import HomePage from '../components/HomePage/HomePage';
import ReviewsList from '../components/Reviews/ReviewsList';
import RestaurantForm from '../components/RestaurantForm/RestaurantForm';

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
				element: <RestaurantPage />

			},{
				path: '/restaurants/:id/reviews',
				element: <ReviewsList />
			},
			{
				path:'/restaurants/new',
				element: <RestaurantForm/>
			},
			{
				path:'/restaurants/current/:id',
				element:<RestaurantForm/>
			}
		],
	},
]);
