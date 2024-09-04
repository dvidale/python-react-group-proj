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
	const [validInputs, setValidInputs ] = useState(false)
	const [submitted, setSubmitted] = useState(false);
	const { closeModal } = useModal();

	

	useEffect(() => {
		if (submitted) {
			
			const validationErrors = {}
			setValidInputs(true)

			if (first_name && (first_name.length < 2 || first_name.length > 30)) {
				validationErrors.first_name =
					'First name must be between 2 and 30 characters';
			}

			if (last_name && (last_name.length < 2 || last_name.length > 30)) {
				validationErrors.last_name =
					'Last name must be between 2 and 30 characters';
			}

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

			// if (!city.match(/^[a-z]+$/)){
			// 	validationErrors.city = 'City must be letters only'
			// }

			const regex = /^[A-Za-z]+(?:[' ][A-Za-z]+)*$/

			if(!(regex.test(city))){
				validationErrors.city = 'City cannot contain numbers'
			}
		


			if (!first_name) validationErrors.first_name = 'First Name is required';
			if (!last_name) validationErrors.last_name = 'Last Name is required';
			if (!email) validationErrors.email = 'Email is required';
			if (!username) validationErrors.username = 'Username is required';
			if (!password) validationErrors.password = 'Password is required';
			if (!confirmPassword)
				validationErrors.confirmPassword = 'Confirm Password is required';
			if (password !== confirmPassword) validationErrors.password = 'Password and Confirm Password do not match'
			if (!address) validationErrors.address = 'Address is required';
			if (!city) validationErrors.city = 'City is required';
			if (!state) validationErrors.state = 'State is required';
			if (!zip) validationErrors.zip = 'ZIP is required';
			if (!phone_number)
				validationErrors.phone_number = 'Phone Number is required';

			setErrors(validationErrors);
			if(Object.keys(validationErrors).length === 0){
				setValidInputs(true)
			}else{
				setValidInputs(false)
			}
		}
	}, [
		submitted,
		first_name,
		last_name,
		email,
		username,
		password,
		confirmPassword,
		address,
		city,
		state,
		zip,
		phone_number,
	]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true); // Mark form as submitted

		// if (password !== confirmPassword) {
		// 	setErrors((prevErrors) => ({
		// 		...prevErrors,
		// 		confirmPassword:
		// 			'Confirm Password field must be the same as the Password field',
		// 	}));
		// 	return;
		// }

		// Clear previous errors on submit
		// setErrors({});

		if(validInputs){

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
			
			const serverResponse = await dispatch(thunkSignup(formData));
			
			if (serverResponse.errors) {
				setErrors(serverResponse.errors);
			} else if (serverResponse.error) {
				setErrors({ server: serverResponse.error });
			} else {
				closeModal();
			}
		
		}

		

		
	};

	return (
		<div className='signup'>
			<h1 className='signup-title'>Sign Up</h1>
		<p>{errors.server}</p>
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
						minLength={2}
						maxLength={30}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					<p>{errors.first_name}</p>
				</label>
				<label className='signup-label'>
					Username
					<input
						className='signup-input'
						type='text'
						value={username}
						minLength={6}
						maxLength={20}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<p>{errors.username}</p>
				</label>
				<label className='signup-label'>
					Last Name
					<input
						className='signup-input'
						type='text'
						value={last_name}
						minLength={2}
						maxLength={30}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					<p>{errors.last_name}</p>
				</label>
				<label className='signup-label'>
					Password
					<input
						className='signup-input'
						type='password'
						value={password}
						minLength={6}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<p>{errors.password}</p>
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
					<p>{errors.email}</p>
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
					<p>{errors.confirmPassword}</p>
				</label>
				<label className='signup-label'>
					Address
					<input
						className='signup-input'
						type='text'
						value={address}
						maxLength={30}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
					<p>{errors.address}</p>
				</label>
				<label className='signup-label'>
					City
					<input
						className='signup-input'
						type='text'
						value={city}
						maxLength={30}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
					<p>{errors.city}</p>
				</label>
				<label className='signup-label'>
					State
					<input
						className='signup-input'
						type='text'
						value={state}
						minLength={2}
						maxLength={2}
						onChange={(e) => setState(e.target.value)}
						required
					/>
					<p>{errors.state}</p>
				</label>
				<label className='signup-label'>
					ZIP
					<input
						className='signup-input'
						type='text'
						value={zip}
						maxLength={5}
						onChange={(e) => setZip(e.target.value)}
						required
					/>
					<p>{errors.zip}</p>
				</label>
				<label className='signup-label'>
					Phone Number
					<input
						className='signup-input'
						type='text'
						value={phone_number}
						maxLength={10}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
					<p>{errors.phone_number}</p>
				</label>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
