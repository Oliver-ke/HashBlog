import React, { Fragment, useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import PostItem from './PostItem';
import PreLoader from './../util/PreLoader';
import debounce from 'lodash.debounce';

const Posts = ({ query }) => {
	const [ limit, setLimit ] = useState(10);
	const [ privType, setPrivType ] = useState('');
	const [ initialLoad, setInitialLoad ] = useState(true);
	const changeLimit = (newLimit) => {
		setLimit(newLimit);
	};
	useEffect(
		() => {
			if (privType !== query) {
				setPrivType(query);
				setInitialLoad(false);
			} else if (privType === query) {
				setInitialLoad(true);
			}
		},
		// eslint-disable-next-line
		[ query ]
	);
	window.onscroll = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setLimit(limit + 5);
		}
	}, 100);

	return (
		<Fragment>
			<Query query={query} variables={{ limit }}>
				{({ loading, error, data, ...rest }) => {
					if (loading && !initialLoad && !Object.values(data).length > 0) {
						return <PreLoader />;
					}
					const { featuredStories, recentStories, storiesFeed, trendingStories } = data;
					return (
						<div className="row">
							{featuredStories &&
								featuredStories.map((post) => (
									<div className="col s12 m12 l6" key={post.cuid}>
										<PostItem
											author={post.author}
											title={post.title}
											coverImage={post.coverImage}
											changeLimit={changeLimit}
											cuid={post.cuid}
										/>
									</div>
								))}
							{recentStories &&
								recentStories.map((post) => (
									<div className="col s12 m12 l6" key={post.cuid}>
										<PostItem
											author={post.author}
											title={post.title}
											coverImage={post.coverImage}
											changeLimit={changeLimit}
											cuid={post.cuid}
										/>
									</div>
								))}
							{storiesFeed &&
								storiesFeed.map((post) => (
									<div className="col s12 m12 l6" key={post.cuid}>
										<PostItem
											author={post.author}
											title={post.title}
											coverImage={post.coverImage}
											changeLimit={changeLimit}
											cuid={post.cuid}
										/>
									</div>
								))}
							{trendingStories &&
								trendingStories.map((post) => (
									<div className="col s12 m12 l6" key={post.cuid}>
										<PostItem
											author={post.author}
											title={post.title}
											coverImage={post.coverImage}
											changeLimit={changeLimit}
											cuid={post.cuid}
										/>
									</div>
								))}
						</div>
					);
				}}
			</Query>
		</Fragment>
	);
};

export default Posts;
