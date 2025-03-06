import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo, { getMovie } from "../../../../components/moive-info"
import MovieTrailers from "../../../../components/movie_trailers"
import styles from "../../../../styles/movie-page.module.css"

interface IParams {
	params: { id: string }
}
export async function generateMetadata({ params }: IParams) {
	if (!params?.id) return { title: "No title found" }
	
	const { id } = await params
	const movie = await getMovie(id)

	return {
		title: movie.title
	}
}
export default async function MovieDetails({ params }: IParams) {
	const { id } = await params

	return (<div className={styles.container}>
				<Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>
				<Suspense fallback={<h1>Loading movie trailer</h1>}><MovieTrailers id={id} /></Suspense>
			</div>)
}