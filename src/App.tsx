import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import DronesPage from "./pages/DronesPage";
import AguaPage from "./pages/AguaPage";
import SeguridadPage from "./pages/SeguridadPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./pages/NotFound";

// PRODUCT DETAIL PAGES
import EndoscopioTF3319Page from "./pages/productos/EndoscopioTF3319Page";
import EndoscopioTF3309Page from "./pages/productos/EndoscopioTF3309Page";
import ExtensionTFXC0139Page from "./pages/productos/ExtensionTFXC0139Page";
import MorralLEDPage from "./pages/productos/MorralLEDPage";
import BodycamTF3102Page from "./pages/productos/BodycamTF3102Page";
import Ecoloblue30Page from "./pages/productos/Ecoloblue30Page";
import Ecoloblue1000Page from "./pages/productos/Ecoloblue1000Page";
import Ecoloblue10000Page from "./pages/productos/Ecoloblue10000Page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/drones" element={<DronesPage />} />
          <Route path="/agua" element={<AguaPage />} />
          <Route path="/seguridad" element={<SeguridadPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          
          {/* PRODUCT DETAIL ROUTES */}
          <Route path="/productos/endoscopio-tf3319" element={<EndoscopioTF3319Page />} />
          <Route path="/productos/endoscopio-tf3309" element={<EndoscopioTF3309Page />} />
          <Route path="/productos/extension-tfxc0139" element={<ExtensionTFXC0139Page />} />
          <Route path="/productos/morral-led" element={<MorralLEDPage />} />
          <Route path="/productos/bodycam-tf3102" element={<BodycamTF3102Page />} />
          <Route path="/productos/ecoloblue-30" element={<Ecoloblue30Page />} />
          <Route path="/productos/ecoloblue-1000" element={<Ecoloblue1000Page />} />
          <Route path="/productos/ecoloblue-10000" element={<Ecoloblue10000Page />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
