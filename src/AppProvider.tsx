import { Toaster } from 'sonner'
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FastQR</title>
      </Helmet>
      <Toaster richColors closeButton />
      {children}
    </>
  );
}

export default AppProvider;
