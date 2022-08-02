
const Movie = ({title,index,overview,poster_path}) => {
    const IMAGE__API = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='movie' key={index}>
        <h3>{title}</h3>
        <img src={IMAGE__API + poster_path} alt={title} />
        <div className='movie-overview'>{overview}</div>
    </div>
  )
}

export default Movie