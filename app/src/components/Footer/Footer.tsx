const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-8 px-6 border-t border-blue-500/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Venkatesh Prabhatha Kana. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
        
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
