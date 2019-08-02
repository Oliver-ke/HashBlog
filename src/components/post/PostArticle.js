import React, { Fragment } from 'react';
import MDReactComponent from 'markdown-react-js';

const PostArticle = ({ content, image }) => {
	const handleIterate = (Tag, props, children, level) => {
		if (Tag === 'p') {
			props = {
				...props,
				className: 'flow-text'
			};
		}
		if (Tag === 'span') {
			props = {
				...props,
				className: 'article'
			};
		}
		if (Tag === 'img') {
			props = {
				...props,
				className: 'responsive-img'
			};
		}

		if (Tag === 'blockquote') {
			props = {
				...props,
				style: { fontSize: '30px', fontWeight: 'bolder', borderLeftColor: '#4a148c' },
				className: 'blue-grey lighten-5'
			};
		}

		return <Tag {...props}>{children}</Tag>;
	};
	const TAGS = {
		html: 'span',
		h1: 'h4',
		h2: 'blockquote', // root node, replaced by default
		strong: 'b',
		em: 'i'
	};
	return (
		<Fragment>
			<img className="responsive-img" style={{ width: '100%' }} alt="post-img" src={image} />
			<MDReactComponent text={content} tags={TAGS} onIterate={handleIterate} />
		</Fragment>
	);
};

export default PostArticle;
