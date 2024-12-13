import { Footer } from "@/components/footer";
import { PreviewModal } from "@/components/modals/preview-modal";
import { VideoModal } from "@/components/modals/video-modal";
import { Navbar } from "@/components/navbars/navbar";
import { MenuSidebar } from "@/components/sidebars/menu-sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <PreviewModal />
      <VideoModal />
      <MenuSidebar />
    </>
  );
}
