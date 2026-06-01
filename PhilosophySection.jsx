import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const MOUNTAINS = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/28ccb2928_generated_1e35f030.png';

const THEMES = [
  {
    title: 'Curiosity',
    text: 'Every movement begins with a question — what if I tried this? What would happen if I went further? The practice is not about answers. It is about staying in the question.',
  },
  {
    title: 'Play',
    text: 'Play is not the opposite of seriousness. It is the deepest form of learning. When we play, we discover what no instruction manual could teach.',
  },
  {
    title: 'Awareness',
    text: 'To move well is to feel fully — the surface beneath, the air around, the weight of gravity. Awareness transforms ordinary motion into a conversation with the world.',
  },
  {
    title: 'Exploration',
    text: 'The body is territory that is never fully mapped. There is always a new edge to find, a new pattern to unravel, a new way to relate to the space around us.',
  },
];

export default function PhilosophySection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">Philosophy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 max-w-3xl"
        >
          Movement as self-discovery
        </motion.h2>

        {/* Featured quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-l-2 border-primary pl-8 my-16 md:my-24 max-w-3xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-body italic leading-relaxed text-foreground/80">
            "The body is the first architecture we inhabit. Learning to move within it 
            is learning to live within the world."
          </p>
          <cite className="mt-4 block font-display text-sm tracking-wide text-muted-foreground not-italic">
            — Kriti Gupta
          </cite>
        </motion.blockquote>

        {/* Wide image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 md:mb-28"
        >
          <img
            src={MOUNTAINS}
            alt="Vast Himalayan landscape at golden hour"
            className="w-full aspect-[21/9] object-cover"
          />
        </motion.div>

        {/* Themes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {THEMES.map((theme, i) => (
            <ThemeCard key={theme.title} theme={theme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeCard({ theme, index }) {
  const [ref, inView] = useInView(0.3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-border pt-8"
    >
      <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight">{theme.title}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{theme.text}</p>
    </motion.div>
  );
}