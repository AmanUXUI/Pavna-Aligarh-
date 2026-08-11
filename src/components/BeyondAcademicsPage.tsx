import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Trophy, 
  Music, 
  Palette, 
  Cpu, 
  Users, 
  HeartHandshake, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface CarouselImage {
  url: string;
  caption: string;
}

interface SectionData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  images: CarouselImage[];
  loremParagraphs: string[];
  keyHighlights: string[];
  imagePosition: 'left' | 'right';
}

interface AutoCarouselProps {
  images: CarouselImage[];
  title: string;
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-lg group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Images with Crossfade */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={img.url}
            alt={`${title} - ${img.caption}`}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Bottom Caption Pill */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <span className="inline-block bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 shadow-xs">
              {img.caption}
            </span>
          </div>
        </div>
      ))}

      {/* Manual Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Dots Indicator */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? 'w-5 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const BeyondAcademicsPage: React.FC = () => {
  const [openSectionIds, setOpenSectionIds] = useState<string[]>(['sports']);

  const toggleSection = (id: string) => {
    setOpenSectionIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenSectionIds(sectionsData.map((s) => s.id));
  };

  const collapseAll = () => {
    setOpenSectionIds([]);
  };

  const sectionsData: SectionData[] = [
    {
      id: 'sports',
      badge: 'Athletic Excellence',
      title: 'Sports & Physical Fitness Program',
      subtitle: 'Building endurance, sportsmanship, and physical agility across diverse sporting disciplines.',
      icon: Trophy,
      imagePosition: 'left', // Section 1: Image Left + Content Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
          caption: 'State-of-the-art Football Turf & Athletics Track'
        },
        {
          url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
          caption: 'Basketball Training & Inter-School Championships'
        },
        {
          url: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
          caption: 'Indoor Badminton & Table Tennis Arenas'
        },
        {
          url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
          caption: 'Olympic-Standard Swimming Coaching'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      keyHighlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Pellentesque habitant morbi tristique senectus et netus.',
        'Vestibulum ante ipsum primis in faucibus orci luctus.',
        'Aenean sollicitudin imperdiet arcu, eget egestas neque.'
      ]
    },
    {
      id: 'performing-arts',
      badge: 'Cultural Expression',
      title: 'Performing Arts, Music & Theatre',
      subtitle: 'Nurturing creative talent, vocal harmony, classical dance forms, and theatrical storytelling.',
      icon: Music,
      imagePosition: 'right', // Section 2: Content Left + Image Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
          caption: 'Annual Musical Gala & Symphony Performance'
        },
        {
          url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
          caption: 'Classical & Contemporary Dance Rehearsals'
        },
        {
          url: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80',
          caption: 'School Drama Club & Stage Production'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
        'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.'
      ],
      keyHighlights: [
        'Curabitur sodales ligula in libero sed dignissim.',
        'Fusce nec tellus sed augue semper porta elit.',
        'Mauris massa vestibulum lacinia arcu eget nulla.',
        'Integer nec odio praesent libero sed cursus ante.'
      ]
    },
    {
      id: 'visual-arts',
      badge: 'Creative Craftsmanship',
      title: 'Visual Arts, Sculpture & Design',
      subtitle: 'Fostering aesthetic imagination, canvas painting, pottery, and contemporary digital design.',
      icon: Palette,
      imagePosition: 'left', // Section 3: Image Left + Content Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
          caption: 'Fine Art Studio & Oil Painting Exhibition'
        },
        {
          url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
          caption: 'Clay Modelling & Pottery Workshop'
        },
        {
          url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
          caption: 'Student Art Gallery & Creative Installations'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
      ],
      keyHighlights: [
        'Vivamus magna justo lacinia eget consectetur sed.',
        'Quisque velit nisi pretium ut lacinia in elementum.',
        'Curabitur aliquet quam id dui posuere blandit.',
        'Proin eget tortor risus praesent sapien massa.'
      ]
    },
    {
      id: 'stem-robotics',
      badge: 'Innovation & Future Tech',
      title: 'Robotics, Coding & STEM Innovation',
      subtitle: 'Empowering problem solvers with artificial intelligence, 3D prototyping, and hands-on robotics.',
      icon: Cpu,
      imagePosition: 'right', // Section 4: Content Left + Image Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
          caption: 'Robotics Assembly & Autonomous Bot Competitions'
        },
        {
          url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
          caption: 'STEM Innovation Lab & Electronics Workshop'
        },
        {
          url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
          caption: 'Coding Hackathons & AI Project Showcase'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        'Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
      ],
      keyHighlights: [
        'Donec sollicitudin molestie malesuada curabitur non nulla.',
        'Pellentesque in ipsum id orci porta dapibus.',
        'Curabitur arcu erat accumsan id imperdiet et.',
        'Vestibulum ac diam sit amet quam vehicula elementum.'
      ]
    },
    {
      id: 'leadership',
      badge: 'Student Governance',
      title: 'Leadership, Debate & Model UN',
      subtitle: 'Cultivating articulate speakers, ethical diplomats, and global student council leaders.',
      icon: Users,
      imagePosition: 'left', // Section 5: Image Left + Content Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
          caption: 'Model United Nations (MUN) General Assembly'
        },
        {
          url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
          caption: 'Inter-House Public Speaking & Debate Championship'
        },
        {
          url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
          caption: 'Student Council Oath Taking Ceremony'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
        'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.'
      ],
      keyHighlights: [
        'Cras ultricies ligula sed magna dictum porta.',
        'Mauris blandit aliquet elit eget tincidunt nibh.',
        'Nulla quis lorem ut libero malesuada feugiat.',
        'Vestibulum ante ipsum primis in faucibus orci.'
      ]
    },
    {
      id: 'community-service',
      badge: 'Social Responsibility',
      title: 'Eco-Clubs & Community Outreach',
      subtitle: 'Instilling compassion, environmental stewardship, and meaningful social welfare initiatives.',
      icon: HeartHandshake,
      imagePosition: 'right', // Section 6: Content Left + Image Right
      images: [
        {
          url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
          caption: 'Annual Plantation Drive & Environmental Awareness'
        },
        {
          url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
          caption: 'Community Relief & Joy of Giving Campaign'
        },
        {
          url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
          caption: 'Student Service Projects in Nearby Villages'
        }
      ],
      loremParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
        'Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
      ],
      keyHighlights: [
        'Quisque velit nisi pretium ut lacinia in elementum.',
        'Vestibulum ante ipsum primis in faucibus orci luctus.',
        'Donec sollicitudin molestie malesuada cras ultricies.',
        'Curabitur aliquet quam id dui posuere blandit.'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* 1. Hero Banner matching website design language */}
      <div className="relative overflow-hidden h-[450px] sm:h-[520px] md:h-[600px] flex items-center bg-[#201A5B] shadow-md mb-12 lg:mb-16">
        {/* Background Image */}
        <img 
          src="https://imgh.in/host/gcvrmj"
          alt="Beyond Academics Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Text Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-400/30 mb-4 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>Co-Curricular & Student Life</span>
            </div>
            <h1 
              className="text-white capitalize"
              style={{
                fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif',
                fontSize: '44px',
                fontWeight: 600,
                lineHeight: '55px',
                textTransform: 'capitalize',
                wordSpacing: '0px'
              }}
            >
              Beyond Academics
            </h1>
            <p 
              className="mt-3 sm:mt-4 text-white font-medium opacity-90"
              style={{
                fontSize: '18px',
                lineHeight: '27px'
              }}
            >
              Empowering well-rounded personalities through athletic mastery, artistic expression, STEM innovation, and global leadership opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Accordion Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Click any section below to expand and explore co-curricular activities.
          </p>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button 
              onClick={expandAll}
              className="text-xs font-bold text-[#201A5B] hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200/60 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button 
              onClick={collapseAll}
              className="text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion Sections List */}
        <div className="space-y-5">
          {sectionsData.map((section, idx) => {
            const Icon = section.icon;
            const isImageLeft = section.imagePosition === 'left';
            const isExpanded = openSectionIds.includes(section.id);

            return (
              <div 
                key={section.id} 
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-blue-300 ring-2 ring-[#201A5B]/10 shadow-md' 
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-5 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#201A5B]/30"
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Icon Container */}
                    <div className={`p-3 rounded-2xl shrink-0 transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#201A5B] text-white shadow-sm' 
                        : 'bg-blue-50 text-[#201A5B] border border-blue-100'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Section Header Text */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-[18px] font-bold text-[#201A5B] tracking-tight leading-[28px]">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand / Collapse Chevron Indicator */}
                  <div className={`p-2 rounded-full transition-all duration-300 shrink-0 ${
                    isExpanded ? 'bg-blue-100 text-[#201A5B] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 md:p-10 border-t border-slate-100 bg-white animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Image Column */}
                      <div 
                        className={`lg:col-span-5 ${
                          isImageLeft ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <AutoCarousel 
                          images={section.images} 
                          title={section.title} 
                        />
                      </div>

                      {/* Content Column */}
                      <div 
                        className={`lg:col-span-7 space-y-5 ${
                          isImageLeft ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {/* Section Title in expanded view */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#201A5B] tracking-tight">
                            {section.title}
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-slate-500 mt-1">
                            {section.subtitle}
                          </p>
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                          {section.loremParagraphs.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>

                        {/* Key Highlights */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A5B] mb-2.5 flex items-center gap-1.5">
                            <span>Key Highlights</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#201A5B]" />
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {section.keyHighlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                <CheckCircle2 className="w-4 h-4 text-[#201A5B] shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
