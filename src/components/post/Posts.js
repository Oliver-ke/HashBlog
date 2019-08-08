import React, { Fragment, useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import PostItem from './PostItem';
import PreLoader from './../util/PreLoader';
import debounce from 'lodash.debounce';

const Posts = ({ type, query }) => {
	const [ page, setPage ] = useState(0);
	const [ privType, setPrivType ] = useState('');
	const [ initialLoad, setInitialLoad ] = useState(true);

	useEffect(
		() => {
			if (privType !== type) {
				setPrivType(type);
				setInitialLoad(false);
			} else if (privType === type) {
				setInitialLoad(true);
			}
		},
		// eslint-disable-next-line
		[ type ]
	);
	window.onscroll = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setPage(page + 1);
		}
	}, 100);

	return (
		<Fragment>
			<Query query={query} variables={{ page, type }}>
				{({ loading, error, data }) => {
					if (loading && !initialLoad && !Object.values(data).length > 0) {
						return <PreLoader />;
					}
					if (error) console.log(error);
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
