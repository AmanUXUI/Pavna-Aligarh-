import React from 'react';

interface HeroProps {
  onSelectStage?: (stageId: string) => void;
  title?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Result Highlights",
  subtitle = "Explore Pavna School's academic excellence, CBSE board examination toppers, stream highlights, and holistic achievements."
}) => {
  return (
    <div className="relative overflow-hidden h-[450px] sm:h-[520px] md:h-[600px] flex items-center bg-[#201A5B] shadow-md">
      {/* Background Image */}
      <img 
        src="https://imgh.in/host/gcvrmj"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />

      {/* Text Container matching layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-2xl">
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
            {title}
          </h1>
          <p 
            className="mt-3 sm:mt-4 text-white font-medium"
            style={{
              fontSize: '18px',
              lineHeight: '27px'
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
