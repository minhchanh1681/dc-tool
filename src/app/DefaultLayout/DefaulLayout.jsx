import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function DefaultLayout({ children }) {
    return (
      <main className="">
        <div className="header fixed-top">
          <Header/>
        </div>
        <div className="mt-5">
          <Navigation/>
        </div>
        <div >
        {children}
        </div>
        <footer className="footer fixed-bottom">
          <Footer/>
        </footer>
      </main>
    );
}