import React, { useState } from 'react';
import { ArrowLeft, X, ChevronRight, Maximize2, Eye } from 'lucide-react';
import PromDress1 from "../assets/PromDress1.jpeg";
import PromDress2 from "../assets/PromDress2.jpeg";
import AsoEbi from "../assets/AsoEbi.jpeg";
import BridalGown from "../assets/BridalGown.jpeg";
import BridalGown1 from "../assets/BridalGown1.jpeg";

export const ServicesData = [
  {
    id: 'Bridal',
    name: "Breathtaking Bridal Outfits",
    description:
      "Every bride deserves a gown as unforgettable as her love story. Custom designed with timeless elegance, luxurious fabrics and flawless craftsmanship.",
    price: "From $1,200",
    image: BridalGown,
    gallery: [
      BridalGown1,
    ],
  },
  {
    id: 'Aso-ebi',
    name: "Sophisticated Aso-Ebi Ensembles",
    description:
      "Stand out at every celebration with custom-designed group and individual attire blending traditional heritage with modern cuts.",
    price: "From $350",
    image: AsoEbi,
    gallery: [
      AsoEbi
    ],
  },
  {
    id: 'Custom-wear',
    name: "Exclusive Custom Wears",
    description:
      "Tailor-made luxury garments built specifically to your unique measurements, aesthetic preferences and style.",
    price: "From $500",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
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
      PromDress2
    ],
  },
];

const ServiceBox = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenGallery = (service) => {
    setSelectedService(service);
    setActiveImage(service.image);
  };

  const handleBackToPortfolio = () => {
    setSelectedService(null);
    setActiveImage(null);
    setIsFullscreen(false);
  };

  return (
    <div className="w-full">
      {/* 2x2 Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full my-auto">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => handleOpenGallery(service)}
            className="group relative h-96 sm:h-112 w-full rounded-2xl overflow-hidden border border-[#E5A93C]/40 bg-[#3b1820]/40 backdrop-blur-md shadow-2xl cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:border-[#E5A93C] hover:shadow-2xl hover:shadow-[#E5A93C]/20"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay using theme palette */}
            <div className="absolute inset-0 bg-linear-to-t from-[#2c0d14] via-[#3b1820]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Floating Content Area */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#F5D061] transition-colors duration-300">
                {service.name}
              </h3>

              <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed mb-6 line-clamp-2">
                {service.description}
              </p>

              {/* Bottom Actions Bar */}
              <div className="pt-3 border-t border-[#E5A93C]/30 flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-[#F5D061] font-semibold">
                  {service.price}
                </span>

                {/* View More Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenGallery(service);
                  }}
                  className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] hover:scale-105 text-[#3b1820] text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out shadow-md shadow-black/40 cursor-pointer flex items-center gap-1.5"
                >
                  <Eye size={15} />
                  <span>View More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#3b1820]/95 border border-[#E5A93C]/50 rounded-2xl overflow-y-auto p-4 sm:p-6 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5A93C]/30 mb-4 shrink-0">
              <button
                onClick={handleBackToPortfolio}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] text-[#3b1820] text-xs sm:text-sm font-bold hover:scale-105 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft size={16} />
                <span>Back to Portfolio</span>
              </button>

              <button
                onClick={handleBackToPortfolio}
                className="p-2 rounded-full text-pink-100/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Tight Fitting Image Stage */}
            <div className="relative w-full flex justify-center items-center rounded-xl overflow-hidden border border-[#E5A93C]/40 mb-4 bg-[#2c0d14] group">
              <img
                src={activeImage}
                alt={selectedService.name}
                className="w-auto max-w-full max-h-[55vh] object-contain transition-all duration-300 cursor-zoom-in"
                onClick={() => setIsFullscreen(true)}
              />
              
              <button 
                onClick={() => setIsFullscreen(true)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#F5D061] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90 cursor-pointer"
                title="Expand full screen"
              >
                <Maximize2 size={18} />
              </button>
            </div>

            {/* Service Details */}
            <div className="mb-4 shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {selectedService.name}
              </h3>
              <p className="text-xs sm:text-sm text-pink-100/80 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Scrollable Gallery Thumbnails */}
            <div className="w-full pt-3 border-t border-[#E5A93C]/20 shrink-0">
              <h4 className="text-xs uppercase tracking-widest text-[#F5D061] font-semibold mb-2">
                Click photo to display fully:
              </h4>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#E5A93C]/40">
                {selectedService.gallery.map((imgUrl, subIdx) => (
                  <button
                    key={subIdx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-black/40 ${
                      activeImage === imgUrl
                        ? 'border-[#F5D061] scale-105 shadow-md shadow-[#E5A93C]/40'
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
            </div>

          </div>
        </div>
      )}

      {/* FULLSCREEN OVERLAY */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            onClick={() => setIsFullscreen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X size={28} />
          </button>
          
          <img
            src={activeImage}
            alt="Full display"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceBox;