import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header";

export function WeMoviesLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}