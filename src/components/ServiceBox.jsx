import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, X, Maximize2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import PromDress1 from "../assets/PromDress1.webp";
import PromDress2 from "../assets/PromDress2.webp";
import AsoEbi1 from "../assets/AsoEbi1.webp";
import AsoEbi2 from "../assets/AsoEbi2.webp";
import AsoEbi3 from "../assets/AsoEbi3.webp";
import BridalGown from "../assets/BridalGown.webp";
import BridalGown1 from "../assets/BridalGown1.webp";
import CustomCouture1 from "../assets/CustomCouture1.webp";
import CustomCouture2 from "../assets/CustomCouture2.webp";
import CustomCouture3 from "../assets/CustomCouture3.webp";
import CustomCouture4 from "../assets/CustomCouture4.webp";
import CustomCouture5 from "../assets/CustomCouture5.webp";
import Corset1 from "../assets/Corset1.webp";
import Corset2 from "../assets/Corset2.webp";
import Corset3 from "../assets/Corset3.webp";
import Corset4 from "../assets/Corset4.webp";

export const ServicesData = [
  {
    id: 'Bridal',
    name: "Breathtaking Bridal Outfits",
    description:
      "Every bride deserves a gown as unforgettable as her love story. Custom designed with timeless elegance, luxurious fabrics and flawless craftsmanship.",
    price: "From $1,200",
    image: BridalGown,
    gallery: [
      BridalGown,
      BridalGown1,
    ],
  },
  {
    id: 'Aso-ebi',
    name: "Sophisticated Aso-Ebi Ensembles",
    description:
      "Stand out at every celebration with custom-designed group and individual attire blending traditional heritage with modern cuts.",
    price: "From $350",
    image: AsoEbi1,
    gallery: [
      AsoEbi1,
      AsoEbi2,
      AsoEbi3
    ],
  },
  {
    id: 'Corset-dress',
    name: "Elegant Corset Dresses",
    description:
      "Expertly crafted corset dresses designed to accentuate your silhouette with structured bodices, flawless tailoring, premium fabrics and a perfect custom fit for weddings, parties, red carpet events and special occasions.",
    price: "From $450",
    image: Corset1,
    gallery: [
      Corset1,
      Corset2,
      Corset3,
      Corset4,
    ],
  },
  {
    id: 'Custom-wear',
    name: "Exclusive Custom Wears",
    description:
      "Tailor-made luxury garments built specifically to your unique measurements, aesthetic preferences and style.",
    price: "From $500",
    image: CustomCouture1,
    gallery: [
      CustomCouture1,
      CustomCouture2,
      CustomCouture3,
      CustomCouture4,
      CustomCouture5,
    ],
  },
  {
    id: 'Prom-dress',
    name: "Glamorous Prom Dresses",
    description:
      "Make a breathtaking entrance with custom-designed gowns crafted for show-stopping moments and unforgettable events.",
    price: "From $450",
    image: PromDress1,
    gallery: [
      PromDress1,
      PromDress2
    ],
  },
];

