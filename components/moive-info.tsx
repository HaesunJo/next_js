import { API_URL } from "../app/(home)/page"
import styles from "../styles/movie-info.module.css"

async function getMoive(id:string) {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	// throw new Error("Error")
	const response = await fetch(`${API_URL}/${id}`)
	
	return response.json()
}

export default async function MovieInfo({id}: {id:string}){
    const movie = await getMoive(id)

	// return <h6>{JSON.stringify(movie)}</h6>
	return (
		<div className={styles.container}>
			<img src={movie.poster_path} className={styles.poster} />
			<div className={styles.info}>
				<h1 className={styles.title}>{movie.title}</h1>
				<h3 className={styles.rates}>{movie.vote_average.toFixed(1)}</h3>
				<p className={styles.overview}>{movie.overview}</p>
				<a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
			</div>
		</div>
	)
}