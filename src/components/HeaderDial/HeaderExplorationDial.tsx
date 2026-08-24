import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useExploration } from '../../contexts/ExplorationContext';

const HeaderExplorationDial = () => {
  const { percentage, isFullyExplored, pages, isPageVisited } = useExploration();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // SVG mini dial parameters
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative">
      {/* Mini Dial Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border shadow-sm backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-105 group"
        style={{
          background: 'var(--bg-tertiary)',
          borderColor: isFullyExplored ? 'var(--accent-secondary)' : 'var(--border-primary)',
          color: 'var(--text-primary)',
        }}
        title="Session Exploration Progress"
        aria-label="View exploration progress"
      >
        {/* Circular Mini Gauge */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          <svg className="w-7 h-7 transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              className="text-slate-700/40 dark:text-slate-800"
            />
            <motion.circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={isFullyExplored ? '#2dd4bf' : '#3b82f6'}
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </svg>
          <span className="absolute text-[9px] font-bold">
            {isFullyExplored ? '✓' : `${percentage}%`}
          </span>
        </div>

        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          {isFullyExplored ? '100% Explored' : `${percentage}% Explored`}
        </span>
      </button>

      {/* Popover Dropdown Breakdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="absolute right-0 mt-3 w-72 sm:w-80 rounded-2xl p-4 border shadow-2xl backdrop-blur-2xl z-50"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border-secondary)' }}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isFullyExplored ? 'bg-teal-400' : 'bg-blue-400 animate-ping'}`} />
                  <h4 className="font-bold text-xs tracking-wider uppercase">Dossier Exploration</h4>
                </div>
                <span className="text-[10px] font-mono opacity-60">Resets on Close</span>
              </div>

              {/* Progress Bar */}
              <div className="my-3">
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: 'var(--text-secondary)' }}>Session Progress</span>
                  <span className="font-bold text-blue-400">{percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-1.5 mt-3">
                {pages.map((page) => {
                  const visited = isPageVisited(page.path);
                  return (
                    <div
                      key={page.path}
                      onClick={() => {
                        navigate(page.path);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                        visited
                          ? 'border-teal-500/30 bg-teal-500/5'
                          : 'border-transparent hover:bg-slate-800/30 hover:border-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{page.icon}</span>
                        <div>
                          <span className="text-xs font-medium block leading-tight" style={{ color: 'var(--text-primary)' }}>
                            {page.name}
                          </span>
                          <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                            {page.number}
                          </span>
                        </div>
                      </div>

                      {visited ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-teal-400">
                          <span>Visited</span>
                          <span className="w-4 h-4 rounded-full bg-teal-500/20 flex items-center justify-center text-[10px]">✓</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-blue-400 hover:underline font-medium">
                          Explore ↗
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] mt-3 pt-2 border-t text-center" style={{ borderColor: 'var(--border-secondary)', color: 'var(--text-muted)' }}>
                {isFullyExplored
                  ? '🎉 All sections explored in this session!'
                  : '💡 Visit all 4 pages to complete the exploration!'}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderExplorationDial;
