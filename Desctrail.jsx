import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Desctrail({movies}) {
    const {id}=useParams()
    console.log(id)
    const movie=movies.find(e=>e.id==id)
    console.log(movie)
  return (
    <div>
        <Link to='/' >Back to home</Link>
        <p>{movie.title}</p>
        <p>{movie.description}</p>
        <iframe height={500} width={500} src={movie.trailer} frameBorder="0"></iframe>
    </div>
  )
}

export default Desctrail