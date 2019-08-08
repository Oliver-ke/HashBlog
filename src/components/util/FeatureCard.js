import React from 'react';
import Media from 'react-media';
const FeatureCard = ({ content, icon, changeSearchType, type }) => {
	return (
		<div className="col s6 m3">
			<a href="#!" onClick={() => changeSearchType(type)}>
				<div style={{ borderRadius: '5px', background: '#f4f4f4' }} className="card hoverable">
					<div style={{ padding: '5px' }} className="card-content center-align">
						<i className="material-icons purple-text darken-5">{icon}</i>
						<Media query={{ maxWidth: 599 }}>
							{(match) =>
								match ? (
									<h6 style={{ color: '#000', fontSize: '13px' }}>{content}</h6>
								) : (
									<h5 style={{ color: '#000' }}>{content}</h5>
								)}
						</Media>
					</div>
				</div>
			</a>
		</div>
	);
};

export default FeatureCard;
