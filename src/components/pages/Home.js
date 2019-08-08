import React, { Fragment, useState } from 'react';
import FeatureCard from './../util/FeatureCard';
import Posts from '../post/Posts';
import { DISCUSS_QUERY, FEEDS_QUERY } from '../../graphql/queries';

const Home = () => {
	const [ searchType, setSearchType ] = useState('FEATURED');
	const changeSearchType = (type) => {
		setSearchType(type);
	};
	return (
		<Fragment>
			<div className="row" style={{ marginTop: '-20px' }}>
				<FeatureCard
					changeSearchType={changeSearchType}
					type="GLOBAL"
					content={'All Stories'}
					icon={'brightness_6'}
				/>
				<FeatureCard
					type="FEATURED"
					changeSearchType={changeSearchType}
					content={'Featured Stories'}
					icon={'brightness_high'}
				/>
				<FeatureCard
					changeSearchType={changeSearchType}
					type="RECENT"
					content={'Recent Stories'}
					icon={'brightness_4'}
				/>
				<FeatureCard
					changeSearchType={changeSearchType}
					type="D_RECENT"
					content={'Trending Stories'}
					icon={'brightness_6'}
				/>
			</div>
			{searchType === 'D_RECENT' ? (
				<Posts query={DISCUSS_QUERY} type="GLOBAL" />
			) : (
				<Posts query={FEEDS_QUERY} type={searchType} />
			)}
		</Fragment>
	);
};

export default Home;
