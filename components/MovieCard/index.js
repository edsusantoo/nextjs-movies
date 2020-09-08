import Link from "next/link";
import { LazyImage } from "../../utils/LazyImage";
export default function MovieCard({ movie }) {
  return (
    <Link key={movie.title} href={`/movie/${movie.id}`}>
      <a className="flex flex-col mt-6 ml-4 mr-4 overflow-hidden">
        {/* <LazyImage
          alt={movie.title}
          src={`${process.env.THEMOVIEDB_IMAGE_URL}${movie.poster_path}`}
        /> */}

        <img
          className="flex-1 block w-full rounded-lg"
          src={`${process.env.THEMOVIEDB_IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <h2 className="justify-end mt-3 text-lg text-center text-red-500">
          {movie.title}
        </h2>
      </a>
    </Link>
  );
}
