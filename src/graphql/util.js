import { RECENT_QUERY, FEATURED_QUERY, FEEDS_QUERY, TRENDING_QUERY } from './queries';

const getQuery = (searchType) => {
	switch (searchType) {
		case 'Stories Feed':
			return FEEDS_QUERY;
		case 'Recent Stories':
			return RECENT_QUERY;
		case 'Featured Stories':
			return FEATURED_QUERY;
		case 'Trending Stories':
			return TRENDING_QUERY;
		default:
			return 'Recent Stories';
	}
};

export default getQuery;
