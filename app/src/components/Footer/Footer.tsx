const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Venkatesh Prabhatha Kana. All rights reserved.</p>
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
