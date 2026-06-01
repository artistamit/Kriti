import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const MILESTONES = [
  {
    year: '',
    title: 'Architecture',
    description: 'Studying at CEPT University — learning to see space, structure, and how bodies inhabit the built world.',
    side: 'right',
  },
  {
    year: '2014–2015',
    title: 'Mountaineering Certification',
    description: 'Training in the Himalayas. An encounter with endurance, altitude, and the raw dialogue between body and landscape.',
    side: 'left',
  },
  {
    year: '2016',
    title: 'Parkour Journey Begins',
    description: 'The city becomes a playground. Walls become invitations. A fusion of architectural thinking and physical expression.',
    side: 'right',
  },
  {
    year: '',
    title: 'Movement Exploration',
    description: 'Beyond parkour — into body awareness, creative movement, play, and the curiosity of what a body can discover.',
    side: 'left',
  },
  {
    year: '',
    title: 'Dance & Creative Expression',
    description: 'Movement as art. Dance not as performance, but as a practice of presence, rhythm, and self-discovery.',
    side: 'right',
  },
  {
    year: 'Now',
    title: 'Current Practice',
    description: 'A synthesis of all paths — architecture, mountains, parkour, movement, dance — woven into a living practice.',
    side: 'left',
  },
];

function TimelineItem({ milestone, index }) {
  const [ref, inView] = useInView(0.3);

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
      {/* Left content */}
      <div className={`md:text-right ${milestone.side === 'left' ? '' : 'md:invisible hidden md:block'}`}>
        {milestone.side === 'left' && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {milestone.year && (
              <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">{milestone.year}</span>
            )}
            <h3 className="font-display text-xl md:text-2xl font-semibold mt-1 tracking-tight">{milestone.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{milestone.description}</p>
          </motion.div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/20 z-10"
        />
        {index < MILESTONES.length - 1 && (
          <div className="w-px flex-1 bg-border" />
        )}
      </div>

      {/* Right content */}
      <div className={`${milestone.side === 'right' ? '' : 'md:invisible hidden md:block'}`}>
        {milestone.side === 'right' && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {milestone.year && (
              <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">{milestone.year}</span>
            )}
            <h3 className="font-display text-xl md:text-2xl font-semibold mt-1 tracking-tight">{milestone.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{milestone.description}</p>
          </motion.div>
        )}
      </div>

      {/* Mobile-only: show content directly */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pl-6 border-l-2 border-primary/20"
        >
          <div className="absolute left-6 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[calc(50%+1px)]" />
          {milestone.year && (
            <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">{milestone.year}</span>
          )}
          <h3 className="font-display text-xl font-semibold mt-1 tracking-tight">{milestone.title}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{milestone.description}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default function JourneyTimeline() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="journey" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">The Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 md:mb-28"
        >
          A vertical ascent
        </motion.h2>

        <div className="space-y-16 md:space-y-0">
          {MILESTONES.map((milestone, i) => (
            <TimelineItem key={i} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}