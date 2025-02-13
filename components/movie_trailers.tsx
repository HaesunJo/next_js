import { API_URL } from "../app/(home)/page"

async function getTrailer(id:string){
	const response = await fetch(`${API_URL}/${id}/videos`)
	
	return response.json()
}
export default async function MovieTrailers({id}: {id:string}){
    const trailers = await getTrailer(id)
    
    return <h6>{JSON.stringify(trailers)}</h6>
}