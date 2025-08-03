import { useRef, useState  } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const public_key = import.meta.env.VITE_PUBLIC_KEY;
const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const mail_id = import.meta.env.VITE_EMAIL;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim();

    // Basic client-side validation
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await emailjs
      .sendForm(
        service_id,    
        template_id,   
        formRef.current,
        public_key     
      );
      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <Toaster position="top-right" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Got a question, proposal, or just want to say hi? Fill out the form below and I'll get back to you!
          </p>
        </div>

        <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-xl" style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border-secondary)',
          boxShadow: '0 10px 25px var(--shadow-primary)'
        }}>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="px-6 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 placeholder-gray-400"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="px-6 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 placeholder-gray-400"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="px-6 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 placeholder-gray-400 resize-none"
              style={{
                background: 'var(--bg-tertiary)',
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-primary)'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
                loading
                  ? "cursor-not-allowed"
                  : "shadow-lg hover:shadow-xl"
              }`}
              style={{
                background: loading ? 'var(--bg-muted)' : 'var(--gradient-primary)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{mail_id}</p>
          </div>
          
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Location</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Based in India, available for remote work worldwide</p>
          </div>
          
          <div className="flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--bg-tertiary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Response Time</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
