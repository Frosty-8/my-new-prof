"use client"
import React, { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion'

const metrics = [
  {
    id: 1,
    value: '2+',
    label: 'Years of Experience',
    description: 'Dedicated to honing my skills and knowledge.',
  },
  {
    id: 2,
    value: '5+',
    label: 'Projects Completed',
    description: 'Dedicated to honing my skills and knowledge.',
  },
  {
    id: 3,
    value: '100+',
    label: 'Total Commits',
    description: 'Dedicated to honing my skills and knowledge.',
  },
]

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C', '#FFD60A', '#8338EC', '#FF006E', '#06D6A0', '#FF9F1C', '#3A86FF', '#F72585', '#8AC926', '#FF70A6', '#2EC4B6']

export const KeyMetrics = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 30,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #1a1a1a 50%, ${color})`;

  return (
    <section
      className='max-w-7xl mx-auto py-16 text-white' // Removed px-4 lg:px-8 for full-screen effect
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
        className='text-6xl font-bold mb-12'
      >
        Key Metrics
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.4, type: 'spring' }}
              className="text-5xl font-bold text-purple-200 mb-2"
            >
              {metric.value}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
              className="text-xl font-semibold mb-2 text-white"
            >
              {metric.label}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
              className="text-gray-400"
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}