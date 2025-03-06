import { API_URL } from "../app/(home)/page"
import styles from "../styles/movie-trailers.module.css"

async function getTrailer(id:string){
	const response = await fetch(`${API_URL}/${id}/videos`)
	
	return response.json()
}
export default async function MovieTrailers({id}: {id:string}){
	const trailers = await getTrailer(id)
	
	// return <h6>{JSON.stringify(trailers)}</h6>
	return (
		<div className={styles.container}>
			{trailers.map(video =>
				<iframe
					key={video.id}
					title={video.name}
					src={`https://www.youtube.com/embed/${video.key}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
					allowFullScreen
					/>
				)}
		</div>
	)
}