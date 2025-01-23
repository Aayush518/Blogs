import React from 'react';
import { Github, Linkedin, Mail, Terminal, Code, Cpu, Globe, Zap, BookOpen, Users, Coffee, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-emerald-500/10 dark:from-purple-900/20 dark:via-blue-900/15 dark:to-emerald-900/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5 mix-blend-overlay"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
              <img
                src="https://avatars.githubusercontent.com/Aayush518"
                alt="Aayush518"
                className="relative w-40 h-40 mx-auto rounded-full ring-4 ring-purple-500/30 hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-text-gradient">
                Aayush518
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Software Architect & Digital Craftsman
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com/aayush518', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/aayush518', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:adhikariaayush37@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3"
                >
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {[
              { label: 'Projects', value: '50+', icon: Code },
              { label: 'Articles', value: '100+', icon: BookOpen },
              { label: 'Coffee/day', value: '∞', icon: Coffee },
              { label: 'Happy Clients', value: '25+', icon: Heart }
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <Icon className="w-6 h-6 mx-auto mb-3 text-purple-500" />
                <div className="text-2xl font-bold mb-1">{value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>

          {/* Skills & Experience */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Technical Expertise',
                icon: Cpu,
                items: [
                  'Full-stack Development',
                  'System Architecture',
                  'Cloud Infrastructure',
                  'Performance Optimization'
                ]
              },
              {
                title: 'Core Technologies',
                icon: Terminal,
                items: [
                  'TypeScript / JavaScript',
                  'React / Next.js',
                  'Node.js / Express',
                  'PostgreSQL / MongoDB'
                ]
              },
              {
                title: 'Services',
                icon: Globe,
                items: [
                  'Technical Consulting',
                  'Architecture Design',
                  'Code Reviews',
                  'Performance Audits'
                ]
              },
              {
                title: 'Soft Skills',
                icon: Users,
                items: [
                  'Team Leadership',
                  'Technical Writing',
                  'Project Management',
                  'Mentoring'
                ]
              }
            ].map(({ title, icon: Icon, items }) => (
              <div key={title} className="glass rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 max-w-4xl mx-auto prose dark:prose-invert">
            <h2 className="text-3xl font-bold text-gradient mb-6">My Philosophy</h2>
            <div className="glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed mb-6">
                I believe in crafting digital experiences that not only meet technical requirements
                but also create meaningful impact. Every line of code written should serve a purpose,
                every design decision should enhance user experience, and every project should push
                the boundaries of what's possible.
              </p>
              <p className="text-lg leading-relaxed">
                As a perpetual learner and technology enthusiast, I'm constantly exploring new
                ways to solve complex problems and share knowledge with the community. My goal is
                to contribute to the evolution of technology while helping others grow in their
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};