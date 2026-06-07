import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();

    // ⛔ Rate limit (30 sec)
    if (now - lastSentTime < 30000) {
      alert("Please wait before sending another message.");
      return;
    }

    const formData = new FormData(form.current);

    const name = formData.get("name")?.trim();
    const phone = formData.get("phone")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    const botcheck = formData.get("botcheck");

    // 🤖 Honeypot
    if (botcheck) {
      alert("Spam detected!");
      return;
    }

    // ✅ Validation
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      alert("Enter a valid name");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (!message || message.length < 10) {
      alert("Message must be at least 10 characters");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
        setLastSentTime(now);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/50 blur-3xl"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg,#000 1px,transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">
        {/* LEFT */}
        <div className="max-w-lg">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            Let's Build
            <br />
            Something Amazing 🚀
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Whether it's a project, internship opportunity, collaboration, or
            just a quick chat about tech, feel free to reach out.
          </p>

          {/* Social */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://m.facebook.com/subham.saha.935782/"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm hover:bg-blue-500 hover:text-white hover:scale-110
                       transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://instagram.com/subhsa__"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm hover:bg-pink-500 hover:text-white hover:scale-110
                       transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="mailto:subham42cse@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm hover:bg-red-500 hover:text-white hover:scale-110
                       transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full max-w-[380px] rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Send Message
          </h3>

          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            {/* Honeypot */}
            <input
              type="text"
              name="botcheck"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            <textarea
              name="message"
              rows="3"
              placeholder="Message..."
              className="w-full resize-none rounded-xl border px-4 py-3"
              required
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
