"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4'>
        <motion.div
          initial={{ opacity:1, y:20}}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration: 0.8}}
          viewport={{ once: true }}
          className='grid lg:grid-cols-2 gap-16'>
            <div className="space-y-12">
                <motion.h2
                  initial={{ opacity:0, x:-20}}
                  whileInView={{ opacity:1,x:0 }}
                  transition={{ duration: 0.7,delay:0.2}}
                  className='text-7xl font-bold text-gray-300'>
                    Get in <span className="text-gray-600">Touch</span>
                </motion.h2>

                <motion.div
                  initial={{ opacity:0, x:-20}}
                  whileInView={{ opacity:1,x:0 }}
                  transition={{ duration: 0.6,delay:0.4}}
                  className='glass p-8 rounded-2xl space-y-8'>

                    <div className="space-y-2">
                      <p className="text-lg text-gray-300">Phone</p>
                      <a href="tel: +91 9890170498" 
                      className="text-2xl font-semibold 
                      hover:text-gray-400 transition duration-300 flex items-center gap-2">
                        +91 9890170498
                        <span className="text-gray-500">📱</span>
                      </a>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-lg text-gray-300">Email</p>
                      <a href="mailto:sarthakdongare8@gmail.com" 
                      className="text-2xl font-semibold 
                      hover:text-gray-400 transition duration-300 flex items-center gap-2">
                        Mail me
                        <span className="text-gray-500">✉️</span>
                      </a>
                    </div>

                </motion.div>
            </div>

            <motion.div
              initial={{ opacity:0, x:20}}
              whileInView={{ opacity:1,x:0 }}
              transition={{ duration: 0.6,delay:0.6}}
              className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
            >
              <iframe src="https://www.google.com/maps/place/All+India+Shri+Shivaji+Memorial+Societys/@18.531009,73.8655476,17.75z/data=!4m6!3m5!1s0x3bc2c0f55639f89f:0x22ed3d7c6b61cdf3!8m2!3d18.531246!4d73.8671361!16s%2Fg%2F1th0wtf0?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" 
              width='100%' height='100%' style={{border:0}} allowFullScreen loading='lazy'>

              </iframe>

            </motion.div>

        </motion.div>
    </section>
  )
}
