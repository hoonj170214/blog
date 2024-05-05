import { useState } from 'react';

const IMAGE_1_URL =
	'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004const';
const IMAGE_2_URL =
	'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288734&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjIwX251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006';
const IMAGE_3_URL =
	'https://images.pexels.com/photos/15475219/pexels-photo-15475219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

export default function Carousel() {
	const [activeImage, setActiveImage] = useState(1);

	return (
		<>
			<div>
				<div className="carousel">
					<ul className="carousel__slides">
						<input
							type="radio"
							name="radio-button"
							id="img-1"
							checked={activeImage === 1}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img alt="scenery 1" src={IMAGE_1_URL} />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(3)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(2)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<input
							type="radio"
							name="radio-buttons"
							id="img-2"
							checked={activeImage === 2}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img alt="scenery 2" src={IMAGE_2_URL} />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(1)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(3)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<input
							type="radio"
							name="radio-buttons"
							id="img-3"
							checked={activeImage === 3}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img alt="scenery 3" src={IMAGE_3_URL} />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(2)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(1)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<div className="carousel__dots">
							<label
								onClick={() => setActiveImage(1)}
								className="carousel__dot"
								id="img-dot-1"
							></label>
							<label
								onClick={() => setActiveImage(2)}
								className="carousel__dot"
								id="img-dot-2"
							></label>
							<label
								onClick={() => setActiveImage(3)}
								className="carousel__dot"
								id="img-dot-3"
							></label>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
}
