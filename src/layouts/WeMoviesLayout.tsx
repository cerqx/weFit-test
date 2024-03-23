import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function WeMoviesLayout() {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}