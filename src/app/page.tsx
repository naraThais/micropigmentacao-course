import Container from "@/components/ui/Container";
import Header from "@/components/Header";
import ProfessionalSection from "@/components/ProfessionalSection";
import ToolsSection from "@/components/ToolsSection";
import ContentGrid from "@/components/ContentGrid";
import ScheduleGrid from "@/components/ScheduleGrid";
import PriceSection from "@/components/PriceSection";
import Footer from "@/components/Footer";
import RequirementsBox from "@/components/RequirementsBox";
import ContactSection from "@/components/ContactSection.tsx";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-light to-rose-100">
      <Container>
        <Header />
        <ProfessionalSection />
        <ToolsSection />
        <ContentGrid />
        <ScheduleGrid />
        <PriceSection />
        <RequirementsBox />
        <ContactSection />
        <Footer />
      </Container>
    </main>
  );
}
