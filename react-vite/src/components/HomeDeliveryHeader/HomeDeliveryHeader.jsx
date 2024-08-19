import './HomeDelivery.css';
function HomeDeliveryHeader({city}) {
	return (
		<div className='header-box'>
			<h1> Food Delivery{city && <h1>in {city}</h1> }</h1>
			<div>
				<p>
					Have your favorite food {city && <span>in {city} </span> }delivered to your door with DashDine. Whether
					you want to order breakfast, lunch, dinner, or a snack.
				</p>
				<br/>
				<p>Find more restaurants nearby{city && <span> in {city} </span> }.</p>
			</div>
		</div>
	);
}

export default HomeDeliveryHeader;
