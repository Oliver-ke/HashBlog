import React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';

const PostItem = ({ coverImage, title, author, cuid }) => {
	if (coverImage.length === 0) {
		coverImage = 'https://via.placeholder.com/300x100?text=No+Cover-Image';
	}
	return (
		<Media query={{ maxWidth: 599 }}>
			{(match) =>
				match ? (
					<div className="card horizontal" style={{ height: '155px' }}>
						<div className="card-image">
							<img src={coverImage} style={{ height: '100%' }} alt="post-img" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								{title.length > 20 ? (
									<p style={{ fontSize: '12px' }}>{`${title.slice(0, 20)}...`}</p>
								) : (
									<p>{title}</p>
								)}
								<h5 style={{ fontSize: '12px', fontWeight: 'bold' }}>{author.name}</h5>
								<Link to={`/post/${cuid}`} className="btn purple darken-4">
									View Post
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className="card horizontal" style={{ height: '220px' }}>
						<div className="card-image">
							<img src={coverImage} style={{ height: '100%' }} alt="post-img" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								{title.length > 55 ? <p>{`${title.slice(0, 55)}...`}</p> : <p>{title}</p>}
								<h5 style={{ fontWeight: 'bold' }}>{author.name}</h5>
								<Link to={`/post/${cuid}`} className="btn purple darken-4">
									View Post
								</Link>
							</div>
						</div>
					</div>
				)}
		</Media>
	);
};

export default PostItem;
