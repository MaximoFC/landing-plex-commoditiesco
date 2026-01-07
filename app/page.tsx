import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="pt-20 ">
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
