import "@/styles/globals.css";
import { makeServer } from "@/mock-api/server";

export default function App({ Component, pageProps }) {
  makeServer();
  return <Component {...pageProps} />;
}
