import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/moive-info"
import MovieTrailers from "../../../../components/movie_trailers"

export const metadata = {
	title: 'Movies',
	description: 'You are at the movies page',
}
// async function getMoive(id:string) {
// 	await new Promise((resolve) => setTimeout(resolve, 1000))
// 	const response = await fetch(`${API_URL}/${id}`)
	
// 	return response.json()
// }
// async function getTrailer(id:string){
// 	const response = await fetch(`${API_URL}/${id}/videos`)
	
// 	return response.json()
// }
export default async function MovieDetails({ params }: { params: { id: string } }) {
	const { id } = await params
	// const movie = await getMoive(id)
	// const trailer = await getTrailer(id)

	// call data Parallel
	// const [movie, trailer] = await Promise.all([getMoive(id), getTrailer(id)])
	// data fetching
	// const movieId = await fetch(``).then((res) => res.json())
	// console.log(id, movie)
	return (<div>
				<h1>Movie detail page for {id}</h1>
				{/* <h3>Title: {movie.title}</h3> */}
				<Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>
				<Suspense fallback={<h1>Loading movie trailer</h1>}><MovieTrailers id={id} /></Suspense>
			</div>)
}