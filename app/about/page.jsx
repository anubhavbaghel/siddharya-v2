
import Link from 'next/link';

export default function About() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
            <h1>About Siddharya</h1>
            <p>Our story, our teachers, and our spiritual philosophy.</p>
        </div>
    </header>

    <section className="team-section">
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">The Vision</span>
                <h2 className="section-title">Meet The Founder</h2>
                <p className="section-desc">At the heart of Siddharya Yoga Ashram is a deep dedication to sharing the authentic teachings of yoga.</p>
            </div>
            <div className="team-grid" style={{gridTemplateColumns: '1fr', maxWidth: '800px', margin: '4rem auto 0'}}>
                <div className="team-member">
                    <img src="/Assets/nath-yogi-P9pUsM38fIY-unsplash.avif" alt="Founder" />
                    <h3>Swami Siddharth Ji</h3>
                    <span>Founder & Spiritual Guide</span>
                    <p style={{color: 'var(--text-light)', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. He has dedicated over 20 years to the practice and dissemination of traditional Yoga and Vedic philosophy.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="philosophy-section">
        <div className="container">
            <div className="philosophy-grid">
                <div className="philosophy-text">
                    <span className="section-tag">Core Principles</span>
                    <h2 className="section-title">Our Focus on Meditation & Healing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros vesti bulum, faucibus urna ac, ultrices est. Quisque aliquet, sapien in rhoncus cursus, nulla mi tempor diam, vitae mollis lorem augue sit amet neque.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus magna velit, ullamcorper id magna eu, euismod sodales ipsum. Vivamus dapibus tortor ut lacus pulvinar, non efficitur magna facilisis.</p>
                    <ul className="activity-list" style={{marginTop: '2rem'}}>
                        <li><i className="fas fa-brain"></i> <strong>Mindfulness:</strong> Being present in every moment.</li>
                        <li><i className="fas fa-heart"></i> <strong>Compassion:</strong> Cultivating love for all beings.</li>
                        <li><i className="fas fa-leaf"></i> <strong>Purity:</strong> Living a sattvic lifestyle aligned with nature.</li>
                    </ul>
                </div>
                <div className="philosophy-image">
                    <div className="img-wrapper" style={{borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'}}>
                        <img src="/Assets/WhatsApp Image 2026-05-10 at 20.01.30.avif" alt="Meditation Philosophy" style={{width: '100%', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team-section" style={{background: 'var(--white)'}}>
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Our Guides</span>
                <h2 className="section-title">Our Instructors</h2>
            </div>
            <div className="team-grid">
                <div className="team-member">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 19.18.38.avif" alt="Yoga Instructor" />
                    <h3>Anjali Sharma</h3>
                    <span>Lead Ashtanga Teacher</span>
                    <p style={{color: 'var(--text-light)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla vel nisi vitae maximus. Duis convallis, arcu non.</p>
                </div>
                <div className="team-member">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.02.40.avif" alt="Meditation Instructor" />
                    <h3>Rahul Kumar</h3>
                    <span>Meditation & Sound Healing</span>
                    <p style={{color: 'var(--text-light)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla vel nisi vitae maximus. Duis convallis, arcu non.</p>
                </div>
                <div className="team-member">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.01.avif" alt="Philosophy Instructor" />
                    <h3>Dr. Meera Desai</h3>
                    <span>Ayurveda & Anatomy</span>
                    <p style={{color: 'var(--text-light)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla vel nisi vitae maximus. Duis convallis, arcu non.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="map-section" style={{padding: '4rem 0 8rem', background: 'var(--bg-color)'}}>
        <div className="container">
            <div className="section-header text-center">
                <span className="section-tag">Location</span>
                <h2 className="section-title">Find Us in Rishikesh</h2>
            </div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13770.824982631627!2d78.31505315!3d30.12658875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163a356230f3%3A0x2984ebec3bd78326!2sTapovan%2C%20Rishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1715694200000!5m2!1sen!2sin" width="100%" height="450" style={{border: 0, borderRadius: '20px', boxShadow: 'var(--shadow-lg)'}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    </section>
    </main>
  );
}
