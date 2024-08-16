import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveLocation } from '../../redux/location';
import './LocationForm.css';

function LocationForm() {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveLocation({ city, state }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='location-form-body'
		>
			<h2>Enter your location</h2>
			<div className='location-form-inputs'>
				<label>
					City:
					<input
						type='text'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder='Enter your city'
						required
					/>
				</label>
				<label>
					State:
					<input
						type='text'
						value={state}
						onChange={(e) => setState(e.target.value)}
						placeholder='Enter your state'
						required
					/>
				</label>
				<button
					className='loaction-form-btn'
					type='submit'
				>
					Submit
				</button>
			</div>
		</form>
	);
}

export default LocationForm;
