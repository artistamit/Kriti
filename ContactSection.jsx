import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Message sent! Kriti will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">Contact</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Let's connect
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Whether you're interested in a workshop, a collaboration, or just want to say hello — 
              I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="font-display text-sm tracking-wide text-foreground group-hover:text-primary transition-colors">Instagram</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="font-display text-sm tracking-wide text-foreground group-hover:text-primary transition-colors">YouTube</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="mailto:hello@kritigupta.com"
                className="flex items-center gap-3 group"
              >
                <span className="font-display text-sm tracking-wide text-foreground group-hover:text-primary transition-colors">hello@kritigupta.com</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="border-0 border-b border-border rounded-none bg-transparent px-0 py-3 font-body text-base focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="border-0 border-b border-border rounded-none bg-transparent px-0 py-3 font-body text-base focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Message
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me what's on your mind..."
                rows={5}
                className="border-0 border-b border-border rounded-none bg-transparent px-0 py-3 font-body text-base focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-display text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {sending ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}