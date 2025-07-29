const linkedIn = import.meta.env.VITE_LINKEDIN;
const gitHub = import.meta.env.VITE_GITHUB;
const mail_id = import.meta.env.VITE_EMAIL;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-12 px-6 border-t border-blue-500/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-8 left-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-8 right-10 w-32 h-32 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border border-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Venkatesh Kana
              </h3>
              <p className="text-xs text-gray-500">Full-Stack Developer</p>
            </div>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 rounded-lg transition-all duration-300 hover:scale-110 hover:border-blue-400/40"
              aria-label="GitHub"
            >
              <i className="devicon-github-original text-lg"></i>
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 rounded-lg transition-all duration-300 hover:scale-110 hover:border-blue-400/40"
              aria-label="LinkedIn"
            >
              <i className="devicon-linkedin-plain text-lg"></i>
            </a>
            <a
              href={`mailto:${mail_id}`}
              className="p-2 bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 rounded-lg transition-all duration-300 hover:scale-110 hover:border-blue-400/40"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-500/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} Venkatesh Prabhatha Kana. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Available for hire</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="devicon-react-original text-blue-400"></i>
                <span className="text-xs text-gray-500">Built with React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
