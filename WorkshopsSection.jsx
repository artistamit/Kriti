import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MapPin, ArrowRight } from 'lucide-react';

const PARKOUR_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/9e4af3789_generated_67e5ee4c.png';
const WORKSHOP_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/9219f701e_generated_98586510.png';
const DANCE_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/201d64922_generated_1ba899ba.png';
const MOVEMENT_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/fba97cea2_generated_d2f5100c.png';

const WORKSHOPS = [
  {
    title: 'Parkour Training',
    description: 'Learn to see the city differently. Build strength, agility, and confidence through the art of movement over obstacles — for all levels.',
    location: 'Various urban locations',
    image: PARKOUR_IMG,
  },
  {
    title: 'Movement Workshops',
    description: 'Explore body awareness, coordination, and creative movement in guided sessions that blend play, challenge, and mindful practice.',
    location: 'Studios & outdoor spaces',
    image: WORKSHOP_IMG,
  },
  {
    title: 'Dance Exploration',
    description: 'Not about choreography — about finding your own rhythm. Sessions that invite spontaneity, expression, and the joy of moving freely.',
    location: 'Community spaces',
    image: DANCE_IMG,
  },
  {
    title: 'Special Events & Retreats',
    description: 'Immersive multi-day experiences combining movement, nature, and creative exploration. Collaborations with artists, spaces, and communities.',
    location: 'Retreats across India',
    image: MOVEMENT_IMG,
  },
];

function WorkshopCard({ workshop, index }) {
  const [ref, inView] = useInView(0.2);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 group"
    >
      {/* Image */}
      <div className={`overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-card border border-border/50">
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          {workshop.title}
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {workshop.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span>{workshop.location}</span>
        </div>
        <button
          onClick={scrollToContact}
          className="mt-8 inline-flex items-center gap-2 font-display text-sm tracking-wide text-primary hover:gap-3 transition-all group/btn"
        >
          Inquire
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

export default function WorkshopsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="workshops" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">Workshops & Offerings</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 md:mb-24 max-w-2xl"
        >
          The movement lab
        </motion.h2>

        <div className="space-y-2">
          {WORKSHOPS.map((workshop, i) => (
            <WorkshopCard key={workshop.title} workshop={workshop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}