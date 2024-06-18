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
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "bg-slate-950 border border-slate-800 text-slate-400 flex items-center gap-2 p-4 rounded-lg",
            error: "bg-red-900 border border-red-800 text-red-100",
            warning: "bg-yellow-900 border border-yellow-800 text-yellow-100",
            success: "bg-green-900 border border-green-800 text-green-100",
          }
        }}
      />
      {children}
    </>
  );
}

export default AppProvider;
