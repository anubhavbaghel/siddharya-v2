import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <img src="/Assets/logo.avif" alt="Siddharya Logo" />
              <span>Siddharya</span>
            </Link>
            <p>A sacred sanctuary in Rishikesh dedicated to the authentic and traditional teachings of Yoga and Meditation.</p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/about">About Ashram</Link></li>
              <li><Link href="/retreats">Retreat Packages</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Retreats</h4>
            <ul>
              <li><Link href="/retreats#3days">3 Days Inner Inquiry</Link></li>
              <li><Link href="/retreats#4days">4 Days Finding Balance</Link></li>
              <li><Link href="/retreats#5days">5 Days Letting Go</Link></li>
              <li><Link href="/retreats#6days">6 Days Deep Awakening</Link></li>
              <li><Link href="/retreats#7days">7 Days Inner Healing</Link></li>
              <li><Link href="/retreats#10days">10 Days Self-Realization</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-location-dot"></i> Tapovan, Rishikesh, Uttarakhand, India</li>
              <li><i className="fas fa-phone"></i> +91 12345 67890</li>
              <li><i className="fas fa-envelope"></i> namaste@siddharyaashram.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Siddharya Yoga Ashram. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
