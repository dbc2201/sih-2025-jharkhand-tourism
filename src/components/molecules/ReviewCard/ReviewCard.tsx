import React from 'react';
import type { ReviewCardProps } from './ReviewCardProps';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Rating } from '../../atoms/Rating/Rating';

export const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, content, date }) => {
	return (
		<div className="review-card">
			<div className="review-card__header">
				<Avatar name={author} />
				<div className="review-card__info">
					<span className="review-card__author">{author}</span>
					<Rating rating={rating} />
				</div>
			</div>
			<p className="review-card__content">{content}</p>
			<span className="review-card__date">{date}</span>
		</div>
	);
};
