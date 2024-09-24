import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react'

export default function Page() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    { id: 1, title: 'Proyecto de Delineación', image: '/placeholder.svg?height=400&width=600', description: 'Diseño detallado de planos arquitectónicos' },
    { id: 2, title: 'Cálculo Estructural', image: '/placeholder.svg?height=400&width=600', description: 'Análisis y cálculo de estructuras complejas' },
    { id: 3, title: 'Modelado BIM', image: '/placeholder.svg?height=400&width=600', description: 'Creación de modelos 3D de edificios' },
    { id: 4, title: 'Renderizado 3D', image: '/placeholder.svg?height=400&width=600', description: 'Visualizaciones fotorrealistas de proyectos' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-500">Tu Nombre</h1>
          <p className="mt-2 text-xl text-yellow-100">Ingeniero • Delineante • Modelador BIM</p>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-yellow-500">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative overflow-hidden rounded-lg"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-4">
                      <h3 className="text-xl font-semibold mb-2 text-yellow-500">{project.title}</h3>
                      <p className="text-yellow-100">{project.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-yellow-500">Habilidades y Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Delineación', 'Cálculo Estructural', 'Modelado BIM', 'Renderizado 3D'].map((skill) => (
                <div key={skill} className="bg-gray-900 p-4 rounded-lg border border-yellow-600 hover:border-yellow-400 transition-colors duration-300">
                  <h3 className="font-semibold mb-2 text-yellow-500">{skill}</h3>
                  <p className="text-sm text-yellow-100">Experiencia en {skill.toLowerCase()} para proyectos de ingeniería y arquitectura.</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-yellow-500">Sobre Mí</h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-600">
              <p className="max-w-2xl text-lg text-yellow-100">
                Soy un ingeniero apasionado por la creación de diseños precisos y visualizaciones impactantes. 
                Con experiencia en delineación, cálculo estructural, modelado BIM y renderizado 3D, 
                ofrezco soluciones integrales para proyectos de ingeniería y arquitectura.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center mt-4 text-yellow-500 hover:text-yellow-300"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Contáctame <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-yellow-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">Contacto</h2>
            <p className="text-yellow-100">correo@ejemplo.com</p>
            <p className="text-yellow-100">+34 123 456 789</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-500 hover:text-yellow-300 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-300 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-300 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
