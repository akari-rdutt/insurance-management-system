import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <header>
            <NavBar />
          </header>
          <main className="flex-1 h-screen ">
            <div className="flex-col items-center justify-between p-24">
              {children}
            </div>
          </main>
        </div>
      </body>
      {/* <Footer /> */}
    </html>
  );
}
