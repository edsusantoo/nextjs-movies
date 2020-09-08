import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import MovieList from "../components/MovieList";

import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { tabMovie } = useContext(AppContext);
  return (
    <Layout title="Next Movies" description="Watch your next movies">
      <section className="container mx-auto">
        <Tabs />
        <MovieList type={tabMovie.type} />
      </section>
    </Layout>
  );
}
