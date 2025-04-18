'use client';

import Link from 'next/link';
import Image from 'next/image';
import BackButton from '../components/BackButton';
import ContactCard from '../components/ContactCard';
import SocialLink from '../components/SocialLink';
import CircuitImage from '../components/CircuitImage';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <CircuitImage position="left" imageType="circuit" />
      <CircuitImage position="upper-right" imageType="rightcircuit" />
      
      {/* Phone Image */}
      <div className="absolute bottom-0 right-0 z-20 w-[600px] h-[600px]">
        <Image 
          src="/phone.png" 
          alt="Phone"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)' }}>Contact</h1>
          <p className="text-gray-400 mt-2">Get in touch with me</p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto mb-8">
          <div 
            className="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl"
            style={{
              background: 'black',
              border: '2px solid #ff00ff',
              boxShadow: '0 0 10px #ff00ff40',
            }}
          >
            <div className="p-8 rounded-lg">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a href="mailto:sharm215@msu.edu" className="text-cyan-300 text-lg hover:text-cyan-400 transition-colors">sharm215@msu.edu</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-1">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="text-cyan-300 text-lg">Kalamazoo, Michigan</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-1">
                      <SocialLink 
                        href="https://www.linkedin.com/in/arya-sharma-535262228/" 
                        icon={
                          <svg className="h-6 w-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        }
                      />
                      <span className="text-white text-lg">LinkedIn</span>
                    </div>
                    <div className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-1">
                      <SocialLink 
                        href="https://www.tiktok.com/@techmonke123?_t=ZP-8vahuWmslIt&_r=1" 
                        icon={
                          <svg className="h-6 w-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        }
                      />
                      <span className="text-white text-lg">TikTok</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
} 