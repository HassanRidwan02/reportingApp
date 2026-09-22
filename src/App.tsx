import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import BrowseItems from "./pages/BrowseItems";

import Home from "./pages/Home";
import ReportItem from "./pages/ReportItem";
import ItemDetails from "./pages/ItemDetails";

function PlaceholderPage({title,}: {title: string;}) {
  return (
    <main className="min-h-[70vh] bg-slate-50 py-20">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route 
            path="/browse" 
            element={<BrowseItems />} />
            
          <Route path="/items/:id" element={<ItemDetails />} />

          <Route path="/report" element={<ReportItem />} />


          <Route
            path="/login"
            element={<PlaceholderPage title="Log in" />}
          />

          <Route
            path="/signup"
            element={<PlaceholderPage title="Sign up" />}
          />

          <Route
            path="/dashboard"
            element={<PlaceholderPage title="Dashboard" />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;