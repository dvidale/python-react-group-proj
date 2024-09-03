import { useState } from 'react';
import { thunkLogin } from '../../redux/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';
import { clearLocation } from '../../redux/location';

function LoginFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(clearLocation());
		const serverResponse = await dispatch(
			thunkLogin({
				email,
				password,
			})
		);

		if (serverResponse) {
			setErrors(serverResponse);
		} else {
			closeModal();
		}
	};

	const handleDemoLogin = async (e) => {
		e.preventDefault();
		dispatch(clearLocation());
		const serverResponse = await dispatch(
			thunkLogin({
				email: 'demo@aa.io',
				password: 'password',
			})
		);
		if (serverResponse) {
			setErrors(serverResponse);
		} else {
			closeModal();
		}
	};

	return (
		<>
			<h1 className='login-title'>Log In</h1>
			<form
				className='login-form-modal'
				onSubmit={handleSubmit}
			>
				<label className='login-label'>
					Email
					<input
						className='login-input'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				{errors.email && <p>{errors.email}</p>}
				<label className='login-label'>
					Password
					<input
						className='login-input'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				{errors.password && <p>{errors.password}</p>}
				<button
					className='login-btn'
					type='submit'
				>
					Log In
				</button>
				<hr />
				<button
					className='login-btn'
					onClick={handleDemoLogin}
				>
					Log In Demo User
				</button>
			</form>
		</>
	);
}

export default LoginFormModal;
