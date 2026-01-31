import { Bell } from "lucide-react";
import { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Add the esconder style
    const style = document.createElement("style");
    style.textContent = `.esconder { display: none; }`;
    document.head.appendChild(style);

    // Setup MutationObserver to detect when .esconder becomes visible
    const setupObserver = () => {
      const esconderSection = document.querySelector(".esconder");
      if (!esconderSection) return;

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "style") {
            const element = mutation.target as HTMLElement;
            const computedStyle = window.getComputedStyle(element);
            
            if (computedStyle.display !== "none") {
              console.log("Esconder section is now visible - triggering scroll");
              
              // Dispatch custom event to start the pricing timer
              window.dispatchEvent(new CustomEvent("startPricingTimer"));
              
              // Hide hashtags
              const hashtagsSection = document.getElementById("hashtags-section");
              if (hashtagsSection) {
                hashtagsSection.style.display = "none";
              }
              
              // Scroll to pricing section after a brief delay for layout
              setTimeout(() => {
                const pricingSection = document.getElementById("pricing-section");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 300);
              
              // Disconnect observer after triggering
              observer.disconnect();
            }
          }
        });
      });

      observer.observe(esconderSection, { attributes: true, attributeFilter: ["style"] });
    };

    // Load the vturb player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/69791a86ba592bac61ff76a8/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Add the reveal script after player loads
    script.onload = () => {
      const revealScript = document.createElement("script");
      revealScript.textContent = `
        var delaySeconds = 2186;
        var player = document.querySelector("vturb-smartplayer");
        
        if (player) {
          player.addEventListener("player:ready", function() {
            player.displayHiddenElements(delaySeconds, [".esconder"], {
              persist: true
            });
          });
        }
      `;
      document.body.appendChild(revealScript);
      
      // Setup observer after script loads
      setTimeout(setupObserver, 500);
    };

    return () => {
      style.remove();
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-0">
      <div className="video-container-wrapper w-[85%] md:w-full mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-2 py-1.5 md:px-4 md:py-2.5 bg-primary">
          <div className="flex items-center gap-1 md:gap-2 text-primary-foreground">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">Exklusiver Bericht</span>
          </div>
          <span className="px-2 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold rounded bg-cnn-dark text-foreground uppercase tracking-wider">
            Jetzt Ansehen
          </span>
        </div>

        {/* Video Player */}
        <div 
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-69791a86ba592bac61ff76a8" style="display: block; margin: 0 auto; width: 100%; max-width: 100%;"></vturb-smartplayer>`
          }}
        />

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-2 py-2 md:px-4 md:py-3 bg-cnn-dark-secondary border-t border-border">
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold tracking-wider text-primary">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500 shadow-[0_0_8px_3px_rgba(34,197,94,0.6)]"></span>
            </span>
            LIVE
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-medium tracking-wide text-warning">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-warning"></span>
            <span className="leading-tight">AUFNAHME KANN BALD ENTFERNT WERDEN</span>
          </div>
        </div>
      </div>

      {/* Hashtags section */}
      <div id="hashtags-section" className="mt-4 md:mt-8 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3 md:mb-5">
          <Bell className="w-3 h-3 md:w-4 md:h-4" />
          <p className="text-xs md:text-sm">Bleiben Sie informiert mit BBC's investigativer Berichterstattung</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <span className="hashtag-pill text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">#Erektionsstörung</span>
          <span className="hashtag-pill text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">#NatürlicheHeilmittel</span>
          <span className="hashtag-pill text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">#GesundheitsDurchbruch</span>
          <span className="hashtag-pill text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">#BBCExklusiv</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
