import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Docs', 'Community', 'Support'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Compliance'],
  };

  const socialLinks = [
    // { icon: Github, href: '#', label: 'GitHub' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-100 border-t border-slate-800">
      {/* Gradient overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Brand
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Building the future of modern applications with precision and innovation.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Copyright */}
          <div className="text-sm text-slate-400">
            <p>&copy; {currentYear} Your Company. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 transition-all duration-300 group border border-slate-700/50 hover:border-cyan-400/30"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20" />
    </footer>
  );
}