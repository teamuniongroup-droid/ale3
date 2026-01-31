import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main className="py-4 px-2 md:py-8 md:px-4">
        <VideoPlayer />
      </main>

      {/* Hidden sections that appear after video */}
      <div className="esconder">
        <PricingSection />
        <GuaranteeSection />
      </div>
    </div>
  );
};

export default Index;
