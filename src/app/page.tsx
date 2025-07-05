import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavBar from './_components/NavBar';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-black-900 via-[#ffff9c] to-[#F5F5DC] shadow-xl shadow-[#F5F5DC]/40 text-black">
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
