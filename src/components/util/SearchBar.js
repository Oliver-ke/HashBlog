import React from 'react';

const SearchBar = () => {
	return (
		<nav style={{ marginBottom: '30px' }} className="purple darken-4">
			<div className="nav-wrapper">
				<form onSubmit={(e) => e.preventDefault}>
					<div className="input-field">
						<input id="search" type="search" placeholder="Search Blogs.. (Contribute !!)" />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default SearchBar;
