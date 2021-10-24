import React, { useEffect } from 'react'
import styles from './DogSelector.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { getDogsDataAction, getNextDogAction } from '../../redux/dogSelector/DogSelectorAction'
import { postFavouriteDogAction } from '../../redux/favouriteDog/FavouriteDogAction'

export const DogSelector: React.FC = () => {
	const dogs = useSelector(state => state.dogSelector.dogList);
	const dogListLoading = useSelector(state => state.dogSelector.dogListLoading);
	const error = useSelector(state => state.dogSelector.error);
	const index = useSelector(state => state.dogSelector.index);
	const favouriteList = useSelector(state => state.favouriteDog.favouriteList);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDogsDataAction());
	}, [])
	
	const nextButtonHandler = () => {
		if (index < 171) {
			dispatch(getNextDogAction(index + 1));
		} else {
			window.alert('This is the last image')
		}
	}

	const preButtonHandler = () => {
		if (index > 0) {
			dispatch(getNextDogAction(index - 1))
		} else {
			window.alert('This is the first image')
		}
	}

	const favouriteButtonHandler = () => {
		if (!favouriteList.find(data => data.id === dogs[index].image.id)) {
			dispatch(postFavouriteDogAction(dogs[index].image.url, dogs[index].image.id));
		}
		else {
			window.alert('You have added it in your box')
		}
	}

	if (error) {
		return <div className={styles.dogError}>{error}</div>
	}

	return (
		<div className={styles.dogSelector}>
			{dogListLoading ? (<div className={styles.dogLoading}>Loading...</div>) :
				(<div className={styles.dogSelectorCard}>
					<h2>Select your favourite dogs</h2>
					<div>
						<img className={styles.dogImage} src={dogs[index].image.url} alt="" />
						<div className={styles.dogSelectorPanel}>
							<button className={styles.dogButton} onClick={preButtonHandler}>{`<<`}</button>
							<button className={styles.dogButton} onClick={favouriteButtonHandler}>Like</button>
							<button className={styles.dogButton} onClick={nextButtonHandler}>{`>>`}</button>
						</div>
					</div>
				</div>
				)
			}
		</div>
	)
}