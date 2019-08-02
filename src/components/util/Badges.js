import React from 'react';

const Badges = ({ tags }) => {
	return (
		<div className="col s12">
			{tags.map((tag, index) => (
				<span
					key={index}
					style={{ padding: '5px, 5px, 5px, 5px', marginTop: '2px', fontWeight: 'bold' }}
					className="new badge blue-grey lighten-5 black-text"
				>
					{tag.name}
				</span>
			))}
		</div>
	);
};

export default Badges;
