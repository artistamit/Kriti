import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const GALLERY_IMAGES = [
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/2709ddfbf_generated_018165ec.png', alt: 'Dynamic movement against concrete architecture', span: 'row-span-2' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/28ccb2928_generated_1e35f030.png', alt: 'Mountain landscape exploration', span: '' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/57cc0228d_generated_cf9d009c.png', alt: 'Close-up detail of climbing rope texture', span: '' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/4562f62c0_generated_06ac3c37.png', alt: 'Dance movement on stone steps', span: 'row-span-2' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/fba97cea2_generated_d2f5100c.png', alt: 'Movement practice on rooftop', span: '' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/9e4af3789_generated_67e5ee4c.png', alt: 'Parkour leap between structures', span: '' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/201d64922_generated_1ba899ba.png', alt: 'Expressive dance in open field', span: '' },
  { src: 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/9219f701e_generated_98586510.png', alt: 'Movement workshop in progress', span: '' },
];

function GalleryItem({ image, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`overflow-hidden group ${image.span}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
}

export default function GallerySection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="gallery" className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">Gallery of Form</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 md:mb-24"
        >
          Visual language
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[260px]">
          {GALLERY_IMAGES.map((image, i) => (
            <GalleryItem key={i} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}