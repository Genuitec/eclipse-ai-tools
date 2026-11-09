import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const PRODUCTS = [
  {
    name: 'Inline Diff for Eclipse',
    badge: 'Free',
    icon: 'img/changes_256-rounded.png',
    blurb:
      'A true inline diff for Eclipse, at last: in the Compare editor and in ' +
      'every text editor. Read changes top to bottom, not side to side.',
    docs: '/inline-diff/',
    install: '/inline-diff/install/installation',
  },
  {
    name: 'ChangeReview',
    badge: 'Early Access',
    icon: 'img/changereview.svg',
    blurb:
      "Review GitHub Copilot's agent changes before you keep them. " +
      'Builds on Inline Diff.',
    docs: '/changereview/',
    install: '/changereview/installation',
  },
];

function ProductCard({product}) {
  return (
    <div className={styles.card}>
      <img src={useBaseUrl(product.icon)} alt="" width="72" height="72" />
      <h2 className={styles.cardTitle}>
        {product.name} <span className={styles.badge}>{product.badge}</span>
      </h2>
      <p>{product.blurb}</p>
      <div className={styles.cardLinks}>
        <Link className="button button--primary" to={product.docs}>
          Documentation
        </Link>
        <Link className="button button--secondary" to={product.install}>
          Install
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Eclipse AI Tools"
      description="Documentation and community for Inline Diff for Eclipse and ChangeReview.">
      <main className="container">
        <header className={styles.heroBanner}>
          <h1>Eclipse AI Tools by Genuitec</h1>
          <p className={styles.tagline}>
            See every change, whoever or whatever made it.
          </p>
        </header>
        <div className={styles.cards}>
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
        <section className={styles.community}>
          <p>
            Questions, bugs, or ideas? Join the{' '}
            <Link to="https://github.com/Genuitec/eclipse-ai-tools/discussions">
              Community Forum
            </Link>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}
