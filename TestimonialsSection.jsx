import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    role: 'Workshop Participant',
    text: "Kriti's sessions are unlike anything I've experienced. She creates a space where movement feels like a conversation — between your body, the ground, and something deeper within.",
  },
  {
    name: 'Rohan Mehta',
    role: 'Parkour Student',
    text: "She doesn't just teach you how to jump or climb. She teaches you how to see — the gap, the line, the possibility. That's changed how I move through the world.",
  },
  {
    name: 'Priya Iyer',
    role: 'Dance Exploration Attendee',
    text: "I came to one session out of curiosity and stayed for six months. There's a gentleness and depth to Kriti's approach that makes you feel safe to explore, fail, and discover.",
  },
];

function TestimonialCard({ testimonial, index }) {
  const [ref, inView] = useInView(0.3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="border-t border-border pt-8"
    >
      <Quote className="w-6 h-6 text-primary/30 mb-6" />
      <p className="text-lg md:text-xl leading-relaxed italic text-foreground/80">
        "{testimonial.text}"
      </p>
      <div className="mt-8">
        <p className="font-display font-semibold text-sm tracking-wide">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">Testimonials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 md:mb-24 max-w-2xl"
        >
          Words from the community
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}