"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import project1 from '@/assets/proj5.png'
import project2 from '@/assets/proj6.png'
import project3 from '@/assets/proj7.png'
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion'

const projects = [
  {
    id: 1,
    year: 2023,
    title: 'Customer support chatbot',
    description: 'A customer support chatbot that uses natural language processing to understand and respond to customer queries. It can handle multiple conversations simultaneously, providing instant support and improving customer satisfaction.',
    image: project1
  },
  {
    id: 2,
    year: 2024,
    title: 'Edulite OS',
    description: 'A lightweight, web-based operating system tailored for educational environments. It provides a secure and simplified interface for students and educators, with built-in tools for learning, collaboration, and content management.',
    image: project2
  },
  {
    id: 3,
    year: 2025,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform showcasing a responsive design, secure payment gateway integration, user authentication, product management, and an intuitive shopping cart experience.',
    image: project3
  },
]

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C', '#FFD60A', '#8338EC', '#FF006E', '#06D6A0', '#FF9F1C', '#3A86FF', '#F72585', '#8AC926', '#FF70A6', '#2EC4B6']

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  
  const color = useMotionValue(COLORS_TOP[0])
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [color])
  
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

  return (
    <motion.section 
      style={{
        backgroundImage
      }}
      id='portfolio' 
      className='py-16 text-white'
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-6xl font-bold mb-12">
          Selected <span className="text-gray-400">Projects</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <p className="text-gray-400 text-md">
                  {project.year}
                </p>
                <h3 className={`text-4xl font-semibold group-hover:text-gray-400 transition-colors 
                  ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                  {project.title}
                </h3>
                {selectedProject.id === project.id && (
                  <>
                    <div className="border-b-2 border-gray-200 my-4 w-16"></div>
                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                      {project.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={selectedProject.image.src}
              alt={selectedProject.title}
              className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
              width={600}
              height={350}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}