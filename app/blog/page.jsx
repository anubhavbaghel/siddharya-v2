import Link from 'next/link';

const posts = [
  {
    title: 'How Meditation Becomes a Daily Refuge',
    category: 'Meditation',
    image: '/Assets/WhatsApp Image 2026-05-10 at 20.01.30.avif',
    excerpt: 'A gentle look at how short sittings, breath awareness and silence can become steady companions beyond the retreat.',
    readTime: '5 min read',
  },
  {
    title: 'The Quiet Power of Sound Healing',
    category: 'Sound Healing',
    image: '/Assets/WhatsApp Image 2026-05-10 at 20.06.33.avif',
    excerpt: 'Why resonance, bowls and mantra can help the nervous system settle into a deeper rhythm of rest.',
    readTime: '4 min read',
  },
  {
    title: 'Walking Rishikesh With a Meditative Mind',
    category: 'Rishikesh',
    image: '/Assets/rishu-bhosale-ZwuullHS6H4-unsplash.avif',
    excerpt: 'From Lakshman Jhula to quiet river paths, discover how every step can become part of the practice.',
    readTime: '6 min read',
  },
  {
    title: 'Yoga, Breath and the Himalayan Morning',
    category: 'Yoga',
    image: '/Assets/pexels-yogavidyamandiram-31743025.avif',
    excerpt: 'A simple guide to beginning the day with movement, pranayama and a softer relationship with the body.',
    readTime: '5 min read',
  },
  {
    title: 'Cold Water, Calm Breath',
    category: 'Ice Bath',
    image: '/Assets/planet-volumes-PyiY-tlciEg-unsplash.avif',
    excerpt: 'How cold-water immersion can become a mindful practice of presence, courage and inner steadiness.',
    readTime: '3 min read',
  },
  {
    title: 'Mindful Art on River Stones',
    category: 'Rock Painting',
    image: '/Assets/WhatsApp Image 2026-05-10 at 20.05.52.avif',
    excerpt: 'Rock painting as a slow creative ritual: color, texture and attention returning you to the present moment.',
    readTime: '4 min read',
  },
];

export default function Blog() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main>
      <header className="page-header blog-header">
        <div className="container">
          <span className="section-tag">Siddharya Journal</span>
          <h1>Reflections on yoga, meditation and Rishikesh</h1>
          <p>Gentle writings from the ashram on inner stillness, mindful practice and nature-connected living.</p>
        </div>
      </header>

      <section className="blog-section">
        <div className="container">
          <article className="featured-post">
            <div className="featured-post-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-post-content">
              <span className="blog-category">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="blog-meta">
                <span>{featuredPost.readTime}</span>
                <span>Practice Notes</span>
              </div>
              <Link href="/#contact" className="btn-text">Ask About Retreats <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <div className="blog-grid">
            {otherPosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.readTime}</span>
                    <span>Siddharya</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
