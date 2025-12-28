import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutGrid from "@/components/about/AboutGrid";
import AboutText from "@/components/about/AboutText";
import { aboutItems } from "@/lib/about-data";

export default function About() {
  return (
    <>
      <Header title="Menu" />
      {/* text */}
      <AboutText />
      {/* images */}
      <AboutGrid items={aboutItems} />
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}











