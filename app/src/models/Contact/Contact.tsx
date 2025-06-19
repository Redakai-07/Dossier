// const Contact = () => {
//   return (
//     <section id="contact" className="bg-gray-950 text-white py-16 px-4 md:px-12">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-orange-400 mb-8">Contact Me</h2>
//         <p className="text-gray-300 mb-10">
//           Got a question, proposal, or just want to say hi? Fill out the form below or drop me an email.
//         </p>

//         <form
//           className="flex flex-col gap-6 text-left"
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Form submitted (hook up EmailJS to make it work!)");
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <textarea
//             rows={5}
//             placeholder="Your Message"
//             required
//             className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <button
//             type="submit"
//             className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useRef, useState  } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const public_key = import.meta.env.VITE_PUBLIC_KEY;
const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;

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
    <section id="contact" className="bg-gray-950 text-white py-16 px-4 md:px-12">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-400 mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-10">
          Got a question, proposal, or just want to say hi? Fill out the form below!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 text-left">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded text-white font-medium ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700"
              }`}
          >
            {loading ? <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </span> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
