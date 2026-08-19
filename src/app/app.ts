import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

type SectionId = 'services' | 'industries' | 'approach' | 'technologies' | 'about' | 'contact';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Stormy Point Technologies home"><img class="brand-lockup" src="stormy-point-lockup.png" alt="Stormy Point Technologies" /></a>
      <button class="menu-toggle" type="button" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-controls="primary-nav"><span></span><span></span><span></span><b>Menu</b></button>
      <nav id="primary-nav" class="primary-nav" [class.is-open]="menuOpen()" aria-label="Primary navigation"><a href="#services" [class.is-active]="activeSection() === 'services'" [attr.aria-current]="activeSection() === 'services' ? 'page' : null" (click)="navigateTo('services')">Services</a><a href="#industries" [class.is-active]="activeSection() === 'industries'" [attr.aria-current]="activeSection() === 'industries' ? 'page' : null" (click)="navigateTo('industries')">Industries</a><a href="#approach" [class.is-active]="activeSection() === 'approach'" [attr.aria-current]="activeSection() === 'approach' ? 'page' : null" (click)="navigateTo('approach')">Approach</a><a href="#technologies" [class.is-active]="activeSection() === 'technologies'" [attr.aria-current]="activeSection() === 'technologies' ? 'page' : null" (click)="navigateTo('technologies')">Technologies</a><a href="#about" [class.is-active]="activeSection() === 'about'" [attr.aria-current]="activeSection() === 'about' ? 'page' : null" (click)="navigateTo('about')">About</a><a class="nav-cta" href="#contact" [class.is-active]="activeSection() === 'contact'" [attr.aria-current]="activeSection() === 'contact' ? 'page' : null" (click)="navigateTo('contact')">Start a conversation <span>↗</span></a></nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title"><div class="hero-grid"></div><div class="hero-glow glow-one"></div><div class="hero-glow glow-two"></div><div class="network network-a"></div><div class="network network-b"></div><div class="network network-c"></div>
        <div class="container hero-content"><p class="eyebrow light"><span></span> Intelligence, engineered for impact</p><h1 id="hero-title">You're hired to drive <em>revenue</em>,<br />not enter notes.</h1><p class="hero-copy">An AI-powered sales companion that connects your CRM, customers, people and daily activities—helping sales teams spend less time managing information and more time selling.</p><div class="hero-actions"><a class="button button-primary" href="#services">Explore our services <span>→</span></a><a class="button button-ghost" href="#contact">Talk to an expert <span>↗</span></a></div><div class="hero-footnote"><span class="pulse"></span> Built for ambitious teams navigating meaningful change</div></div><div class="hero-orbit" aria-hidden="true"><i></i><i></i><i></i><b>AI</b></div>
      </section>
      <section class="capability-strip" aria-label="Core capabilities"><div class="container capabilities"><p>From strategy to scale</p><span>AI Strategy</span><span>Automation</span><span>Data Intelligence</span><span>Modern Platforms</span><span>Secure by Design</span></div></section>

      <section id="services" class="section services"><div class="container"><div class="section-heading"><div><p class="eyebrow">01 — Services</p><h2>Intelligence that moves<br />your business forward.</h2></div><p>We combine sharp strategy, thoughtful design, and engineering depth to help you build with confidence.</p></div><div class="services-grid">
        <article class="service-card featured"><span class="card-index">01</span><div class="icon">✦</div><h3>AI Strategy &<br />Automation</h3><p>Turn high-potential opportunities into practical, scalable AI roadmaps.</p><a href="#contact">Discover the path <span>→</span></a></article><article class="service-card"><span class="card-index">02</span><div class="icon">◌</div><h3>Intelligent<br />Applications</h3><p>Design human-centered products powered by useful intelligence.</p><a href="#contact">Build smarter <span>→</span></a></article><article class="service-card"><span class="card-index">03</span><div class="icon">⌁</div><h3>Data &<br />Analytics</h3><p>Connect your data to decisions with clarity, context, and control.</p><a href="#contact">Find signals <span>→</span></a></article><article class="service-card"><span class="card-index">04</span><div class="icon">▣</div><h3>Cloud & Platform<br />Engineering</h3><p>Build resilient foundations that adapt as your business evolves.</p><a href="#contact">Create scale <span>→</span></a></article><article class="service-card"><span class="card-index">05</span><div class="icon">◇</div><h3>Security<br />by Design</h3><p>Embed trust and thoughtful safeguards into every layer.</p><a href="#contact">Protect progress <span>→</span></a></article>
      </div></div></section>

      <section id="industries" class="section industries"><div class="container split-section"><div><p class="eyebrow light">02 — Industries</p><h2>Built for the<br /><em>real world.</em></h2><p class="section-copy">Every industry has its own pressure points. We bring a systems mindset to the work that matters most.</p><a class="text-link" href="#contact">Tell us your challenge <span>→</span></a></div><div class="industry-grid"><article><b>01</b><span>◈</span><h3>Financial<br />Services</h3></article><article><b>02</b><span>✚</span><h3>Healthcare</h3></article><article><b>03</b><span>◫</span><h3>Retail &<br />Commerce</h3></article><article><b>04</b><span>◒</span><h3>Manufacturing</h3></article><article><b>05</b><span>◎</span><h3>Professional<br />Services</h3></article><article class="industry-last"><span>+</span><h3>Your next<br />industry</h3></article></div></div></section>

      <section id="approach" class="section approach"><div class="container"><div class="center-heading"><p class="eyebrow">03 — Our approach</p><h2>Progress is a process.</h2><p>Clear thinking, close collaboration, and momentum at every stage.</p></div><ol class="process-list"><li><span>01</span><i>⌕</i><h3>Discover</h3><p>Understand the opportunity.</p></li><li><span>02</span><i>◎</i><h3>Frame</h3><p>Define the right problem.</p></li><li><span>03</span><i>✦</i><h3>Design</h3><p>Shape the best solution.</p></li><li><span>04</span><i>↗</i><h3>Build</h3><p>Move from concept to reality.</p></li><li><span>05</span><i>◉</i><h3>Refine</h3><p>Learn, improve, and scale.</p></li></ol></div></section>

      <section class="section reasons"><div class="container"><div class="reason-intro"><p class="eyebrow light">Why Stormy Point</p><h2>More signal.<br /><em>Less noise.</em></h2></div><div class="reason-list"><article><span>01</span><h3>Outcome-led</h3><p>Technology serves a purpose: creating meaningful, lasting value.</p></article><article><span>02</span><h3>Designed together</h3><p>Your expertise stays at the center of every decision we make.</p></article><article><span>03</span><h3>Built to endure</h3><p>We create adaptable systems—not one-off experiments.</p></article></div></div></section>

      <section id="technologies" class="section technologies"><div class="container"><div class="section-heading"><div><p class="eyebrow">04 — Technologies</p><h2>Built for every<br />platform and model.</h2></div><p>From mobile apps to cutting-edge AI engines—we build across the full stack, wherever your customers are.</p></div>
        <div class="tech-categories">
          <div class="tech-category">
            <p class="tech-category-label">📱 Platforms</p>
            <div class="tech-pills">
              <span>🍏 iOS</span>
              <span>🤖 Android</span>
              <span>🌐 Web App</span>
              <span>🖥️ Desktop</span>
              <span>🔧 API / Backend</span>
            </div>
          </div>
          <div class="tech-category">
            <p class="tech-category-label">🧠 AI Models &amp; Engines</p>
            <div class="tech-pills">
              <span>✨ GPT-4o</span>
              <span>🪩 Claude</span>
              <span>🔵 Gemini</span>
              <span>💫 Llama</span>
              <span>🛠️ Codex</span>
              <span>💎 Grok</span>
              <span>🤖 Kiro</span>
            </div>
          </div>
          <div class="tech-category">
            <p class="tech-category-label">⚡ Stack &amp; Infrastructure</p>
            <div class="tech-pills">
              <span>📊 Data Platforms</span>
              <span>☁️ Cloud Native</span>
              <span>🔄 Automation</span>
              <span>🛡️ Secure by Design</span>
              <span>📈 Analytics</span>
              <span>🤝 Integrations &amp; CRM</span>
            </div>
          </div>
        </div>
      </div></section>

      <section id="about" class="section about"><div class="container about-grid"><div class="about-brand"><img src="stormy-point-lockup.png" alt="Stormy Point Technologies" /></div><div class="about-copy"><p class="eyebrow">About us</p><h2>We simplify<br />the <em>complex.</em></h2><p>We are a team of technology enthusiasts passionate about turning complex processes into simple, intelligent experiences.</p><p>We believe technology should work for people—not the other way around. That's why we combine technology, AI and thoughtful design to create solutions that help teams spend less time managing complexity and more time focusing on what really matters.</p><a class="text-link" href="#contact">Meet the right challenge <span>→</span></a></div></div><div class="container principles"><article><span>01</span><h3>Meaningful outcomes</h3><p>We focus every solution on a real decision, a real team, and a measurable difference.</p></article><article><span>02</span><h3>Human-centered by design</h3><p>Technology earns trust when it feels clear, useful, and grounded in people's work.</p></article><article><span>03</span><h3>Resilient systems</h3><p>We build foundations that can evolve confidently as your business and technology change.</p></article></div></section>

      <section id="contact" class="contact-section"><div class="container contact-grid"><div><p class="eyebrow light">05 — Contact</p><h2>Let's make the<br /><em>next move</em> matter.</h2><p>Tell us where you are headed. We will help you see what is possible.</p><div class="contact-note"><span>✦</span><p>Great work starts with a clear conversation.</p></div></div><form class="contact-form" (submit)="$event.preventDefault()"><label>Your name<input type="text" name="name" placeholder="Jane Smith" /></label><label>Work email<input type="email" name="email" placeholder="jane@company.com" /></label><label class="full">How can we help?<select name="interest"><option value="">Select an area of interest</option><option>AI strategy & automation</option><option>Intelligent applications</option><option>Data & analytics</option><option>Modern platforms</option></select></label><label class="full">A little context<textarea name="message" rows="3" placeholder="Tell us about your challenge..."></textarea></label><button class="button button-primary form-button" type="submit">Send message <span>→</span></button><p class="form-caption">This form is ready for your future contact workflow.</p></form></div></section>
    </main>
    <footer class="site-footer"><div class="container footer-top"><a class="brand footer-brand" href="#top" aria-label="Stormy Point Technologies home"><img class="brand-lockup" src="stormy-point-lockup.png" alt="Stormy Point Technologies" /></a><p>Designing the intelligent systems that help ambitious organizations move forward.</p><div class="footer-links"><a href="#services">Services</a><a href="#industries">Industries</a><a href="#approach">Approach</a><a href="#technologies">Technologies</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div class="container footer-bottom"><span>© 2026 Stormy Point Technologies</span><a href="#top">Back to top ↑</a></div></footer>
  `,
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal<SectionId>('services');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.activeSection.set(visible.target.id as SectionId);
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0.05, 0.2, 0.45] },
    );
    document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected closeMenu(): void { this.menuOpen.set(false); }
  protected navigateTo(section: SectionId): void { this.activeSection.set(section); this.closeMenu(); }
}
