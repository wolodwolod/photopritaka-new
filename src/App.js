// import { lazy, Suspense } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './client/ua/Navbar';
// import './shared/styles/style.scss';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// const Cast = lazy(() => import('./pages/Cast'));
// const Reviews = lazy(() => import('./pages/Reviews'));
// import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;