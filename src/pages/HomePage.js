import PortfolioContactForm from "./PortfolioContactForm";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold tracking-tight">
            <span className="text-emerald-400">&lt;</span>
            <span className="mx-1">Shashi Bilgundi</span>
            <span className="text-emerald-400">/&gt;</span>
          </div>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main layout */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-12">
        {/* Hero Section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-center">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400">
              Portfolio
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-emerald-400">Shashi Bilgundi</span>.
              <br />
              <span className="text-slate-200">
                I build practical web apps for real businesses.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-sm text-slate-400 md:text-base">
              I&apos;m a full-stack developer and engineer who turns Excel sheets,
              WhatsApp workflows, and manual processes into clear, easy-to-use
              web applications. I focus on fast, responsive, and maintainable
              solutions for real estate, power sector and education projects.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-emerald-400 hover:text-emerald-400"
              >
                Contact Me
              </a>
              <a
                href="/UmeshaUS-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-xs font-semibold text-slate-100 transition-colors hover:border-emerald-400 hover:text-emerald-400"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1">
                  ✅ Open to freelance &amp; side projects
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1">
                  🌍 Based in Bengaluru, India
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Shashikant-S-Bilgundi"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shashikant-s-bilgundi-b22246279/"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/ShashiBilgundi"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right – glow card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-16 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Snapshot
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Experience</span>
                  <span className="font-semibold text-emerald-400">
                    1.5+ Years (Web)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Primary Stack</span>
                  <span className="font-semibold">
                    React / Node.js / MongoDB
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Projects Completed</span>
                  <span className="font-semibold">10+ Web Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Domains</span>
                  <span className="font-semibold">
                    Full-Stack Web Developer
                  </span>
                </div>
              </div>
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              <p className="mt-4 text-xs text-slate-400">
                I enjoy understanding real-world processes in detail and then
                designing simple, reliable tools that teams actually enjoy using
                every day.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats strip */}
        <section className="mt-10 md:mt-12">
          <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-xs md:grid-cols-4 md:text-sm">
            <div className="flex flex-col border-slate-800 pr-2 md:border-r">
              <span className="text-slate-400">Response Time</span>
              <span className="font-semibold text-emerald-400">
                24 – 48 hours
              </span>
            </div>
            <div className="flex flex-col border-slate-800 pr-2 md:border-r">
              <span className="text-slate-400">Time Zones</span>
              <span className="font-semibold text-slate-100">
                IST • Flexible overlap
              </span>
            </div>
            <div className="flex flex-col border-slate-800 pr-2 md:border-r">
              <span className="text-slate-400">Preferred Projects</span>
              <span className="font-semibold text-slate-100">
                CRMs, Dashboards, Internal Tools
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400">Collaboration</span>
              <span className="font-semibold text-slate-100">
                Remote • GitHub • Zoom/Meet
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">About Me</h2>
          <div className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            <p>
                I’m a MERN Stack developer focused on building fast, clean, and practical web applications. I work across the full stack—MongoDB, Express, React, and Node.js—to create solutions that are simple to use and easy to maintain.
            </p>
            <p className="mt-3">
                I’ve developed dashboards, CRMs, internal tools, and automation systems for real estate, engineering, and education. From designing APIs and databases to building responsive UIs, I ensure every part of the project works smoothly together.
            </p>
            <p className="mt-3">
                With an engineering mindset, I focus on process, reliability, and real user needs. My goal is always to build tools that reduce effort, eliminate manual work, and deliver a clean, efficient user experience.
            </p>
        </div>

        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
          <p className="mt-2 text-sm text-slate-400">
            Technologies and tools I work with regularly:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript (ES6+)",
              "React Router",
              "Tailwind CSS",
              "Bootstrap",
              "Node.js",
              "Express",
              "MongoDB",
              "REST APIs",
              "Axios",
              "Formik + Yup",
              "HTML5 & CSS3",
              "Responsive Design",
              
              "Google Apps Script",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section id="skills" className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">Tools & Software</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["VS Code","ChatGPT","Postman","MongoDB Compass","Base44","BlackBoxAI","Vite","Git & GitHub","Vercel","Thunder Client","AWS (EC2 / S3 / Lambda)"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience / Timeline */}
        <section id="experience" className="mt-16 md:mt-24">
  <h2 className="text-xl font-semibold md:text-2xl">Experience</h2>
  <p className="mt-2 text-sm text-slate-400">
    A quick overview of my experience as a MERN stack developer.
  </p>

  <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
    {/* Timeline */}
    <div className="space-y-4 text-sm">
      <div className="relative border-l border-slate-800 pl-4">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-emerald-400" />
        <div className="text-xs uppercase tracking-wide text-slate-400">
          2023 – Present
        </div>
        <div className="font-semibold text-slate-100">
          MERN Stack Developer · Freelance / Personal Projects
        </div>
        <p className="mt-1 text-slate-400">
          Designing and building end-to-end web applications using MongoDB, 
          Express, React, and Node.js. Worked on CRMs, dashboards, internal tools,
          and small products with authentication, REST APIs, and responsive UIs.
        </p>
      </div>

      <div className="relative border-l border-slate-800 pl-4">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-emerald-400" />
        <div className="text-xs uppercase tracking-wide text-slate-400">
          2021 – 2023
        </div>
        <div className="font-semibold text-slate-100">
          Web Developer · Learning & Practice
        </div>
        <p className="mt-1 text-slate-400">
          Focused on mastering JavaScript, React, and basic backend concepts.
          Built practice projects, landing pages, and small utilities to learn
          component design, state management, and API integration.
        </p>
      </div>
    </div>

    {/* What I bring */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
      <h3 className="text-sm font-semibold text-slate-100">
        What I bring as a MERN developer
      </h3>
      <ul className="mt-3 space-y-2 text-slate-400">
        <li>• Clean React frontends with reusable components and clear state flow.</li>
        <li>• REST APIs in Node/Express with JWT auth, validation, and error handling.</li>
        <li>• MongoDB schemas designed around real-world business workflows.</li>
        <li>• Ability to understand non-technical processes and convert them into web apps.</li>
        <li>• Focus on readability, maintainability, and practical performance.</li>
      </ul>
    </div>
  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="mt-16 md:mt-24">
  <h2 className="text-xl font-semibold md:text-2xl">Projects</h2>
  <p className="mt-2 text-sm text-slate-400">
    A few selected projects I&apos;ve worked on:
  </p>

  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {/* Project card 1 */}
    <article className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-emerald-500/70">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            Construction CRM Dashboard
          </h3>
          <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
            React · Node · MongoDB
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <a
            href="https://your-crm-live-link.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            {/* External link icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6h8m0 0v8m0-8L9 15"
              />
            </svg>
            Live
          </a>
          <a
            href="https://github.com/your-username/construction-crm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            {/* GitHub icon (simple) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.395 7.868 10.918.576.102.786-.25.786-.556 0-.274-.01-1-.016-1.963-3.2.695-3.877-1.542-3.877-1.542-.524-1.33-1.28-1.685-1.28-1.685-1.046-.715.08-.7.08-.7 1.157.082 1.766 1.188 1.766 1.188 1.028 1.762 2.695 1.253 3.35.957.104-.745.403-1.253.733-1.542-2.553-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.184-3.084-.118-.29-.513-1.457.112-3.037 0 0 .965-.309 3.162 1.178a10.95 10.95 0 0 1 2.88-.387c.976.004 1.96.132 2.88.387 2.195-1.487 3.158-1.178 3.158-1.178.627 1.58.232 2.747.114 3.037.738.804 1.182 1.829 1.182 3.084 0 4.417-2.688 5.387-5.252 5.673.414.356.782 1.057.782 2.133 0 1.54-.014 2.78-.014 3.158 0 .309.206.666.792.553C20.212 21.39 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
            </svg>
            Code
          </a>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Lead management system for villa plot sales: captures leads, tracks
        follow-ups, shows user dashboards, filters by status/date and exports
        data to CSV for reporting.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
        <span className="rounded-full bg-slate-800 px-2 py-0.5">React</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          Tailwind / Bootstrap
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          MongoDB
        </span>
      </div>
    </article>

    {/* Project card 2 */}
    <article className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-emerald-500/70">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            Rathna Bhoomi Developers
          </h3>
          <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
            React · Node · MySQL
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <a
            href="https://www.rathnabhoomidevelopers.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6h8m0 0v8m0-8L9 15"
              />
            </svg>
            Live
          </a>
          <a
            href="https://github.com/rathnabhoomidevelopers-art/rbd-frontend"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.395 7.868 10.918.576.102.786-.25.786-.556 0-.274-.01-1-.016-1.963-3.2.695-3.877-1.542-3.877-1.542-.524-1.33-1.28-1.685-1.28-1.685-1.046-.715.08-.7.08-.7 1.157.082 1.766 1.188 1.766 1.188 1.028 1.762 2.695 1.253 3.35.957.104-.745.403-1.253.733-1.542-2.553-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.184-3.084-.118-.29-.513-1.457.112-3.037 0 0 .965-.309 3.162 1.178a10.95 10.95 0 0 1 2.88-.387c.976.004 1.96.132 2.88.387 2.195-1.487 3.158-1.178 3.158-1.178.627 1.58.232 2.747.114 3.037.738.804 1.182 1.829 1.182 3.084 0 4.417-2.688 5.387-5.252 5.673.414.356.782 1.057.782 2.133 0 1.54-.014 2.78-.014 3.158 0 .309.206.666.792.553C20.212 21.39 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
            </svg>
            Code
          </a>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Automated leave management for 26+ employees using Google Forms, a
        custom HTML web app and Apps Script backend. Handles new leave,
        revisions, validations and weekly summary reports.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          HTML/CSS
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          Google Apps Script
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          Google Sheets
        </span>
      </div>
    </article>

    {/* Project card 3 */}
    <article className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-emerald-500/70">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            Rural Education Learning Portal (PWA)
          </h3>
          <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
            React · PWA
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <a
            href="https://online-learning-eight-chi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6h8m0 0v8m0-8L9 15"
              />
            </svg>
            Live
          </a>
          <a
            href="https://github.com/Shashikant-S-Bilgundi/Online-Learning"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.395 7.868 10.918.576.102.786-.25.786-.556 0-.274-.01-1-.016-1.963-3.2.695-3.877-1.542-3.877-1.542-.524-1.33-1.28-1.685-1.28-1.685-1.046-.715.08-.7.08-.7 1.157.082 1.766 1.188 1.766 1.188 1.028 1.762 2.695 1.253 3.35.957.104-.745.403-1.253.733-1.542-2.553-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.184-3.084-.118-.29-.513-1.457.112-3.037 0 0 .965-.309 3.162 1.178a10.95 10.95 0 0 1 2.88-.387c.976.004 1.96.132 2.88.387 2.195-1.487 3.158-1.178 3.158-1.178.627 1.58.232 2.747.114 3.037.738.804 1.182 1.829 1.182 3.084 0 4.417-2.688 5.387-5.252 5.673.414.356.782 1.057.782 2.133 0 1.54-.014 2.78-.014 3.158 0 .309.206.666.792.553C20.212 21.39 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
            </svg>
            Code
          </a>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Offline-friendly learning portal with class-wise content, quizzes and
        downloadable PDFs for students. Designed mobile-first so it works well
        on low-end devices.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
        <span className="rounded-full bg-slate-800 px-2 py-0.5">React</span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          Service Workers
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5">
          Tailwind
        </span>
      </div>
    </article>
  </div>
</section>


        {/* Services Section */}
        <section id="services" className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">Services</h2>
          <p className="mt-2 text-sm text-slate-400">
            Ways I can help you or your business:
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                Custom Web Apps &amp; CRMs
              </h3>
              <p className="mt-2 text-slate-400">
                Design and build tailored CRMs, dashboards and internal tools
                for real estate, engineering and operations teams using React,
                Node.js and MongoDB.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                Landing Pages &amp; Frontend
              </h3>
              <p className="mt-2 text-slate-400">
                High-converting landing pages and marketing sites with clean
                UI, responsive layouts and smooth user experience using React
                and Tailwind CSS.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-100">
                Process Design &amp; Consultation
              </h3>
              <p className="mt-2 text-slate-400">
                Help teams convert manual processes into clear digital
                workflows, plan data structures, and refactor existing code
                bases for better performance and maintainability.
              </p>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">How I Work</h2>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
            <ul className="space-y-2 text-slate-400">
              <li>• Understand your goals, constraints and existing process first.</li>
              <li>• Break work into small, clear milestones.</li>
              <li>• Share progress regularly with demos or screenshots.</li>
              <li>• Ask questions early instead of assuming.</li>
            </ul>
            <ul className="space-y-2 text-slate-400">
              <li>• Keep the UI simple and focused on real users.</li>
              <li>• Prefer clarity in code and naming over shortcuts.</li>
              <li>• Document important flows and decisions.</li>
              <li>• Be transparent about risks and delivery timelines.</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-16 md:mt-24">
          <h2 className="text-xl font-semibold md:text-2xl">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Have a project in mind, or want to discuss improving an existing
            process or tool? Share a few details and I&apos;ll get back to you
            within 24–48 hours.
          </p>
          <div className="mt-6">
            <PortfolioContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              © {new Date().getFullYear()} Umesha U S. All rights reserved.
            </span>
            <span>Built with React &amp; Tailwind CSS.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
