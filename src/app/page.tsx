
import MainBody from "./Components/MainBody";
import Features from "./Components/Features";
import WeOffer from "./Components/WeOffer";
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2B2B2B] text-white">
      <MainBody />
      <Features/>
      <WeOffer/>
      <Footer/>
    </main>
  );
}
