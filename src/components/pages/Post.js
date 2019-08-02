import React from 'react';
import PostArticle from '../post/PostArticle';
import { Query } from 'react-apollo';
import { POST_QUERY } from '../../graphql/queries';
import PreLoader from './../util/PreLoader';
import Badges from './../util/Badges';
import AuthorProfile from './../util/AuthorProfile';
import { Link } from 'react-router-dom';
const Post = ({ match }) => {
	const { cuid } = match.params;
	return (
		<Query query={POST_QUERY} variables={{ cuid }}>
			{({ loading, error, data }) => {
				if (loading) return <PreLoader />;
				const { title, contentMarkdown, coverImage, author, tags, dateAdded } = data.post;
				if (error) console.log(error);
				return (
					<div className="container">
						<Link
							to="/"
							style={{ marginBottom: '5px' }}
							className="waves-effect waves-light btn purple darken-4"
						>
							<i className="material-icons left">keyboard_arrow_left</i>Back
						</Link>
						<div className="row">
							<Badges tags={tags} />
						</div>
						<AuthorProfile author={author} title={title} dateAdded={dateAdded} />
						<PostArticle content={contentMarkdown} image={coverImage} />
					</div>
				);
			}}
		</Query>
	);
};

export default Post;
