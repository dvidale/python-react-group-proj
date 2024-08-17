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
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const { closeModal } = useModal();

	useEffect(() => {
		if (hasSubmitted) {
			const newErrors = {};
			if (username.length < 6 || username.length > 20) {
				newErrors.username = 'Username must be between 6 and 20 characters';
			}
			if (state.length !== 2 || state !== state.toUpperCase()) {
				newErrors.state = 'State must be 2 uppercase characters';
			}
			if (phone_number.length !== 10) {
				newErrors.phone_number = 'Phone number must be 10 characters long';
			}
			setErrors(newErrors);
		}
	}, [username, state, phone_number, hasSubmitted]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);

		if (password !== confirmPassword) {
			return setErrors({
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			});
		}

		const formData = {
			first_name, // matches Flask-WTF form field name
			last_name, // matches Flask-WTF form field name
			email, // matches Flask-WTF form field name
			username, // matches Flask-WTF form field name
			password, // matches Flask-WTF form field name
			address, // matches Flask-WTF form field name
			city, // matches Flask-WTF form field name
			state, // matches Flask-WTF form field name
			zip, // matches Flask-WTF form field name
			phone_number, // matches Flask-WTF form field name
		};

		const serverResponse = await dispatch(thunkSignup(formData));

		if (serverResponse) {
			setErrors(serverResponse);
		} else {
			closeModal();
		}
	};

	return (
		<div className='signu'>
			<h1>Sign Up</h1>
			{errors.server && <p>{errors.server}</p>}
			<form
				onSubmit={handleSubmit}
				className='signup-form-modal'
			>
				<div>
					<label>
						First Name
						<input
							type='text'
							value={first_name}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						{hasSubmitted && errors.first_name && <p>{errors.first_name}</p>}
					</label>
				</div>
				<div>
					<label>
						Last Name
						<input
							type='text'
							value={last_name}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						{hasSubmitted && errors.last_name && <p>{errors.last_name}</p>}
					</label>
				</div>
				<div>
					<label>
						Email
						<input
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						{hasSubmitted && errors.email && <p>{errors.email}</p>}
					</label>
				</div>
				<div>
					<label>
						Username
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						{hasSubmitted && errors.username && <p>{errors.username}</p>}
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{hasSubmitted && errors.password && <p>{errors.password}</p>}
					</label>
				</div>
				<div>
					<label>
						Confirm Password
						<input
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						{hasSubmitted && errors.confirmPassword && (
							<p>{errors.confirmPassword}</p>
						)}
					</label>
				</div>
				<div>
					<label>
						Address
						<input
							type='text'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
						{hasSubmitted && errors.address && <p>{errors.address}</p>}
					</label>
				</div>
				<div>
					<label>
						City
						<input
							type='text'
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
						{hasSubmitted && errors.city && <p>{errors.city}</p>}
					</label>
				</div>
				<div>
					<label>
						State
						<input
							type='text'
							value={state}
							onChange={(e) => setState(e.target.value)}
							required
						/>
						{hasSubmitted && errors.state && <p>{errors.state}</p>}
					</label>
				</div>
				<div>
					<label>
						ZIP
						<input
							type='text'
							value={zip}
							onChange={(e) => setZip(e.target.value)}
							required
						/>
						{hasSubmitted && errors.zip && <p>{errors.zip}</p>}
					</label>
				</div>
				<div>
					<label>
						Phone Number
						<input
							type='text'
							value={phone_number}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
						{hasSubmitted && errors.phone_number && (
							<p>{errors.phone_number}</p>
						)}
					</label>
				</div>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
