import React, { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Clock, MessageSquare, Mail, PhoneCall, Share2, Copy, Linkedin, Twitter, Facebook, Whatsapp, FileText, Rocket, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError, showLoading, dismissToast } from '../utils/toast';

const WelcomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('Valued Customer');
  const [customerEmail, setCustomerEmail] = useState<string>('your email address');
  const [deliveryHours, setDeliveryHours] = useState<number>(24);
  const [completionTime, setCompletionTime] = useState<string>('');

  const [hoursLeft, setHoursLeft] = useState<string>('00');
  const [minutesLeft, setMinutesLeft] = useState<string>('00');
  const [secondsLeft, setSecondsLeft] = useState<string>('00');

  const [progressPercentage, setProgressPercentage] = useState<number>(15);
  const [currentStepText, setCurrentStepText] = useState<string>('Processing your CV and setting up your website...');
  const [activeStep, setActiveStep] = useState<number>(2);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const confettiContainerRef = useRef<HTMLDivElement>(null);

  // Parse URL parameters on component mount
  useEffect(() => {
    setOrderId(searchParams.get('order_id') || '#CV-' + Date.now());
    setCustomerName(searchParams.get('customer_name') || 'Valued Customer');
    setCustomerEmail(searchParams.get('email') || 'your email address');
    setDeliveryHours(parseInt(searchParams.get('delivery_hours') || '24'));
  }, [searchParams]);

  // Initialize page content and timers
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + deliveryHours);

    setCompletionTime(targetTime.toLocaleDateString('en-NG', {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }));

    // Start countdown
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = targetTime.getTime() - now.getTime();

      if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setHoursLeft(hours.toString().padStart(2, '0'));
        setMinutesLeft(minutes.toString().padStart(2, '0'));
        setSecondsLeft(seconds.toString().padStart(2, '0'));
      } else {
        setHoursLeft('00');
        setMinutesLeft('00');
        setSecondsLeft('00');
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Start progress simulation
    const progressSteps = [
      { progress: 15, step: 'Processing your CV and setting up your website...', activeStep: 2 },
      { progress: 35, step: 'Formatting your content for web display...', activeStep: 2 },
      { progress: 55, step: 'Building your professional website design...', activeStep: 3 },
      { progress: 75, step: 'Adding mobile-friendly features...', activeStep: 3 },
      { progress: 90, step: 'Final testing and optimization...', activeStep: 4 },
      { progress: 100, step: 'Your website is ready! Check your email for the link.', activeStep: 4 }
    ];

    let currentStepIndex = 0;
    const startProgress = () => {
      if (currentStepIndex < progressSteps.length) {
        const stepData = progressSteps[currentStepIndex];
        setProgressPercentage(stepData.progress);
        setCurrentStepText(stepData.step);
        setActiveStep(stepData.activeStep);
        currentStepIndex++;

        if (currentStepIndex < progressSteps.length) {
          setTimeout(startProgress, Math.random() * 120000 + 180000); // 3-5 minutes
        }
      }
    };
    const progressTimeout = setTimeout(startProgress, 30000); // First update after 30 seconds

    // Show celebration after a short delay
    const celebrationTimeout = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Hide after 5 seconds
    }, 500);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(progressTimeout);
      clearTimeout(celebrationTimeout);
    };
  }, [deliveryHours, searchParams]);

  // Confetti animation logic
  useEffect(() => {
    if (!showConfetti || !confettiContainerRef.current) return;

    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti absolute w-2.5 h-2.5 rounded-full';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = ['#4a90e2', '#008751', '#fbbf24', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)];
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      confettiContainerRef.current?.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 4000);
    };

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createConfetti();
      }, i * 100);
    }
  }, [showConfetti]);

  const handleShareOnWhatsApp = () => {
    const message = `🎉 Just got my CV turned into a professional website in 24 hours! 

MyCV.i.ng is amazing - they transform your CV into a mobile-friendly website that you can share anywhere. Perfect for job applications, LinkedIn, and networking!

✅ Only ₦2,500 for Standard Package
✅ Ready in 24 hours  
✅ Works perfectly on phones
✅ Professional design

Check it out: https://mycv.i.ng

#CVWebsite #JobSearch #Nigeria #Professional`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShareOnLinkedIn = () => {
    const message = `Excited to share MyCV.i.ng - a game-changing service that transforms your CV into a professional website in just 24 hours! 

Perfect for job seekers, freelancers, and professionals who want to stand out. The mobile-friendly design makes it easy to share your credentials anywhere.

Starting at just ₦2,500. Made for Nigerians, by Nigerians. 

Check it out: https://mycv.i.ng

#CVWebsite #CareerDevelopment #JobSearch #Nigeria #Professional #LinkedInTips`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://mycv.i.ng')}&summary=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShareOnTwitter = () => {
    const message = `🚀 Just discovered MyCV.i.ng - they turn your CV into a professional website in 24hrs! 

✅ ₦2,500 only
✅ Mobile-friendly  
✅ Perfect for job hunting

Made for Nigerians 🇳🇬

https://mycv.i.ng

#CVWebsite #JobSearch #Nigeria`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://mycv.i.ng')}&quote=${encodeURIComponent('Amazing service! MyCV.i.ng transforms your CV into a professional website in just 24 hours. Perfect for job seekers and professionals. Starting at ₦2,500. Made for Nigerians! 🇳🇬')}`;
    window.open(facebookUrl, '_blank');
  };

  const handleCopyShareLink = () => {
    const shareText = `🎉 Check out MyCV.i.ng - they turn your CV into a professional website in 24 hours!

Perfect for job applications and networking. Starting at just ₦2,500.

Visit: https://mycv.i.ng`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText)
        .then(() => showSuccess('Card URL copied to clipboard!'))
        .catch(() => showError('Failed to copy URL. Please try manually.'));
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showSuccess('Card URL copied to clipboard!');
      } catch (err) {
        showError('Please copy this text manually:\n\n' + shareText);
      }
      document.body.removeChild(textArea);
    }
  };

  const getStepCircleClass = (stepNum: number) => {
    if (stepNum < activeStep) {
      return 'w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto';
    } else if (stepNum === activeStep) {
      return 'w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto pulse-animation';
    } else {
      return 'w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto';
    }
  };

  const getStepIcon = (stepNum: number) => {
    if (stepNum < activeStep) {
      return <CheckCircle className="w-8 h-8 text-white" />;
    } else if (stepNum === activeStep) {
      switch (stepNum) {
        case 2: return <FileText className="w-8 h-8 text-white" />;
        case 3: return <Rocket className="w-8 h-8 text-white" />;
        case 4: return <Zap className="w-8 h-8 text-white" />;
        default: return stepNum;
      }
    } else {
      return stepNum;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Celebration Confetti */}
      {showConfetti && <div ref={confettiContainerRef} className="celebration fixed top-0 left-0 w-full h-full pointer-events-none z-50"></div>}

      <Header />

      {/* Main Success Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 bounce-animation">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Dynamic Welcome Message */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎉 Payment Successful!
          </h1>
          
          <div className="typewriter text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            <span id="welcomeMessage">Welcome to the MyCV.i.ng family, {customerName}!</span>
          </div>

          {/* Share Platform Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">🎉 Help Others Transform Their CVs Too!</h3>
            <p className="text-blue-100 mb-6">You're about to get an amazing CV website! Why not help your friends, family, and colleagues get theirs too? Share MyCV.i.ng and help them stand out in their job search.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button onClick={handleShareOnWhatsApp} className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Whatsapp className="w-6 h-6" />
                <span>Share on WhatsApp</span>
              </button>
              
              <button onClick={handleShareOnLinkedIn} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Linkedin className="w-6 h-6" />
                <span>Share on LinkedIn</span>
              </button>
            </div>
            
            <div className="mt-4 flex justify-center space-x-4">
              <button onClick={handleShareOnTwitter} className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center space-x-2">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </button>
              
              <button onClick={handleShareOnFacebook} className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center space-x-2">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </button>
              
              <button onClick={handleCopyShareLink} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center space-x-2">
                <Copy className="w-5 h-5" />
                <span>Copy Link</span>
              </button>
            </div>
            
            <p className="text-xs text-blue-200 mt-4">💡 Your friends will thank you for helping them create professional CV websites!</p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h4 className="text-lg font-bold mb-4">Your Website Will Be Ready In:</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold" id="hoursLeft">{hoursLeft}</div>
                <div className="text-sm text-blue-100">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold" id="minutesLeft">{minutesLeft}</div>
                <div className="text-sm text-blue-100">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold" id="secondsLeft">{secondsLeft}</div>
                <div className="text-sm text-blue-100">Seconds</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-100">
              Expected completion: <span id="completionTime" className="font-semibold">{completionTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">We're Building Your CV Website</h2>
          <p className="text-xl text-center text-gray-600 mb-16">Our expert team is working on your professional website right now!</p>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-medium text-blue-600" id="progressPercentage">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="progress-bar h-4 rounded-full bg-gradient-to-r from-blue-600 to-green-600" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-gray-600" id="currentStep">{currentStepText}</span>
            </div>
          </div>

          {/* Build Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center step-card" id="step1">
              <div className={getStepCircleClass(1)}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Payment Received</h3>
              <p className="text-gray-600 text-sm">✅ Your payment has been confirmed and processed successfully.</p>
            </div>

            <div className="text-center step-card" id="step2">
              <div className={getStepCircleClass(2)}>
                {getStepIcon(2)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Processing CV</h3>
              <p className="text-gray-600 text-sm">🔄 Our team is reviewing and formatting your CV content for the web.</p>
            </div>

            <div className="text-center step-card" id="step3">
              <div className={getStepCircleClass(3)}>
                {getStepIcon(3)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Building Website</h3>
              <p className="text-gray-600 text-sm">⏳ Creating your professional website with mobile-friendly design.</p>
            </div>

            <div className="text-center step-card" id="step4">
              <div className={getStepCircleClass(4)}>
                {getStepIcon(4)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Going Live</h3>
              <p className="text-gray-600 text-sm">🚀 Final testing and making your website live on the internet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Happens Next?</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Within 2-4 Hours</h3>
                <p className="text-gray-600">Our team will start processing your CV and begin building your website. You'll receive an email update on our progress.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Within 24 Hours</h3>
                <p className="text-gray-600">Your professional CV website will be completed and live! We'll send you the link and login details via email and SMS.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Sharing Immediately</h3>
                <p className="text-gray-600">Once live, you can share your new CV website on WhatsApp, LinkedIn, job applications, and anywhere else!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Need Help or Have Questions?</h2>
          <p className="text-xl mb-12 text-green-100">Our support team is here to help you every step of the way!</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
              <p className="text-green-100 mb-4">Get instant help via WhatsApp</p>
              <button onClick={() => window.open('https://wa.me/2348012345678?text=Hi! I just made a payment for my CV website and have a question.', '_blank')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Chat Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-green-100 mb-4">Send us detailed questions</p>
              <button onClick={() => window.location.href='mailto:info@mycv.i.ng?subject=CV Website Order Support&body=Hi, I just completed payment for my CV website and need assistance.'} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Email Us
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-green-100 mb-4">Speak directly with our team</p>
              <button onClick={() => window.location.href='tel:+2347083682007'} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">📧 Important: Check Your Email!</h4>
            <p className="text-green-100">
              We've sent order confirmation and next steps to <strong id="customerEmail">{customerEmail}</strong>. 
              If you don't see it in your inbox, please check your spam/junk folder.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WelcomePage;