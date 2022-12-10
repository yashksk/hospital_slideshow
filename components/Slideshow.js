import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from './Slideshow.module.css';
import Marquee from "react-fast-marquee";

const Slideshow = () => {
	const images = [
		"images/img1.jpeg",
		"images/img2.jpeg",
		"images/img3.jpeg",
		"images/img4.jpeg",
	];

	const images2 = [
		"images/img2.jpeg",
		"images/img3.jpeg",
		"images/img4.jpeg",
		"images/img1.jpeg",
	];

	const images3 = [
		"images/img3.jpeg",
		"images/img4.jpeg",
		"images/img1.jpeg",
		"images/img2.jpeg",
	];

	const images4 = [
		"images/img4.jpeg",
		"images/img3.jpeg",
		"images/img2.jpeg",
		"images/img1.jpeg",
	];

	const zoomInProperties = {
		indicators: false,
		scale: 1,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (<div style={{visiblity:"none"}}></div>),
		nextArrow:(<div style={{visiblity:"none"}}></div>)
	};
	return (
		<div>
			<div className={styles.top}><Marquee>
			<pre className={styles.text}>Being Healthy & Fit Isn’t a Fad or a Trend, It’s a Lifestyle        Happiness is the path to health         The Faster You Run, The Sooner You’re Done</pre>
</Marquee> </div>
<div className={styles.bottom}><Marquee>
			<pre className={styles.text}>Keep Calm and Just Keep Moving        You cannot enjoy your wealth, if you cannot enjoy your health          To enjoy the glow of good health, you must exercise</pre>
</Marquee> </div>
		<div className={styles.player1}>

			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-9/10 object-cover"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
		<div className={styles.player2}>

			<Zoom {...zoomInProperties}>
				{images2.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-9/10 object-cover"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
		<div className={styles.player3}>

			<Zoom {...zoomInProperties}>
				{images3.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-9/10 object-cover"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
		<div className={styles.player4}>

			<Zoom {...zoomInProperties}>
				{images4.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-9/10 object-cover"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
		</div>
	);
};

export default Slideshow;
