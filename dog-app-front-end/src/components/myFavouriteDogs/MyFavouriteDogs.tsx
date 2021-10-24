import React, { useEffect } from 'react'
import styles from './MyFavouriteDogs.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { fetchFavouriteDogsAction } from '../../redux/favouriteDog/FavouriteDogAction'

export const MyFavouriteDogs: React.FC = () => {

	const favouriteList = useSelector(state => state.favouriteDog.favouriteList);
	const favouriteLoading = useSelector(state => state.favouriteDog.favouriteLoading);
	const error = useSelector(state => state.favouriteDog.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFavouriteDogsAction());
	}, [dispatch])

	if (error) {
		return <div className={styles.favouriteError}>{error}</div>
	}

	return (
		<div className={styles.myFavourite}>
			{favouriteLoading ? (<div className={styles.favouriteLoading}>loading</div>) :
				(favouriteList.length === 0) ? (<div className={styles.favouriteAdd}>Add your favourite dog!</div>) :
					(
						<div className={styles.myFavouriteBox}>
							<h2>Favourite Dog Box</h2>
							<div className={styles.favouriteList}>
								{favouriteList.map((data) =>
									<div key={data.id}>
										<img className={styles.favouriteImage} src={data.url} alt={data.id}/>
									</div>
								)}
							</div>
						</div>
					)
			}
		</div>
	)
}