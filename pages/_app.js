import "tailwindcss/dist/tailwind.css";
import "../styles/globals.css";
import React, { useContext } from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

import AppContext from "../context/AppContext";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  state = {
    tabMovie: { type: "" },
  };

  componentDidMount() {
    this.setState({ tabMovie: { type: "movie/popular" } });
  }

  setTabMovie = (typeMovie) => {
    this.setState({ tabMovie: { type: typeMovie } });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AppContext.Provider
          value={{
            tabMovie: this.state.tabMovie,
            setTabMovie: this.setTabMovie,
          }}
        >
          <Component {...pageProps} />
        </AppContext.Provider>
      </>
    );
  }
}
