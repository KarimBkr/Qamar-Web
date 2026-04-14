import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, FileText, ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface FormState {
  name: string;
  email: string;
  project: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', project: '' };

const INPUT_FIELDS = [
  { id: 'name' as const, label: 'Votre nom', placeholder: 'Jean Dupont', icon: User, type: 'text' },
  { id: 'email' as const, label: 'Email professionnel', placeholder: 'jean@entreprise.com', icon: Mail, type: 'email' },
] as const;

const inputBaseStyle: React.CSSProperties = {
  background: 'rgba(45,50,80,0.6)',
  border: '1px solid rgba(103,111,157,0.3)',
  color: COLORS.white,
};

const TiktokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.32 6.32 0 0 0 6.25-6.3V8.56a8.28 8.28 0 0 0 4.24 1.3V6.26a4.8 4.8 0 0 1-2.17-.67Z" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 0C5.38 0 0 5.38 0 12.031c0 2.128.552 4.2 1.6 6.02L.159 23.4l5.485-1.439a11.96 11.96 0 0 0 6.387 1.838h.004c6.649 0 12.05-5.38 12.05-12.029C24.08 5.488 18.683 0 12.031 0ZM12.031 21.782a9.965 9.965 0 0 1-5.074-1.385l-.364-.216-3.77.989 1.009-3.674-.237-.378a9.998 9.998 0 0 1-1.528-5.334c0-5.518 4.49-10.007 10.012-10.007 5.518 0 10.012 4.489 10.012 10.007 0 5.517-4.494 10.006-10.012 10.006l-.004-.008Z" />
    <path d="M17.513 14.18c-.3-.15-1.78-.881-2.056-.983-.275-.1-.475-.15-.675.15-.2.3-.775.981-.95 1.182-.175.2-.35.225-.65.075-1.332-.596-2.5-1.583-3.238-2.825-.175-.3-.02-.462.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.626-.925-2.226-.24-.582-.486-.5-.675-.51-.184-.009-.395-.012-.595-.012s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.112 3.226 5.112 4.526.713.313 1.263.501 1.688.638.713.225 1.363.188 1.875.113.576-.088 1.78-.726 2.03-1.426.25-.7.25-1.3.175-1.426-.073-.124-.273-.198-.573-.348Z" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'TikTok', icon: TiktokIcon, href: '#' },
  { name: 'WhatsApp', icon: WhatsappIcon, href: '#' },
];

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (id: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
          subject: 'Nouveau message depuis Qamar Web !',
          from_name: 'Contact Landing Page',
          name: form.name,
          email: form.email,
          message: form.project,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setForm(INITIAL_FORM);
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: COLORS.darkBlue }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,177,122,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
              style={{ color: COLORS.orange, background: 'rgba(249,177,122,0.12)', border: '1px solid rgba(249,177,122,0.25)' }}
            >
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: COLORS.white }}>
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-base" style={{ color: COLORS.lightBlue }}>
              Parlez-nous de votre projet. Nous vous répondons sous 24h.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.form
            variants={fadeUp}
            custom={0.1}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl space-y-5"
            style={{ ...glassStyle, boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}
          >
            {INPUT_FIELDS.map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {field.label}
                </label>
                <div className="relative">
                  <field.icon
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: COLORS.lightBlue }}
                  />
                  <input
                    type={field.type}
                    value={form[field.id]}
                    onChange={handleChange(field.id)}
                    placeholder={field.placeholder}
                    required
                    className="w-full py-3.5 pl-11 pr-4 rounded-xl text-sm outline-none transition-all"
                    style={inputBaseStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = COLORS.orange)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(103,111,157,0.3)')}
                  />
                </div>
              </div>
            ))}

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Décrivez votre projet
              </label>
              <div className="relative">
                <FileText
                  size={16}
                  className="absolute left-4 top-4 pointer-events-none"
                  style={{ color: COLORS.lightBlue }}
                />
                <textarea
                  value={form.project}
                  onChange={handleChange('project')}
                  placeholder="Type de projet, fonctionnalités souhaitées, budget estimé..."
                  required
                  rows={4}
                  className="w-full py-3.5 pl-11 pr-4 rounded-xl text-sm outline-none transition-all resize-none"
                  style={inputBaseStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = COLORS.orange)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(103,111,157,0.3)')}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-wait"
              style={{
                background: sent ? '#34d399' : error ? '#ef4444' : COLORS.orange,
                color: COLORS.darkBlue,
                boxShadow: `0 8px 32px ${sent ? 'rgba(52,211,153,0.35)' : error ? 'rgba(239,68,68,0.35)' : 'rgba(249,177,122,0.4)'}`,
              }}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Envoi en cours...</span>
              ) : sent ? (
                <span>✓ Message envoyé avec succès !</span>
              ) : error ? (
                <span>⚠️ Erreur, veuillez réessayer</span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Envoyer la demande</span>
                  <ArrowRight size={16} />
                </span>
              )}
            </motion.button>
          </motion.form>
        </AnimatedSection>

        {/* Social Links Form Footer */}
        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Ou contactez-nous via
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{
                    background: 'rgba(45,50,80,0.6)',
                    border: '1px solid rgba(103,111,157,0.3)',
                    color: COLORS.white,
                  }}
                  aria-label={`Visiter notre ${social.name}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COLORS.orange;
                    e.currentTarget.style.color = COLORS.orange;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(103,111,157,0.3)';
                    e.currentTarget.style.color = COLORS.white;
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
