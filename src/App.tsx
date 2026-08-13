import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { BookingProvider } from "./booking";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Packages } from "./pages/Packages";
import { Theory } from "./pages/Theory";
import { Gallery } from "./pages/Gallery";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <I18nProvider>
      <BookingProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/theory" element={<Theory />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </BookingProvider>
    </I18nProvider>
  );
}
