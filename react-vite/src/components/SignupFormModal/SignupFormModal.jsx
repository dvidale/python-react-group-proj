import { useState } from 'react';
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
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();

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
				<label>
					First Name
					<input
						type='text'
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				{errors.first_name && <p>{errors.first_name}</p>}
				<label>
					Last Name
					<input
						type='text'
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				{errors.last_name && <p>{errors.last_name}</p>}
				<label>
					Email
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				{errors.email && <p>{errors.email}</p>}
				<label>
					Username
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				{errors.username && <p>{errors.username}</p>}
				<label>
					Password
					<input
						type='new-password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				{errors.password && <p>{errors.password}</p>}
				<label>
					Confirm Password
					<input
						type='confirm-password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				<label>
					Address
					<input
						type='text'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</label>
				{errors.address && <p>{errors.address}</p>}
				<label>
					City
					<input
						type='text'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</label>
				{errors.city && <p>{errors.city}</p>}
				<label>
					State
					<input
						type='text'
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
					/>
				</label>
				{errors.state && <p>{errors.state}</p>}
				<label>
					ZIP
					<input
						type='text'
						value={zip}
						onChange={(e) => setZip(e.target.value)}
						required
					/>
				</label>
				{errors.zip && <p>{errors.zip}</p>}
				<label>
					Phone Number
					<input
						type='text'
						value={phone_number}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
				</label>
				{errors.phone_number && <p>{errors.phone_number}</p>}
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
