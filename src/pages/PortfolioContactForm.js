// src/PortfolioContactForm.js
import { useState } from "react";

export default function PortfolioContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    subject: "",
    message: "",
    contactMethod: "email",
    howHeard: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // 🔹 REPLACED handleSubmit (make sure this is inside the component)
  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "file") {
        if (value) formDataToSend.append("file", value);
      } else {
        formDataToSend.append(key, value);
      }
    });

    const res = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      body: formDataToSend,
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to submit form");
    }

    // ✅ Show success message
    setSubmitted(true);

    // ✅ Clear validation errors
    setErrors({});

    // ✅ Reset all form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      subject: "",
      message: "",
      contactMethod: "email",
      howHeard: "",
      file: null,
    });
  } catch (err) {
    console.error(err);
    alert(err.message || "Something went wrong");
  }
};


  return (
    <section id="contact" className="mt-16 md:mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold md:text-2xl">
          Contact
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Have a project, idea, or question? Share a few details and I&apos;ll get back to you.
        </p>

        {submitted && (
          <div className="mt-4 mb-4 rounded-lg border border-emerald-600/40 bg-emerald-900/30 px-4 py-3 text-sm text-emerald-200">
            Thank you! Your message has been sent. I&apos;ll get in touch with you shortly.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 md:grid-cols-2"
        >
          {/* Name */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Phone / WhatsApp (optional)
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91XXXXXXXXXX"
            />
          </div>

          {/* Service */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Service you&apos;re interested in
            </label>
            <select
              name="service"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="web">Website / Web App</option>
              <option value="mobile">Mobile App</option>
              <option value="uiux">UI/UX Design</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Budget Range
            </label>
            <select
              name="budget"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget</option>
              <option value="below-25k">Below ₹25,000</option>
              <option value="25-50k">₹25,000 – ₹50,000</option>
              <option value="50-100k">₹50,000 – ₹1,00,000</option>
              <option value="1-5L">₹1,00,000 – ₹5,00,000</option>
              <option value="5L-plus">Above ₹5,00,000</option>
              <option value="not-sure">Not sure / Need guidance</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Timeline
            </label>
            <select
              name="timeline"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select timeline</option>
              <option value="immediately">Immediately</option>
              <option value="1-2-weeks">Within 1–2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          {/* Subject */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project / Collaboration / Question"
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Project Details / Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Tell me about your project, goals, and anything important."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Preferred contact */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Preferred contact method
            </label>
            <select
              name="contactMethod"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.contactMethod}
              onChange={handleChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* How heard */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              How did you hear about me?
            </label>
            <select
              name="howHeard"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={formData.howHeard}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* File upload */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Attach file (optional)
            </label>
            <input
              type="file"
              name="file"
              className="block w-full text-xs text-slate-200 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-slate-950 hover:file:bg-emerald-400"
              onChange={handleChange}
            />
            <p className="mt-1 text-[11px] text-slate-500">
              You can upload requirement documents, references, or designs (PDF, JPG, PNG, etc.).
            </p>
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 flex justify-between items-center">
            <p className="text-[11px] text-slate-500">
              I usually reply within 24–48 hours.
            </p>
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
