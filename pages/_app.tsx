import { LoginProvider } from "@/lib/hooks/useLogin";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <Component {...pageProps} className="" />
    </LoginProvider>
  );
}
