'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, Star, Users, Zap, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    name: 'Coiffure VIP Adulte',
    description: 'Coiffure professionnelle complète pour hommes avec traitement complet',
    duration: '45 min',
    price: '4,000F',
    image: '/image/massage/coiffure.png',
    popular: true
  },
  {
    name: 'Coiffure Enfants',
    description: 'Coupe de cheveux adaptée aux enfants dans un environnement accueillant',
    duration: '30 min',
    price: '1,500F',
    image: '/image/massage/coiffure enfant.png',
    popular: false
  },
  {
    name: 'Massage VIP Complet',
    description: 'Massage VIP avec tout nécessaire et complet (une heure 20mns)',
    duration: '80 min',
    price: '60,000F',
    image: '/image/massage/massage vip.png',
    popular: true
  },
  {
    name: 'Massage aux Pierres Chaudes',
    description: 'Massage relaxant avec pierres chaudes pour une détente profonde',
    duration: '60 min',
    price: '30,000F',
    image: '/image/massage/massage piere chaud .png',
    popular: true
  },
  {
    name: 'Épilation Complète du Corps',
    description: 'Épilation complète du corps à la cire professionnelle',
    duration: '90 min',
    price: '30,000F',
    image: '/image/massage/epillation.png',
    popular: false
  },
  {
    name: 'Soins de Visage Complet',
    description: 'Soin de visage avec traitement complet du masque (Facial)',
    duration: '60 min',
    price: '15,000F',
    image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    popular: true
  }
];

const features = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'Équipe de professionnels certifiés avec plus de 10 ans d\'expérience'
  },
  {
    icon: Clock,
    title: 'Flexibilité',
    description: 'Horaires étendus et rendez-vous disponibles 7j/7'
  },
  {
    icon: Users,
    title: 'Personnalisé',
    description: 'Chaque soin adapté à vos besoins spécifiques'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Techniques modernes et équipements haut de gamme'
  }
];

export default function MassageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fallback pour s'assurer que le contenu devient visible
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Réduit le threshold pour mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="massage" className="py-24 bg-gradient-to-br from-white via-gray-50 to-[var(--favourite-burgundy)]/5 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full favourite-luxury-gradient-radial"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--favourite-gold)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[var(--favourite-burgundy)] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--favourite-gold)]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-[var(--favourite-burgundy)]/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-[var(--favourite-burgundy)]" />
            <span className="text-[var(--favourite-burgundy)] font-medium">Services Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair favourite-burgundy mb-6 luxury-text-glow">
            FAVOURITE <span className="text-[var(--favourite-gold)]">BEAUTY SPA</span>
            <span className="sr-only"> - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez l'art de la beauté et du bien-être dans notre salon d'exception.
            Nos coiffeurs professionnels et thérapeutes certifiés vous offrent des services
            de coiffure homme, massage, épilation et soins du visage de qualité supérieure.
          </p>
        </div>

        {/* Enhanced Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${200 + index * 100}ms`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full favourite-gradient mb-6">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Modern Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-0 bg-white rounded-3xl overflow-hidden shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${400 + index * 150}ms`}}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {service.popular && (
                  <Badge className="absolute top-4 left-4 bg-[var(--favourite-burgundy)] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                )}

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-[var(--favourite-burgundy)] font-bold text-sm">{service.price}</span>
                </div>
              </div>

              <CardHeader className="p-6">
                <div className="mb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock size={16} className="mr-2 text-[var(--favourite-burgundy)]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <CardDescription className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </CardDescription>

                {/* Modern Service Features */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Heart className="w-4 h-4 mr-1 text-[var(--favourite-burgundy)]" />
                      <span>Bien-être</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-4 h-4 mr-1 text-[var(--favourite-burgundy)]" />
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-[var(--favourite-burgundy)] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Réserver
                  </button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="favourite-luxury-gradient-dark rounded-3xl p-12 text-white luxury-shadow-dark relative overflow-hidden group">
            {/* Enhanced Luxury overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--favourite-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Floating Elements */}
            <div className="absolute top-6 right-6">
              <Sparkles className="w-8 h-8 text-[var(--favourite-gold)] animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-6">
              <Heart className="w-6 h-6 text-[var(--favourite-gold)] animate-pulse" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-playfair mb-6 luxury-text-shadow">
                Réservez Votre <span className="text-[var(--favourite-gold)]">Moment</span> de Détente
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Contactez-nous dès maintenant pour personnaliser votre expérience bien-être
                et découvrir nos offres exclusives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/22785463056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[var(--favourite-burgundy)] px-8 py-3 rounded-lg font-semibold luxury-shadow"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+22785463056"
                  className="inline-block luxury-backdrop border border-white/30 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Appeler Maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}