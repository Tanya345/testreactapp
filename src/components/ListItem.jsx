import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

// ListItem Component
const WrappedSingleListItem = ({
	task
}) => {
	const [isSelected, setIsSelected] = useState(false)
	const onClickHandler = () => {
		setIsSelected(!isSelected)
	}
	return (
			<li className='m-3 p-3 w-50 d-flex justify-content-between'
				style={{ backgroundColor: isSelected ? 'green' : 'greenYellow'}}
				onClick={onClickHandler}
			>
				<span>{task}</span>
				{isSelected ? <span>&#10004;</span> : <span>&#43;</span>}
			</li>
	);
};

WrappedSingleListItem.propTypes = {
	index: PropTypes.number,
	task: PropTypes.string.isRequired,
};
WrappedSingleListItem.defaultProps = {   // Recommended to use defaultProps in case when they are marked as required to avoid warnings
	task: ''
};

const SingleListItem = memo(WrappedSingleListItem);
export default SingleListItem