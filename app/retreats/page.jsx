
import Link from 'next/link';

export default function Retreats() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
            <h1>Yoga & Meditation Retreats</h1>
            <p>Immerse yourself in authentic teachings designed to heal, awaken, and transform.</p>
        </div>
    </header>

    <section id="3days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--white)'}}>
        <div className="container">
            <div className="about-grid">
                <div className="retreat-detail-img">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.03.avif" alt="3 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
                <div className="retreat-detail-text">
                    <span className="section-tag">A Quick Reset</span>
                    <h2 className="section-title">3 Days Inner Inquiry</h2>
                    <p>Perfect for those short on time but seeking a profound reset. This retreat introduces you to foundational yoga and meditation practices.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-clock"></i> <strong>Schedule:</strong> Morning Yoga, Afternoon Excursion, Evening Meditation</li>
                        <li><i className="fas fa-utensils"></i> <strong>Meals:</strong> 3 Sattvic Meals a day</li>
                        <li><i className="fas fa-hiking"></i> <strong>Activities:</strong> Ashram Tour, Basic Asana</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
            </div>
        </div>
    </section>
    <section id="4days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--bg-color)'}}>
        <div className="container">
            <div className="about-grid alt-layout">
                <div className="retreat-detail-text">
                    <span className="section-tag">Find Balance</span>
                    <h2 className="section-title">4 Days Finding Balance</h2>
                    <p>A balanced getaway combining essential practices with ample time for self-reflection and nature exploration.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-sun"></i> <strong>Schedule:</strong> Hatha Yoga Classes, Local Exploration</li>
                        <li><i className="fas fa-utensils"></i> <strong>Meals:</strong> 3 Sattvic Meals a day</li>
                        <li><i className="fas fa-walking"></i> <strong>Activities:</strong> Ashram Tour, Nature Walks</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
                <div className="retreat-detail-img">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.07.avif" alt="4 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
            </div>
        </div>
    </section>

    <section id="5days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--white)'}}>
        <div className="container">
            <div className="about-grid">
                <div className="retreat-detail-img">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.05.52.avif" alt="5 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
                <div className="retreat-detail-text">
                    <span className="section-tag">Deepen Your Practice</span>
                    <h2 className="section-title">5 Days Letting Go</h2>
                    <p>Begin the process of releasing physical and mental tension. Includes special excursions and deeper pranayama techniques.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-om"></i> <strong>Highlight:</strong> Daily Sound Healing</li>
                        <li><i className="fas fa-water"></i> <strong>Experience:</strong> Ganga Aarti Visit</li>
                        <li><i className="fas fa-leaf"></i> <strong>Activities:</strong> Nature Walks, Intermediate Yoga</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
            </div>
        </div>
    </section>

    <section id="6days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--bg-color)'}}>
        <div className="container">
            <div className="about-grid alt-layout">
                <div className="retreat-detail-text">
                    <span className="section-tag">Inner Focus</span>
                    <h2 className="section-title">6 Days Deep Awakening</h2>
                    <p>A transformative experience with deeper focus on pranayama, meditation and philosophy.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-wind"></i> <strong>Schedule:</strong> Pranayama Focus</li>
                        <li><i className="fas fa-spa"></i> <strong>Experience:</strong> Sound Healing Sessions</li>
                        <li><i className="fas fa-book-open"></i> <strong>Study:</strong> Introduction to Yoga Philosophy</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
                <div className="retreat-detail-img">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.01.30.avif" alt="6 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
            </div>
        </div>
    </section>

    <section id="7days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--white)'}}>
        <div className="container">
            <div className="about-grid">
                <div className="retreat-detail-img">
                    <img src="/Assets/WhatsApp Image 2026-05-10 at 20.02.40.avif" alt="7 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
                <div className="retreat-detail-text">
                    <span className="section-tag">Restore Vitality</span>
                    <h2 className="section-title">7 Days Inner Healing</h2>
                    <p>A comprehensive week-long journey. This immersive experience is designed to restore your vitality and find lasting mental peace through sustained practice.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-hands-bubbles"></i> <strong>Focus:</strong> Ayurveda Consultations</li>
                        <li><i className="fas fa-mountain"></i> <strong>Excursion:</strong> Himalayan Sunrise Tour</li>
                        <li><i className="fas fa-palette"></i> <strong>Extras:</strong> Rock Painting & Mantra Chanting</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
            </div>
        </div>
    </section>

    <section id="10days" className="retreat-detail-section" style={{padding: '8rem 0', background: 'var(--bg-color)'}}>
        <div className="container">
            <div className="about-grid alt-layout">
                <div className="retreat-detail-text">
                    <span className="section-tag">Profound Transformation</span>
                    <h2 className="section-title">10 Days Self-Realization</h2>
                    <p>Our most intensive and rewarding retreat for those seeking deep spiritual insight, featuring detox practices, philosophy, and advanced meditation.</p>
                    <ul className="activity-list" style={{margin: '2rem 0'}}>
                        <li><i className="fas fa-brain"></i> <strong>Study:</strong> Deep Yoga Philosophy</li>
                        <li><i className="fas fa-spa"></i> <strong>Cleansing:</strong> Shatkarma (Detoxification)</li>
                        <li><i className="fas fa-certificate"></i> <strong>Reward:</strong> Completion Certificate</li>
                    </ul>
                    <a href="/#contact" className="btn-primary">Book This Retreat</a>
                </div>
                <div className="retreat-detail-img">
                    <img src="/Assets/JKS01205.JPG.avif" alt="10 Day Retreat" style={{borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%'}} />
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}
