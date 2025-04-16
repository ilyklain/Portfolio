import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('technologies')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const techCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", experience: "Experienced" },
        { name: "CSS", experience: "Experienced" },
        { name: "JavaScript", experience: "Experienced" },
        { name: "Svelte", experience: "Experienced" },
        { name: "Astro", experience: "Learning" },
        { name: "TypeScript", experience: "Experienced" },
        { name: "React", experience: "Experienced" },
        { name: "React Native", experience: "Experienced" },
        { name: "Next.js", experience: "Experienced" },
        { name: "TailwindCSS", experience: "Master" },
        { name: "Vue.js", experience: "Master" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", experience: "Experienced" },
        { name: "Python", experience: "Learning" },
        { name: "C++", experience: "Learning" },
        { name: "SQL", experience: "Learning" },
        { name: "Express", experience: "Experienced" },
        { name: "MongoDB", experience: "Experienced" },
        { name: "PostgreSQL", experience: "Experienced" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", experience: "Experienced" },
        { name: "AWS", experience: "Experienced" },
        { name: "CI/CD", experience: "Experienced" },
        { name: "Git", experience: "Experienced" }
      ]
    },

    

    {
      title: "Tools",
      skills: [
        { name: "Figma", experience: "Experienced" },
        { name: "VS Code", experience: "Experienced" },
        { name: "Postman", experience: "Experienced" },
        { name: "Jest", experience: "Experienced" },
        { name: "Trae", experience: "Master" }
      ]
    }

    
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  }

  const skillVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10
      }
    }
  }

  return (
    <section id="technologies" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-amber-500"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={titleVariants}
        >
          Technologies
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {techCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-red-900/30"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(239, 68, 68, 0.5)",
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-red-500 text-center"
                whileHover={{ color: "#F59E0B" }}
                transition={{ duration: 0.3 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex items-center space-x-3"
                    custom={skillIndex}
                    variants={skillVariants}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ x: 8, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <motion.div 
                      className="text-red-500"
                      whileHover={{ 
                        color: "#F59E0B",
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-gray-300"
                        whileHover={{ color: "#FFFFFF" }}
                      >
                        {skill.name}
                      </motion.p>
                      <motion.p 
                        className="text-xs text-gray-500"
                        whileHover={{ color: "#9CA3AF" }}
                      >
                        {skill.experience}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies