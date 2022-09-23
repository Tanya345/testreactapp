import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './ListItem';

// List Component
const WrappedListComponent = ({ tasks }) => {

	return (
		<div>
			<h3 className='text-center'>What's in your Bucket List?</h3>
			<ul className='d-flex flex-column align-items-center'>
				{tasks?.map((task, index) => (
					<SingleListItem key={index}
						task={task}
					/>
				))}
			</ul>
		</div>
	)
};

WrappedListComponent.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired
	})).isRequired,
};
WrappedListComponent.defaultProps = {
	items: [],
};

const List = memo(WrappedListComponent);

export default List;