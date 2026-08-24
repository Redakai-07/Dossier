import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NextChapterProps {
  nextPage: {
    chapterNumber: string;
    title: string;
    description: string;
    path: string;
    badgeText?: string;
  };
  prevPage?: {
    title: string;
    path: string;
  };
}

const NextChapter = ({ nextPage, prevPage }: NextChapterProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 pb-16 pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        {prevPage ? (
          <button
            onClick={() => navigate(prevPage.path)}
            className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group cursor-pointer hover:scale-105"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span
              className="p-2 rounded-lg border transition-colors group-hover:border-blue-400 group-hover:text-blue-400"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-secondary)',
              }}
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            <span>Previous: <strong className="group-hover:text-blue-400 font-semibold">{prevPage.title}</strong></span>
          </button>
        ) : <div />}

        {/* <span
          className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border"
          style={{
            background: 'var(--bg-tertiary)',
            borderColor: 'var(--border-primary)',
            color: 'var(--accent-secondary)'
          }}
        >
          Dossier Continuous Journey
        </span> */}
      </div>

      {/* Main Next Chapter Card */}
      <motion.div
        whileHover={{ scale: 1.015, y: -4 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => navigate(nextPage.path)}
        className="relative group cursor-pointer overflow-hidden rounded-3xl p-8 md:p-12 border shadow-2xl transition-all duration-500"
        style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border-primary)',
        }}
      >
        {/* Animated ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-teal-500/10 to-indigo-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30 text-blue-400">
                {nextPage.badgeText || "NEXT CHAPTER"}
              </span>
              <span className="text-xs font-mono tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {nextPage.chapterNumber}
              </span>
            </div>

            <h3
              className="text-2xl md:text-4xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-teal-300 group-hover:to-indigo-400 transition-all duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              {nextPage.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {nextPage.description}
            </p>
          </div>

          {/* Action CTA Button on Right */}
          <div className="flex items-center gap-4 self-end md:self-center">
            <span
              className="hidden sm:inline-block text-sm font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1"
              style={{ color: 'var(--accent-primary)' }}
            >
              Explore Section
            </span>
            <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:shadow-blue-500/40 group-hover:scale-105">
              {/* Background gradient shift on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Arrow Icon with smooth horizontal glide */}
              <svg
                className="relative z-10 w-6 h-6 transform transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom accent progress stripe */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 group-hover:w-full transition-all duration-700 ease-out" />
      </motion.div>
    </div>
  );
};

export default NextChapter;
