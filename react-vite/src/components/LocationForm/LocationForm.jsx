import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveLocation } from '../../redux/location';
import './LocationForm.css';




function LocationForm() {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [errors, setErrors] = useState({});



	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		const cityRegex = /^[a-zA-Z\s]{4,30}$/;
		const stateRegex = /^[a-zA-Z]{2}$/;

		

		if (!cityRegex.test(city)) {
			newErrors.city = 'City must be between 4 to 30 alphabetic characters.';
		}

		if (!stateRegex.test(state)) {
			newErrors.state = 'State must be exactly 2 letters.';
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		
		dispatch(saveLocation({ city, state }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='location-form-body'
		>
			<h2 className='location-text'>Enter your location</h2>
			<div className='location-form-inputs'>
				<div className='location-label-holder'>
					<label className='location-text'>
						City:
						<input
							type='text'
							value={city}
							onChange={(e) => setCity(e.target.value)}
							// placeholder='Enter your city'
							required
						/>
					</label>
				</div>
				<div className='location-label-holder'>
					<label className='location-text'>
						State:
						<input
							type='text'
							value={state}
							onChange={(e) => setState(e.target.value.toUpperCase())}
							// placeholder='Enter your state'
							required
							maxLength={2}
							className='short-input'
						/>
					</label>
				</div>
			
				<button
					className='location-form-btn'
					type='submit'
					>
					Submit
				</button>
					<p className='error-text'>{errors.city}{` `}{errors.state}</p>
				


			</div>
		</form>
	);
}

export default LocationForm;
