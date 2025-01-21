import { CartProvider } from "@/components/CartContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useGentoo } from "@/services/useGentoo";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  useGentoo(); // useGentoo hook 호출

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default MyApp;