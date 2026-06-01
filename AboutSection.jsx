import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const PORTRAIT = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/7b41244ba_generated_50ed052c.png';
const MOVEMENT_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/4562f62c0_generated_06ac3c37.png';

export default function AboutSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
              Where structure
              <br />
              meets spontaneity
            </h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Kriti Gupta's story begins in the precise, measured world of architecture — 
                studying at CEPT University, learning to see space as something to be shaped, 
                inhabited, and experienced. It was here that an instinct for understanding how 
                bodies move through structure first took root.
              </p>
              <p>
                By 2014, the mountains called. Mountaineering training and certification opened 
                a new vocabulary — one of endurance, vertical exploration, and the raw encounter 
                between body and landscape. The Himalayas became her second classroom.
              </p>
              <p>
                Then came parkour in 2016 — a discipline that fused her architectural eye with 
                physical expression. The city transformed into a playground; walls became 
                invitations, railings became rhythm. But parkour was only the beginning.
              </p>
              <p>
                What followed was a gradual unravelling — from the precision of vaults and 
                jumps into something more fluid, more curious: a practice of movement that 
                embraced body awareness, creativity, play, and eventually, dance. Not as 
                performance, but as a way of being in the world.
              </p>
            </div>

            {/* Small movement image */}
            <div className="pt-4">
              <img
                src={MOVEMENT_IMG}
                alt="Kriti in fluid dance movement on weathered stone steps"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 lg:pt-24"
          >
            <img
              src={PORTRAIT}
              alt="Portrait of Kriti Gupta"
              className="w-full aspect-[4/5] object-cover"
            />
            <p className="mt-4 font-display text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Movement Practitioner · Architect · Explorer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}