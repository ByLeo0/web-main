'use client';

import { use, useState } from 'react';
import Image from "next/image";
import { Menu, X, ArrowRight, Code, Zap, Globe, Star, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {  
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Código Limpio",
      description: "Desarrollo con las mejores prácticas y estándares modernos"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Alto Rendimiento",
      description: "Optimizado para velocidad y experiencia de usuario"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Diseñado para funcionar en cualquier dispositivo"
    }
  ];

 const carouselItems = [
  {
    name: "Felix L. Quispe Laredo",  
    description:
      "Estudiante de 10mo ciclo de Ingenieria de Sistema de la Universidad Tecnologica del Peru, con conocimientos en desarrollo web y movil, manejo de bases de datos y diseño UI/UX.",
    image: "/images/web-development.jpg",
  },
  {
    name: "Cesar David Calopinto",
    description: "Desarrollamos aplicaciones para iOS y Android",
    image: "/images/mobile-apps.jpg",
  },
  {
    name: "Piero Rodriguez",
    description: "Soluciones completas para tu tienda en línea",
    image: "/images/ecommerce.jpg",
  },
  {
    name: "Sebastian",
    description: "Portafolios impresionantes para mostrar tu trabajo",
    image: "/images/portfolio.jpg",
  },
];

  const projects = [
    { name: "Proyecto Alpha", category: "E-commerce", rating: 5 },
    { name: "Proyecto Beta", category: "SaaS Platform", rating: 5 },
    { name: "Proyecto Gamma", category: "Portfolio", rating: 4 }
  ];

      {/* Hero Section */}
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      ...
    </section>

    {/* Servicios */}
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      ...
    </section>

    {/* Equipo (Carousel) */}
    <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8">
      ...
    </section>

    {/* Proyectos */}
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      ...
    </section>

    {/* Contacto */}
    <section id="contactanos" className="py-20 px-4 sm:px-6 lg:px-8">
      ...
    </section>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo CLSP.png" 
                alt="CLSP Logo"
                width={130}
                height={120}
                className="object-contain"
                priority
              />             
            </div>
            
        {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const section = document.getElementById(item.toLowerCase());
                  section?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.toLowerCase());
                }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['Inicio', 'Servicios', 'Proyectos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">   
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creamos Experiencias
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digitales Increíbles
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Transformamos tus ideas en aplicaciones web modernas, rápidas y escalables
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href='#contactanos'
             className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Contactanos
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              Ver Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            NUESTRO EQUIPO DE TRABAJO
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto"
          opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {carouselItems.map((carouselItems, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 group">
                  <CardContent className="p-4 flex flex-col items-center text-align:justify text-center">
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={carouselItems.image}
                        alt={carouselItems.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {carouselItems.name}
                    </h3>
                    <p className="text-gray-300 text-sm ">{carouselItems.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
        </div>
      </section>
      
        {/* Projects Section */}
        <section
          id="portfolio"
          className="py-20 px-4 sm:px-6 lg:px-8 from-purple-600"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Proyectos Destacados
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-purple-300 text-sm mb-4">
                      {project.category}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* CTA Section */}
      <section 
      id= "contactanos"
      className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy y llevemos tu idea al siguiente nivel
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Contactar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="from-purple-500 text-gray-300 relative">
      
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1: Logo + descripción */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo CLSP.png"
              alt="CLSP Logo"
              width={270}
              height={300}
              className="rounded-md"
            />
          </div>
          <p className="text-sm align-text-image leading-relaxed text-gray-400">
            Somos una empresa especializada en soluciones tecnológicas integrales,
            enfocadas en innovación, eficiencia y calidad para nuestros clientes.
          </p>
        </div>

        {/* Columna 2: Tipos de servicio */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b-2 border-b-emerald-50 inline-block">
            Tipos de servicio
          </h3>
          <ul className="space-y-2 mt-4">
            {[
              "Inicio",
              "Nosotros",
              "Servicios",             
              "Proyectos",
              "Contáctenos",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Datos de contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b-2 border-b-emerald-50 inline-block">
            Datos de contacto
          </h3>
          <ul className="space-y-3 mt-4 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-500" />
              <span>info@clsp.pe</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-500" />
              <span>(+51) 934 707 678</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-green-500 mt-1" />
              <span>
                panamericana sur KM. 14 - Lima, Perú
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CLSP. Todos los derechos reservados.
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/51934707678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
    </div>
  );
}