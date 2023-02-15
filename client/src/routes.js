import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage.js";
import { CreatePage } from "./pages/CreatePage.js";
import { DetailPage } from "./pages/DetailPage.js";
import { AuthPage } from "./pages/AuthPage.js";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route exact path="/links" element={<LinksPage />}>
          {/* <LinksPage /> */}
        </Route>
        <Route exact path="/create" element={<CreatePage />}>
          {/* element={!isAuthenticated ? <AuthPage /> : <CreatePage />} */}
          {/* <CreatePage /> */}
        </Route>
        <Route exact path="/detail/:id" element={<DetailPage />}>
          {/* <DetailPage /> */}
        </Route>
        {/* <Navigate to="/create" /> */}
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={!isAuthenticated ? <AuthPage /> : <Navigate to="/" />}
      ></Route>
    </Routes>
  );
};