const ServiceBox = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageContainerRef = useRef(null);

  const handleOpenGallery = (e, service) => {
    setSelectedService(service);
    setActiveImage(service.image);

    const targetElement = e.currentTarget;
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBackToPortfolio = useCallback(() => {
    setSelectedService(null);
    setActiveImage(null);
    setIsFullscreen(false);
  }, []);

  const handleNextImage = useCallback(() => {
    if (!selectedService) return;
    const currentIndex = selectedService.gallery.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % selectedService.gallery.length;
    setActiveImage(selectedService.gallery[nextIndex]);
  }, [selectedService, activeImage]);

  const handlePrevImage = useCallback(() => {
    if (!selectedService) return;
    const currentIndex = selectedService.gallery.indexOf(activeImage);
    const prevIndex = (currentIndex - 1 + selectedService.gallery.length) % selectedService.gallery.length;
    setActiveImage(selectedService.gallery[prevIndex]);
  }, [selectedService, activeImage]);

  const handleSelectThumbnail = (imgUrl) => {
    setActiveImage(imgUrl);
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (selectedService) {
          handleBackToPortfolio();
        }
      } else if (selectedService && !isFullscreen) {
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'ArrowLeft') handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService, isFullscreen, handleBackToPortfolio, handleNextImage, handlePrevImage]);

  return (
    <div className="w-full">
      <Helmet>
        <title>
          {selectedService 
            ? `${selectedService.name} | Hany Luxury Fashion` 
            : "Hany | Custom Bridal, Aso-Ebi & Luxury Fashion"}
        </title>
        <meta
          name="description"
          content={
            selectedService 
              ? selectedService.description 
              : "Explore bespoke bridal gowns, elegant corset dresses, sophisticated Aso-Ebi outfits, luxury couture, prom dresses and custom-made outfits by Hany."
          }
        />
        <meta property="og:url" content="https://hany-pi.vercel.app/" />
        <meta 
          property="og:image" 
          content={selectedService ? selectedService.image : "https://hany-pi.vercel.app/og-cover.jpg"} 
        />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full my-auto items-center">
        {ServicesData.map((service, index) => (
          <div
            key={service.id || index}
            onClick={(e) => handleOpenGallery(e, service)}
            className="group relative h-96 sm:h-112 w-full rounded-2xl overflow-hidden border border-[#E5A93C]/40 bg-[#3b1820]/40 backdrop-blur-md shadow-2xl cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:border-[#E5A93C] hover:shadow-2xl hover:shadow-[#E5A93C]/20 last:lg:col-span-2 last:lg:w-1/2 last:lg:mx-auto"
          >
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2c0d14] via-[#3b1820]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#F5D061] transition-colors duration-300">
                {service.name}
              </h3>

              <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed mb-6 line-clamp-2">
                {service.description}
              </p>

              <div className="pt-3 border-t border-[#E5A93C]/30 flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-[#F5D061] font-semibold">
                  {service.price}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenGallery(e, service);
                  }}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] hover:scale-105 text-[#3b1820] text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out shadow-md shadow-black/40 cursor-pointer flex items-center gap-1.5"
                >
                  <Eye size={15} />
                  <span>View More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 transition-all duration-300 overflow-y-auto"
          onClick={handleBackToPortfolio}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#2c0d14] border border-[#E5A93C]/50 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col items-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-2 border-b border-[#E5A93C]/30 mb-2">
              <button
                onClick={handleBackToPortfolio}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] text-[#3b1820] text-xs font-bold hover:scale-105 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>

              <div className="text-center px-2">
                <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                  {selectedService.name}
                </h3>
              </div>

              <button
                onClick={handleBackToPortfolio}
                className="p-1.5 rounded-full text-pink-100/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div 
              ref={imageContainerRef}
              className="relative w-full flex justify-center items-center rounded-xl overflow-hidden bg-black/60 border border-[#E5A93C]/30 group"
            >
              <img
                src={activeImage}
                alt={selectedService.name}
                className="w-full max-h-[75vh] object-contain transition-all duration-300 cursor-zoom-in"
                onClick={() => setIsFullscreen(true)}
              />

              {selectedService.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-[#F5D061] hover:bg-black transition-colors cursor-pointer shadow-lg"
                    title="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-[#F5D061] hover:bg-black transition-colors cursor-pointer shadow-lg"
                    title="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <button 
                onClick={() => setIsFullscreen(true)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-[#F5D061] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black cursor-pointer shadow-lg"
                title="Expand Fullscreen"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            {selectedService.gallery.length > 1 && (
              <div className="w-full pt-3 mt-2 border-t border-[#E5A93C]/20 flex justify-center gap-2 overflow-x-auto">
                {selectedService.gallery.map((imgUrl, subIdx) => (
                  <button
                    key={subIdx}
                    onClick={() => handleSelectThumbnail(imgUrl)}
                    className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl
                        ? 'border-[#F5D061] scale-105 ring-2 ring-[#F5D061]/50'
                        : 'border-[#E5A93C]/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${subIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            onClick={() => setIsFullscreen(false)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
          
          <img
            src={activeImage}
            alt="Full display"
            className="max-w-full max-h-full object-contain rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceBox;