import gql from 'graphql-tag';

const FEATURED_QUERY = gql`
	query feauredStories($limit: Int!) {
		featuredStories(limit: $limit) {
			title
			cuid
			coverImage
			author {
				name
				photo
			}
		}
	}
`;
const RECENT_QUERY = gql`
	query recentStories($limit: Int!) {
		recentStories(limit: $limit) {
			title
			cuid
			coverImage
			author {
				name
			}
		}
	}
`;

const TRENDING_QUERY = gql`
	query trendingStories($limit: Int!) {
		trendingStories(limit: $limit) {
			title
			cuid
			coverImage
			author {
				name
				fake
			}
		}
	}
`;
const FEEDS_QUERY = gql`
	query storiesFeed($limit: Int!) {
		storiesFeed(limit: $limit) {
			title
			cuid
			coverImage
			author {
				name
			}
		}
	}
`;

const POST_QUERY = gql`
	query post($cuid: String!) {
		post(cuid: $cuid) {
			title
			type
			tags {
				name
			}
			contentMarkdown
			author {
				name
				photo
				tagline
			}
			coverImage
			dateAdded
		}
	}
`;

export { FEEDS_QUERY, TRENDING_QUERY, RECENT_QUERY, FEATURED_QUERY, POST_QUERY };
