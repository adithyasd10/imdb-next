import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer m-2 rounded-lg overflow-hidden border border-slate-700 bg-black/30 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
      <Link href={`/movie/${result.id}`}>
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            alt={result.title || result.name || 'Movie image'}
            className="object-cover w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="p-4 text-slate-100">
          <p className="text-sm text-slate-300 line-clamp-2 mb-2">
            {result.overview || "No description available."}
          </p>
          <h2 className="text-lg font-semibold truncate mb-2">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-slate-400 text-sm">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 w-5 ml-3 mr-1 text-emerald-400" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
