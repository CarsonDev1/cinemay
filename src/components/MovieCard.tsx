'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Movie } from '../lib/types';
import { baseImgUrl } from '../lib/constants';
import Modal from './Modal';

const MovieCard = ({ movie }: { movie: Movie }) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	return (
		<>
			<div className='movie-card' onClick={openModal}>
				<img
					src={
						movie?.backdrop_path || movie?.poster_path
							? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
							: '/assets/no-image.png'
					}
					className='thumbnail'
					alt={movie?.title || movie?.name}
				/>
			</div>
			{showModal && <Modal movie={movie} closeModal={closeModal} />}
		</>
	);
};

export default MovieCard;
