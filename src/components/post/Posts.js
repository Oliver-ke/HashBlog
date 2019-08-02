import React, { Fragment, useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import getQuery from '../../graphql/util';
import PostItem from './PostItem';
import PreLoader from './../util/PreLoader';
import debounce from 'lodash.debounce';
import { TRENDING_QUERY } from '../../graphql/queries';

const Posts = ({ searchType }) => {
	const [ limit, setLimit ] = useState(10);
	const [ privType, setPrivType ] = useState('');
	const [ initialLoad, setInitialLoad ] = useState(true);
	const [ postQuery, setPostQuery ] = useState(TRENDING_QUERY);
	const changeLimit = (newLimit) => {
		setLimit(newLimit);
	};
	useEffect(
		() => {
			const newQuery = getQuery(searchType);
			setPostQuery(newQuery);
			if (privType !== searchType) {
				setPrivType(searchType);
				setInitialLoad(false);
			} else if (privType === searchType) {
				setInitialLoad(true);
			}
		},
		// eslint-disable-next-line
		[ searchType ]
	);
	window.onscroll = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setLimit(limit + 5);
		}
	}, 100);

	return (
		<Fragment>
			<Query query={postQuery} variables={{ limit }}>
				{({ loading, error, data }) => {
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
