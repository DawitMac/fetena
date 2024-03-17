
import "./globals.css";
import Navbar from "./Navbar";
import Provider from "./Provider";
import Themeprovider from "./Themeprovider";
import QueryProvider from "./QueryProvider";
import { Suspense } from "react";
import Loadding from "./Loadding";

export const metadata = {
  title: "Exam",
  description: "Generated by create next app",
};

export default function RootLayout({ children  }) {
  return (
    <Provider>
    <html lang="en">
      <Themeprovider>
      <body>
        {/* <Navbar /> */}
        <QueryProvider>
          <Suspense fallback={<Loadding />}>
          {children}
          </Suspense>
        </QueryProvider>
        </body>
        </Themeprovider>
    </html>
    </Provider>
  );
}