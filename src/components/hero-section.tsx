"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Menu,
  X,
  Code2,
  Database,
  Layers,
  Github,
  Twitter,
  Linkedin,
  ChevronDown,
} from "lucide-react"

const skills = {
  frontend: [
    { 
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "bg-yellow-100 text-yellow-800"
    },
    { 
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "bg-blue-100 text-blue-800"
    },
    { 
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "bg-slate-100 text-slate-800"
    },
    { 
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "bg-cyan-100 text-cyan-800"
    },
    { 
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      color: "bg-pink-100 text-pink-800"
    },
    { 
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "bg-blue-100 text-blue-800"
    },
  ],
  backend: [
    { 
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "bg-green-100 text-green-800"
    },
    { 
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "bg-gray-100 text-gray-800"
    },
    { 
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "bg-blue-100 text-blue-800"
    },
    { 
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "bg-green-100 text-green-800"
    },
    { 
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "bg-orange-100 text-orange-800"
    },
  ],
  others: [
    { 
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "bg-orange-100 text-orange-800"
    },
    { 
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "bg-blue-100 text-blue-800"
    },
    { 
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "bg-purple-100 text-purple-800"
    },
    { 
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      color: "bg-pink-100 text-pink-800"
    },
  ],
}

const projects = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description: "Modern e-commerce platform with Next.js 13"
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Creative portfolio website design"
  },
  {
    title: "Task Management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    description: "Efficient task management solution"
  },
  {
    title: "Social Media App",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Interactive social media platform"
  },
  {
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    description: "Real-time weather tracking dashboard"
  },
  {
    title: "Fitness Tracker",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description: "Personal fitness tracking application"
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="bg-white dark:bg-gray-800 text-black dark:text-white container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Arjun Singh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/Arjun-Mavai" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/arjun-singh-gurjar-333458146/" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 px-4 pt-4 border-t">
                  <Link href="https://github.com" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Tech Stack', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code2 },
    { id: 'backend', name: 'Backend', icon: Database },
  ]

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [...skills.frontend, ...skills.backend, ...skills.others]
    }
    return skills?.[activeCategory as 'frontend' | 'backend' | 'others'] || []
  }

  return (
    <section id="skills" className="bg-white dark:bg-gray-800 text-black dark:text-white py-20 overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </Button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "p-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform",
                  skill.color
                )}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// Define the type for the project
type Project = {
  title: string;
  image: string;
  description: string;
};
function Projects() {
  const columnVariants = {
    animate: {
      y: ["0%", "-50%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  }

  // Split projects into three columns
  const columns: Project[][] = [[], [], []]
  projects.forEach((project, index) => {
    columns[index % 3].push(project)
  })

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 text-black dark:text-white py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="relative h-[600px] overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
              
              <motion.div
                variants={columnVariants}
                animate="animate"
                className="space-y-6"
              >
                {[...column, ...column].map((project, index) => (
                  <motion.div
                    key={`${project.title}-${index}`}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <p  className="text-white/80">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


 

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
  import { toast } from "sonner"
import confetti from 'canvas-confetti'
import { Download, Send, ArrowRight, Mail, User, MessageSquare } from "lucide-react"
 import { useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

function Hero() {

    const router = useRouter()
    const handleDownload = () => {
        window.open('/Arjun_resume.pdf', '_blank')
      }
  return (
    <section className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-primary relative">
              Arjun Singh Gurjar
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer specializing in building exceptional digital experiences
          </motion.p>
          
          <motion.div 
  className="flex flex-col  sm:flex-row gap-4 justify-center items-stretch w-full max-w-md mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>
  <Button 
    asChild 
    size="lg" 
    className="group p-3 flex-1 min-w-[160px]" // flex-1 for equal growth
  >
    <Link 
      href="/Arjun_resume.pdf"  // Direct path from public folder
      target="_blank"           // New tab
      rel="noopener noreferrer" // Security best practice
      download="Arjun_Resume.pdf" // Download filename
      onClick={handleDownload}
    >
      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
      Download Resume
    </Link>
  </Button>
  <Button 
    asChild 
    size="lg" 
    className="group p-3 flex-1 min-w-[160px]" // flex-1 for equal growth
  >
    <Link href="#contact" className="w-full justify-center">
      Hire Me
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Button>
</motion.div>
        </motion.div>
      </div>
    </section>
  )
}


function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      form.reset()
      triggerConfetti()
      setShowThankYou(true)
      toast.success('Message sent successfully!', {
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
          color: 'white',
        },
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-white dark:bg-gray-800 text-black dark:text-white py-20 bg-muted/50">
      <div className="container px-4 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-8 shadow-lg border border-primary/10"
        >
          <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
          <p className="text-muted-foreground text-center mb-8">
            Have a project in mind? Let's work together!
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Your name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="your@email.com" type="email" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea 
                          className="pl-10 min-h-[120px]" 
                          placeholder="Tell me about your project..."
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full group" 
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>

      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You! 🎉</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              I've received your message and will get back to you soon!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push('/')}>
                Back to Home
              </Button>
              <Button variant="outline" onClick={() => setShowThankYou(false)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default function Component() {
  return (
    <>
      <Hero/>
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}