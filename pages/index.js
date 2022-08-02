import Head from 'next/head'
import getConfig from 'next/config'
import Movie from '../src/components/Movie'
import { useState, useEffect } from 'react';


const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

export default function Home(initialData) {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    setSearchResults(initialData.trendingMovies.results)
  },[initialData]);

const handleInputs= (e)=>{
  let {name, value} = e.target;
  setFormInput({...formInput, [name]: value});
  setSearchTerm(e.target.value);
};

const search = async (e)=>{
  e.preventDefault();
  let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
};


  return (
    <div className='container'>
      <Head>
        <h1>Movies App</h1>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div>
        <form onSubmit={search}>
          <input className='search' name='searchTerm' value={searchTerm} onChange={handleInputs} type='text' required/>
          <button className='btn-search'>search</button>
        </form>
      </div>
      <div className='movie-search-results-grid'>
        {searchResults.map((each,index)=>{
          return(
            <Movie 
            key={index}
            index={each.id}
            title={each.title}
            poster_path={each.poster_path}
            overview={each.overview}
            />
          )
        })}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  let trendingMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${serverRuntimeConfig.apiKey}`);
  trendingMovies = await trendingMovies.json()
  console.log(trendingMovies);
  return {
    props: {trendingMovies: trendingMovies}, // will be passed to the page component as props
  }
}
