import React, { Fragment, useState } from 'react';
import FeatureCard from './../util/FeatureCard';
import { RECENT_QUERY, FEEDS_QUERY, TRENDING_QUERY, FEATURED_QUERY } from '../../graphql/queries';

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
			{searchType === 'Stories Feed' && <Posts query={FEEDS_QUERY} />}
			{searchType === 'Featured Stories' && <Posts query={FEATURED_QUERY} />}
			{searchType === 'Recent Stories' && <Posts query={RECENT_QUERY} />}
			{searchType === 'Trending Stories' && <Posts query={TRENDING_QUERY} />}
		</Fragment>
	);
};

export default Home;
