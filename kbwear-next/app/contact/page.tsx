"use client";

import { useState, FormEvent } from "react";
import RevealWrapper from "../components/RevealWrapper";
import CountUp from "../components/CountUp";
import Breadcrumbs from "../components/Breadcrumbs";
import { BreadcrumbJsonLd, FAQJsonLd } from "../components/JsonLd";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    uniformType: "",
    quantity: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (selectedFile) {
        // FormSubmit AJAX doesn't support files, so we use a hidden iframe
        const form = e.target as HTMLFormElement;
        
        // Create/get hidden iframe
        let iframe = document.getElementById('formSubmitIframe') as HTMLIFrameElement;
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.id = 'formSubmitIframe';
          iframe.name = 'formSubmitIframe';
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
        }

        // Configure form for traditional submission
        form.target = 'formSubmitIframe';
        form.action = 'https://formsubmit.co/2bebc2069533b119d66289d5d8f70190';
        form.method = 'POST';
        
        // Submit traditionally
        form.submit();

        // Handle success (we assume success since we can't easily read iframe response due to CORS)
        setTimeout(() => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", phone: "", company: "", uniformType: "", quantity: "", message: "" });
          setSelectedFile(null);
          const fileInput = document.getElementById('designUpload') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
          form.target = ''; // Reset target
          setIsSubmitting(false);
        }, 2000);
      } else {
        // Use AJAX for messages without attachments
        const submitData = new FormData();
        submitData.append("name", formData.name);
        submitData.append("email", formData.email);
        submitData.append("phone", formData.phone);
        submitData.append("company", formData.company);
        submitData.append("uniform-type", formData.uniformType);
        submitData.append("quantity-range", formData.quantity);
        submitData.append("message", formData.message);
        submitData.append("_subject", `New Quote Request from ${formData.name}`);
        submitData.append("_template", "table");
        submitData.append("_captcha", "false");

        const res = await fetch("https://formsubmit.co/ajax/2bebc2069533b119d66289d5d8f70190", {
          method: "POST",
          body: submitData,
        });
        
        if (res.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", phone: "", company: "", uniformType: "", quantity: "", message: "" });
          setSelectedFile(null);
          const fileInput = document.getElementById('designUpload') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
        } else {
          setSubmitStatus("error");
        }
        setIsSubmitting(false);
      }
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Contact", url: "https://www.kb-wear.com/contact" },
      ]} />
      <FAQJsonLd faqs={[
        { question: "What types of uniforms does KBwear manufacture?", answer: "KBwear manufactures custom corporate uniforms, industrial workwear, safety uniforms, hospitality attire, and specialized petroleum industry uniforms for companies like TOTAL PARCO and ZIC Petroleum." },
        { question: "What is the minimum order quantity for custom uniforms?", answer: "KBwear handles orders from small batches to large-scale enterprise requirements. Contact us for specific MOQ details based on your uniform type and customization needs." },
        { question: "How long does it take to manufacture custom uniforms?", answer: "Production timelines vary based on order size and complexity. Our typical turnaround is 2-4 weeks for standard orders. We provide exact timelines after design approval." },
        { question: "Does KBwear deliver uniforms nationwide in Pakistan?", answer: "Yes, KBwear provides nationwide delivery across Pakistan with reliable logistics and real-time tracking for all uniform orders." },
        { question: "How can I get a quote for custom uniforms?", answer: "You can request a free quote by emailing info@kb-wear.com or calling +92 309 9431613. We respond within 24 hours with a detailed quotation." },
      ]} />
      <section id="contact" className="contact-section">
        <div className="contact-background">
          <div className="contact-grid-pattern"></div>
          <div className="contact-glow contact-glow-1"></div>
          <div className="contact-glow contact-glow-2"></div>
        </div>

        <div className="contact-container">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <RevealWrapper className="contact-header">
            <h2 className="contact-title">
              Get In Touch With <span className="gradient-text">KBwear</span>
            </h2>
            <p className="contact-subtitle">
              Pakistan&apos;s leading uniform manufacturer. Reach out through any of these channels.
            </p>
          </RevealWrapper>

          <div className="contact-info-grid-modern">
            <RevealWrapper className="info-card-modern" delay={0}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h4>Email Us</h4>
              <a href="mailto:info@kb-wear.com" className="info-link">info@kb-wear.com</a>
              <p className="info-description">Get a response within 24 hours</p>
            </RevealWrapper>
            
            <RevealWrapper className="info-card-modern" delay={200}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/company/kbwear" target="_blank" rel="noopener noreferrer" className="info-link">
                Connect With Us
              </a>
              <p className="info-description">Follow for updates</p>
            </RevealWrapper>

            <RevealWrapper className="info-card-modern" delay={300}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper whatsapp-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/923254004551" target="_blank" rel="noopener noreferrer" className="info-link">
                Chat With Us
              </a>
              <p className="info-description">Quick response via WhatsApp</p>
            </RevealWrapper>
          </div>

          {/* Contact Form */}
          <RevealWrapper className="contact-form-section">
            <div className="contact-form-header">
              <h3>Request a Quote</h3>
              <p>Fill out the form below and we&apos;ll get back to you within 24 hours</p>
            </div>

            {submitStatus === "success" && (
              <div className="form-alert form-alert-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Your message has been sent successfully! We&apos;ll get back to you shortly.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-alert form-alert-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span>Something went wrong. Please try again or contact us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data" noValidate>
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`New Quote Request from ${formData.name}`} />
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@company.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+92 xxx xxxxxxx"
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your company"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="uniformType">Uniform Type</label>
                  <select
                    id="uniformType"
                    name="uniform-type"
                    value={formData.uniformType}
                    onChange={(e) => handleChange("uniformType", e.target.value)}
                  >
                    <option value="">Select uniform type</option>
                    <option value="corporate">Corporate Uniforms</option>
                    <option value="industrial">Industrial Workwear</option>
                    <option value="safety">Safety Uniforms</option>
                    <option value="hospitality">Hospitality Attire</option>
                    <option value="petroleum">Petroleum Industry</option>
                    <option value="school">School Uniforms</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Quantity Range</label>
                  <select
                    id="quantity"
                    name="quantity-range"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                  >
                    <option value="">Select quantity range</option>
                    <option value="1-50">1 – 50 units</option>
                    <option value="51-200">51 – 200 units</option>
                    <option value="201-500">201 – 500 units</option>
                    <option value="501-1000">501 – 1,000 units</option>
                    <option value="1000+">1,000+ units</option>
                  </select>
                </div>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="designUpload">Design Upload (Picture/Logo)</label>
                <input
                  type="file"
                  id="designUpload"
                  name="attachment"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                  className="file-input"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    marginTop: '8px',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className={errors.message ? "error" : ""}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </RevealWrapper>

          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={24} className="counter" />hrs
              </div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={100000} suffix="+" className="counter" />
              </div>
              <div className="stat-label">Uniforms Delivered </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={100} suffix="%" className="counter" />
              </div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
