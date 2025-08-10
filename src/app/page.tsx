
'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const projects = [
  {
    title: 'Vue Pintura',
    description:
      'A project to explore the capability of web technology in image processing through the Pintura library. Pintura offers editing suites fully in-browser.',
    tech: ['Vue', 'TypeScript', 'Express', 'Prisma ORM', 'PostgreSQL'],
    image: '/pintura-vue.png',
    link: 'https://github.com/buckcode16/vue-image-upload-pintura', 
  },
  {
    title: 'Shopify dearyou',
    description:
      'Built a Shopify store with a custom Liquid template, set up automations to sync inventory with Smaregi API.',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
    image: '/dearyou.png',
    link: 'https://dearyoustore.jp/', 
  },
  {
    title: 'Shimoyama corporate site',
    description:
      'Work-in-progress for Shimoyama lifestyle brand. Hosted on Hostinger; exploring domain setup and WordPress configuration.',
    tech: ['WordPress', 'Hostinger', 'DNS'],
    image: '/shimoyamacorp.png',
    link: 'https://shimoyamacorp.co.jp/', 
  },
  {
    title: 'gmaps-api-travel-companion',
    description:
      'First dip in GCP. Travel booking app built with Vue, TypeScript, Express, Axios & Pinia, using MongoDB for storage.',
    tech: ['Vue', 'GCP', 'MongoDB', 'Pinia'],
    image: '/gmap.png',
    link: 'https://github.com/buckcode16/gmaps-api-travel-companion', 
  },
  {
    title: 'HTTP server in Python!',
    description:
      'Completed 8 stages of the CodeCrafters challenge. Key takeaways: string parsing is powerful and omnipresent.',
    tech: ['Python', 'Low-level Networking'],
    image: '/', 
    link: 'https://github.com/buckcode16/codecrafters-http-server-python', 
  },
  {
    title: 'Scholarship Nuxt App',
    description:
      'Experimented with Nuxt.js SSR by building a small scholarship-tracking application.',
    tech: ['Nuxt.js', 'Vue', 'AWS EC2', 'AWS SNS'],
    image: '/nuxt-aws.png',
    link: 'https://github.com/buckcode16/ddac-nuxt-aws', 
  },
]

const sectionsNav = [
  { id: 'heroAbout', label: 'Top' },
  { id: 'skillsProjects', label: 'Skills' },
  { id: 'alterEgo', label: 'Creative' },
  { id: 'contact', label: 'Contact' },
]


const PLACEHOLDER = 'https://placehold.co/300x200'

export default function Home() {
  const [active, setActive] = useState(sectionsNav[0].id)
  const [bgColor, setBgColor] = useState('#151415')
  const [imgErr, setImgErr] = useState({}) 
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id)
            const c = e.target.dataset.bg
            if (c) setBgColor(c)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('section[data-bg]').forEach(sec => obs.observe(sec))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Your Name—Vue, Next.js, TypeScript, Node.js"
        />
      </Head>

      <nav className={styles.dotNav} aria-label="Section navigation">
        {sectionsNav.map(sec => {
          const isActive = sec.id === active
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={styles.navItem}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={styles.navLabel}>{sec.label}</span>
              <span className={styles.navBracket}>
                {isActive ? '[ • ]' : '[   ]'}
              </span>
            </a>
          )
        })}
      </nav>

      <div className={styles.bgOverlay} style={{ backgroundColor: bgColor }} />

      <div className={styles.scrollWrapper}>
        <section id="heroAbout" data-bg="#151415" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.staircase}>
              <div className={styles.step}>
                <h2>Logic</h2>
                <p>Like framing a composition in photography, I set the bounds, watch proportion, and note what is present and what is missing.</p>
                <p>Absence becomes part of the design. I reduce, transpose, or choose a simpler path so the whole still holds.</p>
              </div>

              <div className={styles.step}>
                <h2>and intuition</h2>
                <p>Like laying washes and working by hand, I listen for balance, contrast, and the quiet cue that says enough.</p>
                <p>Where clarity and feeling meet, the piece reads true. Constraints frame the work. Tradeoffs are deliberate.</p>
                <p>The target outcome is a working result with clear intent. It does what is needed now and leaves room to change.</p>
              </div>

              <div className={styles.step}>
                <h2>deliver solutions</h2>
                <p>In software development, I work closely in collaborative effort with stakeholders to deliver results with clear intents. Tools may vary. Principles hold. I learn the next skill the work requires and apply it in deliberate steps.</p>
                <p> As a tech practitioner with creative passion, stewardship keeps me tuned to resonance rather than ornament.</p>
              </div>

              <div className={styles.step}>
                <p>I&apos;m Bucky and I&apos;m open to work. Looking for projects where collaborative efforts and experimentations are imperative.</p>
                <a href="/resume/bkw_resume.pdf" download className={styles.downloadButton}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skillsProjects" data-bg="#151415" className={styles.section}>
          <div className={styles.container}>
            <h2>Skills &amp; Tools</h2>
            <ul className={styles.skillsList}>
              <li>Vue.js &amp; Nuxt.js</li>
              <li>TypeScript &amp; JavaScript</li>
              <li>Node.js &amp; Express</li>
              <li>Prisma &amp; PostgreSQL</li>
              <li>Shopify &amp; Liquid</li>
              <li>GCP &amp; AWS</li>
              <li>Python</li>
              <li>Digital Ocean</li>
              <li>Linux</li>
            </ul>

            <h2>Selected Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map(p => (
                <div key={p.title} className={styles.card}>
                  <a
                    href={p.link || '#'}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repo: ${p.title}`}
                  >
                    <div className={styles.cardMedia}>
                      <Image
                        src={imgErr[p.title]
                          ? PLACEHOLDER
                          : (p.image && p.image !== '/' ? p.image : PLACEHOLDER)
                        }
                        alt={p.title}
                        fill
                        className={styles.cardImage}
                        sizes="(min-width: 900px) 300px, 90vw"
                        onError={() => setImgErr(s => ({ ...s, [p.title]: true }))}
                        priority={p.title === 'Vue Pintura'}
                      />


                    </div>
                    <div className={styles.overlay}>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                      <p>
                        <strong>Tech:</strong> {p.tech.join(', ')}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="alterEgo" data-bg="#151415" className={styles.section}>
          <div className={styles.container}>
            <h2>Alter Ego</h2>
            <div className={styles.alterEgoDescription}>
              <p>
                Here’s a glimpse into my creative endeavor. Selected collaboration with Japanese craft artists.
              </p>
            </div>

            <div className={styles.alterEgoGrid}>
              {Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={idx}
                  className={styles.alterEgoBox}
                  style={{
                    backgroundImage: `url(/crafts/${idx + 1}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  role="img"
                  aria-label={`Craft ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-bg="#151415" className={styles.section}>
          <div className={styles.container}>
            <h2>Contact Me</h2>
            <p>
              Got a project or just want to say hi?{' '}
              <a href="mailto:pakchungwg@gmail.com">pakchungwg@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
