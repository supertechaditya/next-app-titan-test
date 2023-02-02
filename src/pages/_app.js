import "@/styles/globals.css";
import { makeServer } from "@/mock-api/server";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // makeServer();
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
