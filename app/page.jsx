
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <header id="home" className="hero">
        <div className="hero-bg" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/Assets/pexels-yogavidyamandiram-34060996.avif')"}}></div>
        <div className="hero-content">
            <span className="hero-subtitle">Tapovan &middot; Rishikesh &middot; Since the river began</span>
            <h1 className="hero-title">A quiet place to remember <br /><span>who you are.</span></h1>
            <p className="hero-text">Yoga, meditation and Ayurveda retreats in the Himalayan foothills &mdash; unhurried days, sattvic meals, and the quiet company of the Ganga.</p>
            <div className="hero-buttons">
                <a href="#retreats" className="btn-primary">Our Retreats</a>
                <a href="/about" className="btn-outline">About Ashram</a>
            </div>
        </div>
    </header>

    <section id="about" className="about-section">
        <div className="container">
            <div className="about-grid">
                <div className="about-images">
                    <div className="img-wrapper main-img">
                        <img src="/Assets/nath-yogi-P9pUsM38fIY-unsplash.avif" alt="Yoga Master" />
                    </div>
                    <div className="img-wrapper sub-img">
                        <img src="/Assets/rishu-bhosale-ZwuullHS6H4-unsplash.avif" alt="Rishikesh View" />
                    </div>
                </div>
                <div className="about-text">
                    <span className="section-tag">Our Sanctuary</span>
                    <h2 className="section-title">Nestled in the lush green of Tapovan.</h2>
                    <p>Siddharya is a small ashram and retreat designed for travelers seeking depth, not spectacle. Days unfold gently &mdash; a sunrise practice, a slow meal, time by the Ganga, and an evening of stillness.</p>
                    <p>Our teachers come from a lineage rooted here in the Himalayan foothills. We share what we live: a yoga that is honest, simple and quietly transformative.</p>
                    <ul className="about-features">
                        <li><i className="fas fa-check-circle"></i> Experienced & Compassionate Teachers</li>
                        <li><i className="fas fa-check-circle"></i> Traditional Hatha & Ashtanga Yoga</li>
                        <li><i className="fas fa-check-circle"></i> Guided Meditation & Pranayama Sessions</li>
                        <li><i className="fas fa-check-circle"></i> Nourishing Ayurvedic Vegetarian Meals</li>
                    </ul>
                    <a href="#contact" className="btn-secondary">Inquire Now</a>
                </div>
            </div>
        </div>
    </section>

    <section id="retreats" className="retreats-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Retreat Packages</span>
                <h2 className="section-title">Choose your journey</h2>
                <p className="section-desc">Curated 3&ndash;10 day immersions for every level. Choose the journey that calls to you.</p>
            </div>
            
            <div className="retreat-grid">
                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/pexels-yogavidyamandiram-31743025.avif" alt="3 Day Retreat" />
                        <span className="card-badge">3 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>3 Days Inner Inquiry</h3>
                        <p>A short but powerful immersion into the world of yoga and meditation. Perfect for a quick reset.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-sun"></i> Daily Yoga Sessions</li>
                            <li><i className="fas fa-moon"></i> Evening Meditation</li>
                            <li><i className="fas fa-utensils"></i> Sattvic Meals</li>
                        </ul>
                        <a href="/retreats#3days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/akash-choudhary-CTdDooABASA-unsplash.avif" alt="4 Day Retreat" />
                        <span className="card-badge">4 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>4 Days Finding Balance</h3>
                        <p>A balanced getaway combining essential practices with ample time for self-reflection and nature.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-sun"></i> Hatha Yoga Classes</li>
                            <li><i className="fas fa-walking"></i> Local Exploration</li>
                            <li><i className="fas fa-utensils"></i> Sattvic Meals</li>
                        </ul>
                        <a href="/retreats#4days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/pexels-gurukulyogashala-28821003.avif" alt="5 Day Retreat" />
                        <span className="card-badge">5 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>5 Days Letting Go</h3>
                        <p>Deepen your practice and begin the process of letting go of stress and emotional baggage.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-sun"></i> Advanced Asana Classes</li>
                            <li><i className="fas fa-water"></i> Ganga Aarti Experience</li>
                            <li><i className="fas fa-leaf"></i> Nature Walks</li>
                        </ul>
                        <a href="/retreats#5days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/narinder-pal-Vv0oZQ_v48Y-unsplash.avif" alt="6 Day Retreat" />
                        <span className="card-badge">6 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>6 Days Deep Awakening</h3>
                        <p>A transformative experience with deeper focus on pranayama, meditation and philosophy.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-wind"></i> Pranayama Focus</li>
                            <li><i className="fas fa-spa"></i> Sound Healing</li>
                            <li><i className="fas fa-book-open"></i> Philosophy</li>
                        </ul>
                        <a href="/retreats#6days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/pexels-yogavidyamandiram-34513844.avif" alt="7 Day Retreat" />
                        <span className="card-badge">7 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>7 Days Inner Healing</h3>
                        <p>A comprehensive week-long journey to restore your vitality and find lasting mental peace.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-hands-bubbles"></i> Ayurveda Consultations</li>
                            <li><i className="fas fa-mountain"></i> Himalayan Excursions</li>
                            <li><i className="fas fa-om"></i> Mantra Chanting</li>
                        </ul>
                        <a href="/retreats#7days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="retreat-card">
                    <div className="card-img">
                        <img src="/Assets/pexels-yoga-course-india-932671557-20035455.avif" alt="10 Day Retreat" />
                        <span className="card-badge">10 Days</span>
                    </div>
                    <div className="card-content">
                        <h3>10 Days Self-Realization</h3>
                        <p>Our most intensive retreat for those seeking profound transformation and deep spiritual insight.</p>
                        <ul className="card-list">
                            <li><i className="fas fa-brain"></i> Yoga Philosophy</li>
                            <li><i className="fas fa-spa"></i> Detoxification (Shatkarma)</li>
                            <li><i className="fas fa-certificate"></i> Completion Certificate</li>
                        </ul>
                        <a href="/retreats#10days" className="btn-text">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-banner" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Assets/tarun-anand-giri-0QT4DZESKvo-unsplash.avif')"}}>
        <div className="container">
            <h2 className="cta-title">Begin your path</h2>
            <p>Tell us a little about yourself and we'll guide you to the journey that fits &mdash; whether it's three days or ten.</p>
            <a href="/#contact" className="btn-primary btn-lg">Plan My Retreat</a>
        </div>
    </section>

    <section id="gallery" className="gallery-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Visual Journey</span>
                <h2 className="section-title">Life at Siddharya Ashram</h2>
            </div>
            <div className="gallery-grid">
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 18.10.02.avif" alt="Ashram Life" /></div>
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 19.18.38.avif" alt="Yoga Practice" /></div>
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 20.01.30.avif" alt="Meditation" /></div>
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.01.avif" alt="Spiritual Ceremony" /></div>
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.52.avif" alt="Nature Walk" /></div>
                <div className="gallery-item"><img src="/Assets/WhatsApp Image 2026-05-10 at 20.06.33.avif" alt="Healthy Food" /></div>
            </div>
        </div>
    </section>

    <section id="experience" className="experience-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">What you'll experience</span>
                <h2 className="section-title">At the heart of our practice</h2>
                <p className="section-desc">Meditation sits at the centre of everything we do. Around it we weave gentle yoga, sound healing, ice baths, mindful art and guided excursions into the wild beauty of the Himalayan foothills.</p>
            </div>
            
            <div className="experience-content">
                <div className="experience-text">
                    <h3>Small group. Big transformation.</h3>
                    <p>Our ashram provides a holistic approach to well-being, focusing heavily on inner stillness and natural rhythms.</p>
                    <ul className="activity-list">
                        <li><i className="fas fa-om"></i> <strong>Meditation:</strong> The heart of our practice &mdash; guided sittings, silent walks, and mantra to settle the restless mind.</li>
                        <li><i className="fas fa-yin-yang"></i> <strong>Yoga:</strong> Daily Hatha, pranayama and gentle vinyasa in our riverside shala.</li>
                        <li><i className="fas fa-palette"></i> <strong>Rock Painting:</strong> Slow, mindful art on smooth river stones &mdash; a moving meditation.</li>
                        <li><i className="fas fa-snowflake"></i> <strong>Ice Bath:</strong> Cold-water immersion in the Himalayan stream &mdash; courage, breath, clarity.</li>
                        <li><i className="fas fa-hiking"></i> <strong>Excursions:</strong> Guided treks to hidden temples, viewpoints and the secret waterfall.</li>
                    </ul>
                </div>
                <div className="experience-grid">
                    <div className="exp-card">
                        <img src="/Assets/rishu-bhosale-ZwuullHS6H4-unsplash.avif" alt="Lakshman Jhula" />
                        <div className="exp-card-overlay"><h4>Lakshman & Ram Jhula</h4></div>
                    </div>
                    <div className="exp-card">
                        <img src="/Assets/dipti-soni-eVrta3a6ttQ-unsplash.avif" alt="Ganga Aarti" />
                        <div className="exp-card-overlay"><h4>Divine Ganga Aarti</h4></div>
                    </div>
                    <div className="exp-card">
                        <img src="/Assets/planet-volumes-PyiY-tlciEg-unsplash.avif" alt="Secret Waterfall" />
                        <div className="exp-card-overlay"><h4>Secret Waterfall</h4></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="reviews" className="reviews-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Testimonials</span>
                <h2 className="section-title">What Our Guests Say</h2>
            </div>
            <div className="reviews-grid">
                <div className="review-card">
                    <div className="review-stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p>"My experience with Siddharya Yoga Ashram was incredible! The retreat was well organised and included a package with many activities. The teachers are excellent and I feel so much calmer."</p>
                    <div className="reviewer-info">
                        <h4>Aneeta Ji</h4>
                        <span>Yoga Enthusiast</span>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p>"They make every moment feel welcoming for everyone and truly connect you to the culture and customs of Rishikesh, India, and Yoga. The program was a perfect balance."</p>
                    <div className="reviewer-info">
                        <h4>Rohit Sir</h4>
                        <span>Wellness Seeker</span>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p>"The food was good, and the stay was clean and comfortable. It's a great place to explore Rishikesh from. I highly recommend the 5-day retreat for anyone seeking peace."</p>
                    <div className="reviewer-info">
                        <h4>John Doe</h4>
                        <span>Traveler</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" className="faq-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Have Questions?</span>
                <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-container">
                <div className="faq-item">
                    <button className="faq-btn">What should I bring to the retreat? <i className="fas fa-chevron-down"></i></button>
                    <div className="faq-content"><p>Comfortable yoga clothes, a water bottle, personal toiletries, and an open heart. We provide yoga mats and props.</p></div>
                </div>
                <div className="faq-item">
                    <button className="faq-btn">Is prior yoga experience required? <i className="fas fa-chevron-down"></i></button>
                    <div className="faq-content"><p>Not at all! Our retreats are designed for all levels, from complete beginners to advanced practitioners.</p></div>
                </div>
                <div className="faq-item">
                    <button className="faq-btn">What type of food is served? <i className="fas fa-chevron-down"></i></button>
                    <div className="faq-content"><p>We serve 100% vegetarian, sattvic (pure), Ayurvedic meals designed to support your yoga and meditation practice.</p></div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="contact-section">
        <div className="container">
            <div className="contact-grid">
                <div className="contact-info">
                    <h2 className="section-title">Start Your Journey</h2>
                    <p>Ready to experience the transformative power of yoga in Rishikesh? Fill out the form or reach out to us directly.</p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h4>Email Us</h4>
                                <p>namaste@siddharyaashram.com</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-location-dot"></i>
                            <div>
                                <h4>Visit Us</h4>
                                <p>Tapovan, Rishikesh, Uttarakhand, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13770.824982631627!2d78.31505315!3d30.12658875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163a356230f3%3A0x2984ebec3bd78326!2sTapovan%2C%20Rishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1715694200000!5m2!1sen!2sin" width="100%" height="450" style={{border: 0, borderRadius: '20px', marginTop: '4rem', boxShadow: 'var(--shadow-lg)'}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    </section>
    </main>
  );
}
