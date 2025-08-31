import React, { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Github, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
};
const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-slate-200">
      <div className="mx-auto max-w-4xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">ANOOP NAIR</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Software Engineer — Backend, Embedded & ML</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a href="mailto:nairanoop413@gmail.com" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                <Mail size={16} /> nairanoop413@gmail.com
              </a>
              <a href="tel:+916382999714" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                <Phone size={16} /> +91 63829 99714
              </a>
              <a href="https://www.linkedin.com/in/anoop-nair-u-11a145226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                <Linkedin size={16} /> linkedin.com/in/anoop-nair-u
              </a>
              <a href="https://github.com/Anoop-Nair-U" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                <Github size={16} /> github.com/Anoop-Nair-U
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/resume.pdf" className="inline-block rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700">Download Resume</a>
            <span className="text-sm text-slate-500 dark:text-slate-300">Kanyakumari, Tamil Nadu</span>
            <ThemeToggle />
          </div>
        </header>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={container} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} className="md:col-span-2">
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Result-driven Software Engineer with hands-on experience building Spring Boot microservices, Kafka streaming pipelines, and Android-based instrument clusters. Skilled in Java, Python, CAN bus integration, and applied ML for computer vision. Strong debugging, performance optimization, and cross-functional collaboration experience delivering production-ready solutions.</p>

            <h3 className="mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">Selected Experience</h3>
            <div className="mt-3 space-y-4">
              <article>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Software Engineer — UST</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Aug 2023 – Present · Trivandrum, Kerala</p>
                  </div>
                </div>
                <ul className="mt-2 ml-4 list-disc text-slate-600 dark:text-slate-300 text-sm">
                  <li>Built CAN → Kafka streaming pipelines and Spring Boot microservices to process vehicle telemetry for real-time analytics.</li>
                  <li>Implemented 15-minute windowed aggregation, KPI calculations, and optimized producers/consumers for high throughput and low latency.</li>
                  <li>Debugged complex streaming issues using Log4j and system diagnostics; collaborated with hardware engineers for accurate CAN decoding.</li>
                </ul>
              </article>

              <article>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Intern – Embedded Software</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Mar 2023 – Aug 2023 · Instrument cluster (Android + CAN)</p>
                  </div>
                </div>
                <ul className="mt-2 ml-4 list-disc text-slate-600 dark:text-slate-300 text-sm">
                  <li>Developed Android instrument cluster UI using MVVM, integrated real-time CAN telemetry over TCP and AIDL services for IPC.</li>
                  <li>Focused on performance tuning and reliable CAN message decoding across ECUs.</li>
                </ul>
              </article>
            </div>
          </motion.div>

          <motion.aside variants={item} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg border border-slate-100 dark:border-slate-600">
            <h3 className="text-sm font-semibold">Skills</h3>
            <div className="mt-3 text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><span className="font-medium">Languages:</span> Java, Python, C, C++</p>
              <p><span className="font-medium">Frameworks/Tools:</span> Spring Boot, Kafka, Hibernate, Log4j, Android (MVVM), AIDL</p>
              <p><span className="font-medium">ML / Data:</span> TensorFlow, Keras, MySQL</p>
              <p><span className="font-medium">Cloud / Infra:</span> GCP, Kubernetes, Linux</p>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="mt-8">
          <motion.h2 variants={item} className="text-lg font-semibold">Selected Projects</motion.h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{
              title: 'CAN → Kafka Streaming (VECV)',
              desc: 'End-to-end pipeline to stream, aggregate and calculate vehicle KPIs. Implemented 15-min windowing and optimized for production throughput.',
              tech: 'Java · Kafka · Spring Boot'
            }, {
              title: 'CCTV Anomaly Detection',
              desc: 'Desktop app with motion detection, CLAHE preprocessing and CNN-based anomaly classification.',
              tech: 'Python · OpenCV · TensorFlow'
            }, {
              title: 'Android Instrument Cluster',
              desc: 'Android UI with SVG assets and real-time telemetry updates, integrated AIDL services and CAN decoding.',
              tech: 'Java · Android · CAN'
            }, {
              title: 'ECG Analysis App',
              desc: 'Kivy-based GUI for loading .npy ECG files, peak detection and heart rate visualization.',
              tech: 'Python · NumPy · Kivy'
            }].map((p, i) => (
              <motion.div key={i} variants={item} className="p-4 rounded-lg border border-slate-100 bg-white dark:bg-slate-800">
                <h4 className="font-medium">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <a href="https://github.com/Anoop-Nair-U" target="_blank" rel="noreferrer" className="underline">Repo</a>
                  <span className="text-slate-400">•</span>
                  <span>{p.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="mt-3 text-sm text-slate-700 dark:text-slate-200 space-y-3">
              <div>
                <div className="font-medium">B.E. in Computer Science Engineering — Narayanaguru College of Engineering</div>
                <div className="text-slate-500 dark:text-slate-300 text-xs">2018 – 2022 · CGPA: 8.16</div>
              </div>
              <div>
                <div className="font-medium">HSC — Arunachalam Higher Secondary School</div>
                <div className="text-slate-500 dark:text-slate-300 text-xs">2017 – 2018 · 78%</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-lg font-semibold">Certifications</h2>
            <ul className="mt-3 list-disc ml-5 text-sm text-slate-700 dark:text-slate-200">
              <li>Java Object-Oriented Programming — LinkedIn</li>
              <li>Machine Learning in Python — Udemy</li>
              <li>Python Programming — SoloLearn</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 border-t border-slate-100 dark:border-slate-700 pt-6 text-sm text-slate-500 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>Made with ❤️ · Available for Junior Java / Embedded roles</div>
          <div>Languages: English · Malayalam · Tamil · Hindi</div>
        </motion.footer>
      </div>
    </div>
  );
}
