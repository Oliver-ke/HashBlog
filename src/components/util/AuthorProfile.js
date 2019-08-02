import React, { Fragment } from 'react';
import Media from 'react-media';
import moment from 'moment';

const AuthorProfile = ({ author, title, dateAdded }) => {
	return (
		<div className="col s12">
			<Media query={{ maxWidth: 599 }}>
				{(match) =>
					match ? (
						<Fragment>
							<h4>{title}</h4>
							<h6>{moment(dateAdded).format('MMMM Do YYYY, h:mm:ss a')}</h6>
							<div style={{ height: '100px' }} className="card-panel grey lighten-5 z-depth-1">
								<div className="row valign-wrapper">
									<div className="col s2">
										<img src={author.photo} alt="" className="circle responsive-img" />
									</div>
									<div className="col s10">
										<h6 style={{ fontWeight: 'bold' }} className="black-text">
											{author.name}
										</h6>
										<p>{author.tagline}</p>
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						<Fragment>
							<h3>{title}</h3>
							<h6>{moment(dateAdded).format('MMMM Do YYYY, h:mm:ss a')}</h6>
							<div style={{ height: '170px' }} className="card-panel grey lighten-5 z-depth-1">
								<div className="row valign-wrapper">
									<div className="col s2">
										<img src={author.photo} alt="" className="circle responsive-img" />
									</div>
									<div className="col s10">
										<h6 style={{ fontWeight: 'bold' }} className="black-text">
											{author.name}
										</h6>
										<p>{author.tagline}</p>
									</div>
								</div>
							</div>
						</Fragment>
					)}
			</Media>
		</div>
	);
};

export default AuthorProfile;
