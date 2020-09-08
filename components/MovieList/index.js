import { fetcher } from "../../utils/network";
import { useSWRInfinite } from "swr";
import useSWR from "swr";
import MovieCard from "../MovieCard";
import SkeletonMovieList from "../Skeleton/MovieList";

export default function MovieList({ type }) {
  const { data, error, size, setSize } = useSWRInfinite((index) => {
    return `${process.env.THEMOVIEDB_API_BASEURL}${type}?api_key=${
      process.env.THEMOVIEDB_APIKEY
    }&page=${index + 1}`;
  }, fetcher);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <SkeletonMovieList />;
  }
  if (data.results != 0) {
    return (
      <>
        <div className="flex flex-col">
          <div className="grid mt-5 xl:grid-cols-4">
            {data.map((movies) => {
              return movies.results.map((results, index) => {
                return <MovieCard movie={results} key={index} />;
              });
            })}
          </div>

          <a
            className="pt-2 pb-2 pl-10 pr-10 m-auto mt-5 mb-3 no-underline bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-400 "
            onClick={() => setSize(size + 1)}
          >
            Load more
          </a>
        </div>
      </>
    );
  }
}
