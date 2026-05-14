"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.about-grid, .retreat-card, .gallery-item, .review-card, .contact-grid');
    
    revealElements.forEach(el => {
      el.classList.add('reveal');
    });

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      
      revealElements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
          if(el.classList.contains('retreat-card') || el.classList.contains('gallery-item') || el.classList.contains('review-card')) {
            const delay = (index % 3) * 0.2;
            el.style.transitionDelay = `${delay}s`;
          }
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Add small timeout to ensure DOM is fully rendered before checking bounds
    setTimeout(revealOnScroll, 100);

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [pathname]);

  return null;
}
