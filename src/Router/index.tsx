import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home";
import { Cart } from "@/pages/Cart";
import { CompletedPurchase } from "@/pages/CompletedPurchase";
import { WeMoviesLayout } from "@/layouts/WeMoviesLayout";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WeMoviesLayout />}>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/cart" element={<Cart />} />
                    <Route  path="/completed-purchase" element={<CompletedPurchase />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}