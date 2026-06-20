import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface FormState {
  name: string;
  email: string;
  project: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', project: '' };

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
  { name: 'Twitter',   icon: Twitter,      href: '#' },
  { name: 'LinkedIn',  icon: Linkedin,     href: '#' },
  { name: 'Instagram', icon: Instagram,    href: '#' },
  { name: 'TikTok',   icon: TiktokIcon,   href: '#' },
  { name: 'WhatsApp', icon: WhatsappIcon, href: '#' },
];

/* Style commun des champs — border-bottom only (éditorial) */
const inputLineStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(244,241,234,0.12)',
  outline: 'none',
  padding: '0.75rem 0',
  fontFamily: 'var(--font-text)',
  fontSize: '1.05rem',
  color: '#f4f1ea',
  transition: 'border-color 0.2s',
  resize: 'none',
};

export const ContactSection: React.FC = () => {
  const { tokens: t } = useTheme();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange =
    (id: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
    <section id="contact" className="py-24 relative" style={{ background: t.surface }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Header */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0} style={{ marginBottom: '4rem' }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 32, height: 1, background: t.accent, flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: t.accent,
              }}>
                Contact
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#f4f1ea',
              lineHeight: 0.95,
              marginBottom: '1.25rem',
            }}>
              Prêt à lancer<br />votre projet ?
            </h2>
            <p style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontStyle: 'italic',
              color: 'rgba(244,241,234,0.48)',
              lineHeight: 1.55,
            }}>
              Parlez-nous de votre projet. Nous vous répondons sous 24h.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Formulaire */}
        <AnimatedSection>
          <motion.form
            variants={fadeUp}
            custom={0.1}
            onSubmit={handleSubmit}
            style={{ borderTop: `1px solid ${t.borderSubtle}`, paddingTop: '2.5rem' }}
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8" style={{ marginBottom: '2rem' }}>
              {/* Nom */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.58rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,241,234,0.38)',
                  marginBottom: '0.5rem',
                }}>
                  Votre nom
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Jean Dupont"
                  required
                  style={inputLineStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = t.accent)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(244,241,234,0.12)')}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.58rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,241,234,0.38)',
                  marginBottom: '0.5rem',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="jean@entreprise.com"
                  required
                  style={inputLineStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = t.accent)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(244,241,234,0.12)')}
                />
              </div>
            </div>

            {/* Projet */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-title)',
                fontSize: '0.58rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.38)',
                marginBottom: '0.5rem',
              }}>
                Votre projet
              </label>
              <textarea
                value={form.project}
                onChange={handleChange('project')}
                placeholder="Type de projet, fonctionnalités souhaitées, budget estimé..."
                required
                rows={4}
                style={inputLineStyle}
                onFocus={e => (e.currentTarget.style.borderBottomColor = t.accent)}
                onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(244,241,234,0.12)')}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2.5rem',
                fontFamily: 'var(--font-title)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                background: sent ? '#34d399' : error ? '#ef4444' : t.accent,
                color: '#f4f1ea',
                border: 'none',
                cursor: isSubmitting ? 'wait' : 'none',
                transition: 'background 0.3s',
              }}
            >
              {isSubmitting ? (
                <span>Envoi en cours...</span>
              ) : sent ? (
                <span>Message envoyé</span>
              ) : error ? (
                <span>Erreur — réessayer</span>
              ) : (
                <>
                  <span>Envoyer la demande</span>
                  <ArrowRight size={14} />
                </>
              )}
            </motion.button>
          </motion.form>
        </AnimatedSection>

        {/* Réseaux sociaux */}
        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            style={{
              marginTop: '4rem',
              paddingTop: '2.5rem',
              borderTop: `1px solid ${t.borderSubtle}`,
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.58rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.28)',
            }}>
              Ou contactez-nous via
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    border: `1px solid ${t.borderSubtle}`,
                    color: 'rgba(244,241,234,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = t.accent;
                    e.currentTarget.style.borderColor = t.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(244,241,234,0.45)';
                    e.currentTarget.style.borderColor = t.borderSubtle;
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
