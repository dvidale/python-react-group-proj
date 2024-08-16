import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveLocation } from '../../redux/location';

function LocationForm() {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveLocation({ city, state }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Enter your location</h2>
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
			<button type='submit'>Submit</button>
		</form>
	);
}

export default LocationForm;
