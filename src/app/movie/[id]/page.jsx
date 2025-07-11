import Image from 'next/image';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black py-10 px-4">
      <div className="group relative max-w-6xl w-full rounded-2xl p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:shadow-pink-500/50 transition-all duration-500">
        {/* Inner Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#1a1a1a] p-6 md:p-10 w-full flex flex-col md:flex-row md:space-x-10 backdrop-blur-md">
          {/* Movie Image */}
          <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={
                movie.backdrop_path || movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      movie.backdrop_path || movie.poster_path
                    }`
                  : "/placeholder.png"
              }
              width={700}
              height={400}
              alt={movie.title || movie.name || "Movie image"}
              className="rounded-xl w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out shadow-xl"
            />
          </div>
          {/* Movie Info */}
          <div className="mt-6 md:mt-0 md:w-1/2 flex flex-col justify-center space-y-5 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {movie.title || movie.name}
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              {movie.overview || "No description available."}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                🎬 {movie.release_date || movie.first_air_date || "N/A"}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                ⭐ {movie.vote_count ?? "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
