import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import SaleBar from "./components/layout/SaleBar";
import Layout from "./components/layout/Layout";
import Loading from "./components/ui/Loading";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy load page components - only loaded when route is visited
const Home = lazy(() => import("./features/home/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SaleBar />
        <div className="px-12 md:px-16 lg:px-24">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
