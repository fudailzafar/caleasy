import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MarketingLayoutProps) {
  return (
    <>
      <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
