import Layout from "../../components/Layout";
import { fetchQuery } from "../../utils/network";
import Link from "next/link";

export default function Movie({ movie }) {
  return (
    <Layout title={movie.original_title} description={movie.overview}>
      <section className="flex flex-col py-10 md:flex-row md:space-x-6">
        <div className="w-full md:w-auto">
          <img
            className="w-full rounded-lg sm:w-64"
            src={`${process.env.THEMOVIEDB_IMAGE_URL}${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className="flex flex-col w-full mt-6 md:flex-1 md:mt-0">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              {movie.title}{" "}
              <span className="font-normal text-gray-400">
                ({new Date(movie.release_date).getFullYear()})
              </span>{" "}
            </h2>
            <span className="block mt-1 text-sm text-gray-400">
              {movie.tagline ?? ""}
            </span>
            {movie.genres.map((genre) => (
              <a
                key={genre.id}
                className="inline-block px-2 py-1 mt-3 mr-2 text-xs text-white uppercase bg-red-500 rounded-lg tracking wide"
              >
                {genre.name}
              </a>
            ))}
            <p className="mt-5 text-lg text-white">{movie.overview}</p>
          </div>
          <div className="flex flex-col mt-6 sm:items-center sm:flex-row sm:space-x-6 md:mt-0">
            <div className="flex items-end">
              <p className="text-sm text-white uppercase tracking-whide">
                Released on:
              </p>{" "}
              <time
                className="pl-2 text-sm tracking-wide text-gray-400 uppercase"
                dateTime={movie.release_date}
              >
                {new Date(movie.release_date).toDateString()}
              </time>
            </div>
            <div className="flex items-end mt-3 sm:mt-0">
              <p className="text-sm text-white uppercase tracking-whide">
                Runtime:
              </p>
              <span className="pl-2 text-xs tracking-wide text-gray-400 uppercase">
                {movie.runtime} mins
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const data = await fetchQuery("movie", params.id);
  return {
    props: {
      movie: data,
    },
  };
}
