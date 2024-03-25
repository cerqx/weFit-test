import { useContext } from "react";

import { WeMoviesContext } from "@/contexts/WeMoviesContext";

export function useWeMovies() {
  return useContext(WeMoviesContext);
}