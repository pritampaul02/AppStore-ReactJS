import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { AdminHome, Authentication, Home } from "../pages";
import { AdminLayout, AuthLayout, Layout } from "../layouts";

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* Admin layouts  */}
                <Route path="/admin/*" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
                </Route>

                {/* Auth Layout  */}
                <Route path="/auth/*" element={<AuthLayout />}>
                    <Route index element={<Authentication />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
