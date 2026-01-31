import { Check } from "lucide-react";
import bottlesSix from "@/assets/bottles-six.webp";
import bottlesThree from "@/assets/bottles-three.webp";
import bottlesTwo from "@/assets/bottles-two.webp";
import PricingBanner from "./PricingBanner";

const PricingSection = () => {
  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-16 px-3 md:px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <PricingBanner />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* 6 Bottles - Best Value (Center on desktop) */}
          <div className="order-1 md:order-2">
            <div className="pricing-card-best md:scale-105 md:-my-4">
              <div className="py-2.5 px-4 text-center font-semibold text-sm uppercase tracking-wider bg-primary">
                <span className="text-yellow-300 font-bold">BESTER WERT!</span>
              </div>
              <div className="flex-1 flex flex-col items-center p-4 md:p-6 bg-[#0d1b2a]">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1 tracking-tight text-cyan animate-glow-pulse">
                  6 FLASCHEN
                </h3>
                <p className="text-xs md:text-sm uppercase mb-3 md:mb-4 text-gray-400">180-TAGE-VORRAT</p>
                
                <div className="relative w-full h-36 md:h-44 mb-3 md:mb-4">
                  <img 
                    src={bottlesSix} 
                    alt="6 Flaschen" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-baseline gap-2 mb-3 md:mb-4 animate-glow-pulse">
                  <span className="text-4xl md:text-5xl font-extrabold text-gold">€49</span>
                  <span className="text-sm md:text-base text-gray-400">Pro Flasche</span>
                </div>

                <div className="w-full space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-gold">SIE SPAREN €294</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-foreground">50% RABATT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-foreground">3 GRATIS FLASCHEN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-foreground">180 TAGE GARANTIE</span>
                  </div>
                </div>

                <p className="text-sm text-foreground mb-3 animate-glow-pulse">+ÜBERRASCHUNG 🎁</p>

                <a 
                  href="https://www.checkout-ds24.com/product/638002/?aff=uniongroup" 
                  className="buy-button-green"
                >
                  IN DEN WARENKORB
                </a>

                <div className="mt-4 text-center">
                  <p className="text-base font-extrabold text-foreground">
                    GESAMT: <span className="text-success font-extrabold">294 €</span>
                  </p>
                  <p className="text-sm font-semibold text-foreground">+ KOSTENLOSER VERSAND INKLUSIVE</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Bottles (Right on desktop) */}
          <div className="order-2 md:order-3">
            <div className="pricing-card-regular">
              <div className="py-2.5 px-4 text-center font-semibold text-sm uppercase tracking-wider bg-[#1a2744]">
                <span className="text-foreground">Guter Wert</span>
              </div>
              <div className="flex-1 flex flex-col items-center p-4 md:p-6 bg-white">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1 tracking-tight text-[#1a1a1a]">
                  3 FLASCHEN
                </h3>
                <p className="text-xs md:text-sm uppercase mb-3 md:mb-4 text-gray-500">90-TAGE-VORRAT</p>
                
                <div className="relative w-full h-36 md:h-44 mb-3 md:mb-4">
                  <img 
                    src={bottlesThree} 
                    alt="3 Flaschen" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">€59</span>
                  <span className="text-sm md:text-base text-gray-500">Pro Flasche</span>
                </div>

                <div className="w-full space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-success">SIE SPAREN €62</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-[#1a1a1a]">30% RABATT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-[#1a1a1a]">1 GRATIS FLASCHE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-[#1a1a1a]">180 TAGE GARANTIE</span>
                  </div>
                </div>

                <a 
                  href="https://www.checkout-ds24.com/product/638001/?aff=uniongroup" 
                  className="buy-button-blue"
                >
                  IN DEN WARENKORB
                </a>

                <div className="mt-4 text-center">
                  <p className="text-base font-extrabold text-[#1a1a1a]">
                    GESAMT: <span className="text-success font-extrabold">177 €</span>
                  </p>
                  <p className="text-sm font-semibold text-[#1a1a1a]">+ KOSTENLOSER VERSAND INKLUSIVE</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Bottles (Left on desktop) */}
          <div className="order-3 md:order-1">
            <div className="pricing-card-regular">
              <div className="py-2.5 px-4 text-center font-semibold text-sm uppercase tracking-wider bg-[#1a2744]">
                <span className="text-foreground">Zum Testen</span>
              </div>
              <div className="flex-1 flex flex-col items-center p-4 md:p-6 bg-white">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1 tracking-tight text-[#1a1a1a]">
                  2 FLASCHEN
                </h3>
                <p className="text-xs md:text-sm uppercase mb-3 md:mb-4 text-gray-500">60-TAGE-VORRAT</p>
                
                <div className="relative w-full h-36 md:h-44 mb-3 md:mb-4">
                  <img 
                    src={bottlesTwo} 
                    alt="2 Flaschen" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a]">€89</span>
                  <span className="text-sm md:text-base text-gray-500">Pro Flasche</span>
                </div>

                <div className="w-full space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success flex-shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-success">SIE SPAREN €24</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-[#1a1a1a]">15% RABATT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold uppercase text-[#1a1a1a]">180 TAGE GARANTIE</span>
                  </div>
                </div>

                <a 
                  href="https://www.checkout-ds24.com/product/638004/?aff=uniongroup" 
                  className="buy-button-blue"
                >
                  IN DEN WARENKORB
                </a>

                <div className="mt-4 text-center">
                  <p className="text-base font-extrabold text-[#1a1a1a]">
                    GESAMT: <span className="text-success font-extrabold">178 €</span>
                  </p>
                  <p className="text-sm font-semibold text-[#1a1a1a]">+ 20,00 € Versand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
