import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavBar from './_components/NavBar';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#ffffff] via-[#000000] to-[#f0f0ed] shadow-xl shadow-[#2a6eff]/40 text-black">
      <main>
        <Header />
        <NavBar />
          
        <div className="mt-18">
            <Footer />
          </div>

      </main>
    </div>
  );
}
