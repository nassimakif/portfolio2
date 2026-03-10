import LeftSidebar from "@/components/LeftSidebar";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Grain from "@/components/ui/Grain";
import Navbar from "@/components/Navbar";
import RightContent from "@/components/RightContent";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Grain />
      <FloatingDock />

      {/* Mobile navbar — hidden on desktop */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* Main layout */}
      <div
        className="min-h-screen"
        style={{ backgroundColor: "#151312" }}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 lg:flex lg:gap-20">
          <LeftSidebar />
          <RightContent />
        </div>
      </div>

      <Footer />
    </>
  );
}
