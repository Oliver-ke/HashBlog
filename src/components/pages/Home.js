import React, { Fragment, useState } from 'react';
import FeatureCard from './../util/FeatureCard';

import Posts from '../post/Posts';
const Home = () => {
	const [ searchType, setSearchType ] = useState('Recent Stories');
	const changeSearchType = (type) => {
		setSearchType(type);
	};
	return (
		<Fragment>
			<div className="row" style={{ marginTop: '-20px' }}>
				<FeatureCard changeSearchType={changeSearchType} content={'Stories Feed'} icon={'brightness_6'} />
				<FeatureCard
					changeSearchType={changeSearchType}
					content={'Featured Stories'}
					icon={'brightness_high'}
				/>
				<FeatureCard changeSearchType={changeSearchType} content={'Recent Stories'} icon={'brightness_4'} />
				<FeatureCard changeSearchType={changeSearchType} content={'Trending Stories'} icon={'brightness_6'} />
			</div>
			<Posts searchType={searchType} />
		</Fragment>
	);
};

export default Home;
