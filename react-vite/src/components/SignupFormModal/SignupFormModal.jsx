import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkSignup } from '../../redux/session';
import './SignupForm.css';

function SignupFormModal() {
	const dispatch = useDispatch();
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');
	const [phone_number, setPhoneNumber] = useState('');
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const { closeModal } = useModal();

	useEffect(() => {
		if (submitted) {
			const validationErrors = {};

			if (username && (username.length < 6 || username.length > 20)) {
				validationErrors.username =
					'Username must be between 6 and 20 characters';
			}

			if (state && (state.length !== 2 || state !== state.toUpperCase())) {
				validationErrors.state = 'State must be 2 characters and uppercase';
			}

			if (zip && !/^\d{5}$/.test(zip)) {
				validationErrors.zip = 'ZIP must be 5 digits';
			}

			if (phone_number && !/^\d{10}$/.test(phone_number)) {
				validationErrors.phone_number = 'Phone number must be 10 digits';
			}

			setErrors(validationErrors);
		}
	}, [submitted, username, state, zip, phone_number]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true); // Mark form as submitted

		if (password !== confirmPassword) {
			setErrors((prevErrors) => ({
				...prevErrors,
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			}));
			return;
		}

		const formData = {
			first_name,
			last_name,
			email,
			username,
			password,
			address,
			city,
			state,
			zip,
			phone_number,
		};

		// Clear previous errors on submit
		setErrors({});

		const serverResponse = await dispatch(thunkSignup(formData));

		if (serverResponse.errors) {
			setErrors(serverResponse.errors);
		} else if (serverResponse.error) {
			setErrors({ server: serverResponse.error });
		} else {
			closeModal();
		}
	};

	return (
		<div className='signup'>
			<h1 className='signup-title'>Sign Up</h1>
			{errors.server && <p>{errors.server}</p>}
			<form
				onSubmit={handleSubmit}
				className='signup-form-modal'
			>
				<label className='signup-label'>
					First Name
					<input
						className='signup-input'
						type='text'
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					{errors.first_name && <p>{errors.first_name}</p>}
				</label>
				<label className='signup-label'>
					Last Name
					<input
						className='signup-input'
						type='text'
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					{errors.last_name && <p>{errors.last_name}</p>}
				</label>
				<label className='signup-label'>
					Email
					<input
						className='signup-input'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					{errors.email && <p>{errors.email}</p>}
				</label>
				<label className='signup-label'>
					Username
					<input
						className='signup-input'
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					{errors.username && <p>{errors.username}</p>}
				</label>
				<label className='signup-label'>
					Password
					<input
						className='signup-input'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{errors.password && <p>{errors.password}</p>}
				</label>
				<label className='signup-label'>
					Confirm Password
					<input
						className='signup-input'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				</label>
				<label className='signup-label'>
					Address
					<input
						className='signup-input'
						type='text'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
					{errors.address && <p>{errors.address}</p>}
				</label>
				<label className='signup-label'>
					City
					<input
						className='signup-input'
						type='text'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
					{errors.city && <p>{errors.city}</p>}
				</label>
				<label className='signup-label'>
					State
					<input
						className='signup-input'
						type='text'
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
					/>
					{errors.state && <p>{errors.state}</p>}
				</label>
				<label className='signup-label'>
					ZIP
					<input
						className='signup-input'
						type='text'
						value={zip}
						onChange={(e) => setZip(e.target.value)}
						required
					/>
					{errors.zip && <p>{errors.zip}</p>}
				</label>
				<label className='signup-label'>
					Phone Number
					<input
						className='signup-input'
						type='text'
						value={phone_number}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
					{errors.phone_number && <p>{errors.phone_number}</p>}
				</label>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
