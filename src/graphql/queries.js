import gql from 'graphql-tag';

const FEEDS_QUERY = gql`
	query storiesFeed($type: FeedType!, $page: Int!) {
		storiesFeed(type: $type, page: $page) {
			title
			cuid
			coverImage
			author {
				name
			}
		}
	}
`;

const DISCUSS_QUERY = gql`
	query discussionsFeed($type: FeedType!, $page: Int!) {
		storiesFeed(type: $type, page: $page) {
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

export { FEEDS_QUERY, POST_QUERY, DISCUSS_QUERY };
