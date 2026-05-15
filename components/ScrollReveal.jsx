"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.about-grid, .retreat-card, .practice-card, .landmark-card, .gallery-item, .review-card, .contact-grid');
    
    // Initial setup
    revealElements.forEach(el => {
      el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          if(el.classList.contains('retreat-card') || el.classList.contains('practice-card') || el.classList.contains('landmark-card') || el.classList.contains('gallery-item') || el.classList.contains('review-card')) {
            // Find index relative to siblings for staggered delay
            const siblings = Array.from(el.parentElement.children);
            const index = siblings.indexOf(el);
            const delay = (index % 3) * 0.2;
            el.style.transitionDelay = `${delay}s`;
          }
          
          el.classList.add('active');
          // Once revealed, we don't need to observe it anymore
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% visible
    });

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
