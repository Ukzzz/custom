import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniform Manufacturing Blog | Tips, Guides & Insights | KBwear",
  description: "Expert articles on uniform manufacturing in Pakistan. Fabric guides, corporate uniform tips, industry insights, and case studies from KBwear — Lahore's leading uniform manufacturer.",
  keywords: "uniform manufacturing blog, uniform tips pakistan, corporate uniform guide, workwear advice, fabric guide pakistan, uniform industry insights, KBwear blog",
  openGraph: {
    title: "Uniform Manufacturing Blog | KBwear Pakistan",
    description: "Expert articles on uniform manufacturing, fabric guides, and industry insights from Pakistan's leading manufacturer.",
    url: "https://www.kb-wear.com/blog",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/blog" },
};

const blogPosts = [
  {
    slug: "how-to-choose-uniform-fabric-pakistan",
    title: "How to Choose the Right Uniform Fabric for Pakistani Weather",
    excerpt: "A comprehensive guide to selecting the best uniform fabrics that balance comfort, durability, and cost for Pakistan's hot summers and mild winters.",
    date: "April 10, 2026",
    category: "Fabric Guide",
    readTime: "6 min read",
  },
  {
    slug: "corporate-uniform-policy-guide-pakistan",
    title: "Complete Guide to Corporate Uniform Policies in Pakistan",
    excerpt: "Everything you need to know about implementing a successful corporate uniform program — from design selection to employee compliance and vendor management.",
    date: "April 6, 2026",
    category: "Corporate",
    readTime: "7 min read",
  },
  {
    slug: "why-choose-local-uniform-manufacturer-lahore",
    title: "5 Reasons to Choose a Local Uniform Manufacturer in Lahore",
    excerpt: "Why sourcing uniforms from a Lahore-based manufacturer like KBwear saves costs, reduces lead times, and delivers better quality than importing or outsourcing.",
    date: "March 28, 2026",
    category: "Industry",
    readTime: "5 min read",
  },
  {
    slug: "kbwear-total-parco-uniform-case-study",
    title: "Case Study: Manufacturing 10,000+ Uniforms for TOTAL PARCO",
    excerpt: "An inside look at how KBwear designed, manufactured, and delivered over 10,000 custom uniforms for one of Pakistan's largest petroleum companies.",
    date: "March 20, 2026",
    category: "Case Study",
    readTime: "8 min read",
  },
];

export default function Blog() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Blog", url: "https://www.kb-wear.com/blog" },
      ]} />
      <section className="blog-section">
        <div className="blog-container">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="section-header">
            <div className="section-label">KBwear Blog</div>
            <h1 className="section-title">Uniform Manufacturing Insights &amp; Guides</h1>
            <p className="section-description">
              Expert articles on uniform fabrics, corporate uniform policies, manufacturing best practices, and industry insights from Pakistan&apos;s leading uniform manufacturer.
            </p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-content">
                  <div className="blog-card-meta">{post.category} · {post.readTime}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-meta" style={{ marginTop: "16px", opacity: 0.7 }}>{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
