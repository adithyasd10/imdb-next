import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';

export default async function Home({ searchParams }) {
  const API_KEY = process.env.API_KEY;
  console.log('API_KEY:', API_KEY); // Debug: log API key
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;
  console.log('TMDB URL:', url); // Debug: log request URL
  const res = await fetch(url, { next: { revalidate: 10000 } });
  const data = await res.json();
  if (!res.ok) {
    console.error('TMDB Error:', data);
    throw new Error('Failed to fetch data');
  }
  const results = data.results;

  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar/>
      <SearchBox/>
      <Results results={results} />
    </div>
  );
}