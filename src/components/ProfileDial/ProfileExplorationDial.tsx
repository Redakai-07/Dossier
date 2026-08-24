import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useExploration } from '../../contexts/ExplorationContext';

interface ProfileExplorationDialProps {
  imageSrc: string;
  alt?: string;
  size?: 'mobile' | 'desktop';
}

const ProfileExplorationDial: React.FC<ProfileExplorationDialProps> = ({
  imageSrc,
  alt = 'Venkatesh Prabhatha Kana',
  size = 'desktop',
}) => {
  const { percentage } = useExploration();
  const location = useLocation();
  const [liveScrollRatio, setLiveScrollRatio] = useState(0);

  // Directly track scroll when on Home page for immediate real-time response
  useEffect(() => {
    if (location.pathname !== '/') return;

    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const totalScrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, scrollY / totalScrollable));
      setLiveScrollRatio(ratio);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  // Compute effective progress:
  // On Home page, combines live scroll (0 to 25%) with other explored pages (+25% each)
  const isHomePage = location.pathname === '/';
  const effectivePercentage = isHomePage
    ? Math.max(percentage, Math.round(liveScrollRatio * 25))
    : percentage;

  // Dimensions based on size
  const isMobile = size === 'mobile';
  const imgDimension = isMobile ? 'w-64 h-64 sm:w-80 sm:h-80' : 'w-80 h-80 lg:w-96 lg:h-96';

  // SVG circular geometry with larger radius for clean clearance outside profile boundary
  const radius = 47;
  const circumference = 2 * Math.PI * radius; // ~295.31
  const strokeOffset = circumference * (1 - Math.max(0.02, effectivePercentage / 100));

  const gradientId = isMobile ? 'profileDialGradMobile' : 'profileDialGradDesktop';
  const maskId = isMobile ? 'profileDialMaskMobile' : 'profileDialMaskDesktop';

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Main interactive image container */}
      <motion.div
        className="relative"
        whileHover={{
          scale: 1.03,
          rotateY: 4,
          transition: { duration: 0.3 },
        }}
      >
        {/* SVG Segmented Gauge Dial positioned outside the profile boundary with refined sizing */}
        <svg
          className="absolute -top-7 -left-7 -right-7 -bottom-7 w-[calc(100%+56px)] h-[calc(100%+56px)] pointer-events-none z-20"
          viewBox="0 0 100 100"
          style={{
            transform: 'rotate(-90deg)',
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            {/* Progressive Reveal Mask for the Dial Notches */}
            <mask id={maskId}>
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                style={{
                  transition: 'stroke-dashoffset 0.15s ease-out',
                }}
              />
            </mask>
          </defs>

          {/* 1. Unexplored Subtle Dial (Refined Sleek Notches) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2.8"
            strokeDasharray="2 3"
          />

          {/* 2. Explored Bright Progress Dial (Illuminated Sleek Notches) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="3.2"
            strokeDasharray="2 3"
            mask={`url(#${maskId})`}
          />
        </svg>

        {/* Profile Image */}
        <img
          src={imageSrc}
          alt={alt}
          className={`relative z-10 ${imgDimension} object-cover rounded-full shadow-2xl border-4 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm`}
        />

        {/* Floating Decorative Elements from Original Design */}
        <motion.div
          className="absolute -top-5 -right-5 w-8 h-8 bg-blue-500 rounded-full z-30 shadow-md"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-5 -left-5 w-6 h-6 bg-teal-500 rounded-full z-30 shadow-md"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileExplorationDial;
