import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AddressBook, Phone, Mail, Globe, MapPin, Share2, Linkedin, Twitter, Instagram, Facebook,
  Download, UserPlus, Printer, Star, Briefcase, GraduationCap, CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError } from '../utils/toast';

const MePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Hello from your Digital Business Card`;
  };

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
  };

  const downloadCV = () => {
    const cvContent = `
ALEX JOHNSON - SENIOR UX DESIGNER

CONTACT INFORMATION
Phone: +1 (555) 012-3456
Email: alex.johnson@designstudio.com
Website: alexjohnson.design
Location: San Francisco, CA

PROFESSIONAL SUMMARY
Senior UX Designer with 8+ years of experience crafting beautiful digital experiences with expertise in user-centered design and innovation.

SKILLS
• UI/UX Design (95%)
• Prototyping (90%)
• User Research (85%)
• Figma, Sketch, Adobe XD
• HTML/CSS, JavaScript
• Design Systems

EXPERIENCE
Senior UX Designer | Design Studio | 2020 - Present
UX Designer | Tech Company | 2018 - 2020
Junior Designer | Startup | 2016 - 2018

EDUCATION
Bachelor of Design | University of California | 2016
            `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Johnson_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showSuccess('CV downloaded successfully!');
  };

  const saveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Alex Johnson
ORG:Design Studio
TITLE:Senior UX Designer
TEL:+15550123456
EMAIL:alex.johnson@designstudio.com
URL:https://alexjohnson.design
ADR:;;San Francisco;CA;;USA
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Johnson_Contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showSuccess('Contact saved successfully!');
  };

  const printCard = () => {
    window.print();
  };

  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Alex Johnson - Digital Business Card',
        text: 'Check out my digital business card!',
        url: window.location.href
      })
        .then(() => showSuccess('Card shared successfully!'))
        .catch((error) => showError('Failed to share card: ' + error.message));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showSuccess('Card URL copied to clipboard!'))
        .catch(() => showError('Failed to copy URL. Please try manually.'));
    }
  };

  const switchTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-target-width');
          if (targetWidth) {
            (entry.target as HTMLElement).style.width = targetWidth;
          }
        } else {
          // Optionally reset width when not intersecting if you want re-animation on scroll back
          // (entry.target as HTMLElement).style.width = '0%';
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    skillBarsRef.current.forEach(bar => {
      if (bar) {
        observer.observe(bar);
      }
    });

    return () => {
      skillBarsRef.current.forEach(bar => {
        if (bar) {
          observer.unobserve(bar);
        }
      });
    };
  }, [activeTab]); // Re-run effect if activeTab changes to re-observe new bars

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2] to-[#FF968D] p-4 flex flex-col">
      <Header />

      {/* Main Card Container */}
      <div className="max-w-4xl mx-auto my-8 flex-grow">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg">
              <h1 className="text-2xl font-bold text-[#4A90E2]">MyCv.i.ng</h1>
              <p className="text-xs text-gray-600">Professional CV Platform</p>
            </div>
          </div>
          <p className="text-white/80">Hosted at: mycv.i.ng/me • Professional • Interactive • Modern</p>
        </div>

        {/* Business Card */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="md:col-span-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto">
                  AJ
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white pulse-animation"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Adeleke Johnson</h2>
              <p className="text-lg font-medium mb-4 text-[#4A90E2]">Senior UX Designer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crafting beautiful digital experiences with 8+ years of expertise in user-centered design and innovation.
              </p>

              {/* QR Code */}
              <div className="mt-6">
                <div className="w-20 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjAiIHk9IjcwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAiIHk9IjgwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K')] bg-no-repeat bg-center bg-contain mx-auto mb-2"></div>
                <p className="text-xs text-gray-500">Scan to save contact</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <AddressBook className="w-5 h-5 mr-2 text-[#4A90E2]" />
                Contact Info
              </h3>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => makeCall('+2347083682007')}>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">+234 708 368 2007</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => sendEmail('info@mycv.i.ng')}>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">info@mycv.i.ng</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => openWebsite('https://mycv.i.ng')}>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-medium text-gray-800">mycv.i.ng</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">Fate-Tanke, Ilorin, KW</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Actions */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-[#4A90E2]" />
                Connect & Actions
              </h3>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a href="https://linkedin.com/company/lemmaiot" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">LinkedIn</p>
                </a>

                <a href="https://twitter.com/LemmaIoT" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-3 rounded-lg text-center hover:bg-sky-600 transition-all duration-300 hover:scale-105">
                  <Twitter className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">Twitter</p>
                </a>

                <a href="https://instagram.com/lemmaiot/feed" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-lg text-center hover:bg-pink-600 transition-all duration-300 hover:scale-105">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">Instagram</p>
                </a>

                <a href="https://facebook.com/Lemmaiot" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-lg text-center hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                  <Facebook className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">Facebook</p>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button onClick={downloadCV} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#4A90E2] hover:bg-[#3A7BC8]">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>

                <button onClick={saveContact} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#FF968D] hover:bg-[#FF7F73]">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Save Contact
                </button>

                <button onClick={printCard} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#4A90E2] hover:bg-[#3A7BC8]">
                  <Printer className="w-5 h-5 mr-2" />
                  Print Card
                </button>

                <button onClick={shareCard} className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Card
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information Tabs */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => switchTab('skills')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'skills' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <Star className="w-4 h-4 mr-2 inline-block" />Skills & Expertise
            </button>
            <button
              onClick={() => switchTab('experience')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'experience' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <Briefcase className="w-4 h-4 mr-2 inline-block" />Work Experience
            </button>
            <button
              onClick={() => switchTab('education')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'education' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <GraduationCap className="w-4 h-4 mr-2 inline-block" />Education
            </button>
          </div>

          {/* Skills Tab Content */}
          {activeTab === 'skills' && (
            <div id="skills-content" className="tab-content animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">UI/UX Design</span>
                      <span className="text-sm text-gray-500">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[0] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#4A90E2', width: '0%' }}
                        data-target-width="95%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Prototyping</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[1] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#FF968D', width: '0%' }}
                        data-target-width="90%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">User Research</span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[2] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#4A90E2', width: '0%' }}
                        data-target-width="85%"
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Figma</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Sketch</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Adobe XD</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Principle</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">InVision</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Framer</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Webflow</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab Content */}
          {activeTab === 'experience' && (
            <div id="experience-content" className="tab-content animate-fade-in">
              <div className="space-y-6">
                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Senior UX Designer</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2020 - Present</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Design Studio Inc.</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Leading design initiatives for enterprise clients, managing a team of 5 designers, and establishing design systems that improved development efficiency by 40%.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#FF968D]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">UX Designer</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2018 - 2020</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Tech Innovations Ltd.</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Designed user interfaces for mobile and web applications, conducted user research, and collaborated with cross-functional teams to deliver user-centered solutions.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Junior Designer</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2016 - 2018</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Creative Startup</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Supported senior designers in creating wireframes, prototypes, and visual designs. Gained experience in user testing and design iteration processes.</p>
                </div>
              </div>
            </div>
          )}

          {/* Education Tab Content */}
          {activeTab === 'education' && (
            <div id="education-content" className="tab-content animate-fade-in">
              <div className="space-y-6">
                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Bachelor of Design</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2012 - 2016</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">University of California, Berkeley</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Specialized in User Experience Design and Human-Computer Interaction. Graduated Magna Cum Laude with a focus on design thinking and user research methodologies.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#FF968D]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">UX Design Certification</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2017</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Google UX Design Professional Certificate</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprehensive program covering user research, wireframing, prototyping, and usability testing. Completed 6 hands-on projects demonstrating end-to-end design process.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Advanced Prototyping Workshop</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2019</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">IDEO Design Thinking</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Intensive workshop focused on advanced prototyping techniques, design thinking methodologies, and collaborative design processes.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions Footer */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Connect?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => sendEmail('info@mycv.i.ng')} className="px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 bg-[#4A90E2] hover:bg-[#3A7BC8]">
              <Mail className="w-5 h-5 mr-2 inline-block" />Send Message
            </button>
            <button onClick={() => makeCall('+2347083682007')} className="px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 bg-[#FF968D] hover:bg-[#FF7F73]">
              <Phone className="w-5 h-5 mr-2 inline-block" />Schedule Call
            </button>
            <button onClick={() => openWebsite('https://mycv.i.ng')} className="px-6 py-2 rounded-full bg-gray-600 text-white font-medium hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <Globe className="w-5 h-5 mr-2 inline-block" />View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Print Version (Hidden) */}
      <div className="print-card hidden"> {/* Hidden by default, shown by print media query */}
        <div className="flex h-full">
          <div className="flex-1 pr-1">
            <h2 className="text-base font-bold m-0 mb-1 text-gray-800">Alex Johnson</h2>
            <p className="text-xs text-gray-600 m-0 mb-2">Senior UX Designer</p>
            <p className="text-xs text-gray-800 m-0 mb-0.5">📞 +234 708 368 2007</p>
            <p className="text-xs text-gray-800 m-0 mb-0.5">✉️ info@mycv.i.ng</p>
            <p className="text-xs text-gray-800 m-0 mb-0.5">🌐 mycv.i.ng</p>
            <p className="text-xs text-gray-800 m-0">📍 Fate-Tanke, Ilorin, KW</p>
          </div>
          <div className="w-24 flex items-center justify-center">
            <div className="w-20 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjAiIHk9IjcwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAiIHk9IjgwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K')] bg-no-repeat bg-center bg-contain"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MePage;