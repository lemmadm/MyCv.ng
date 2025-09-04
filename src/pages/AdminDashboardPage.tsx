import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, ClipboardList, Palette, FileText, Mail, Settings,
  RefreshCw, TrendingUp, DollarSign, Clock, CheckCircle, AlertTriangle,
  Download, Edit, Eye, PlusCircle, MessageSquare, PhoneCall,
  User, Building, MapPin, Calendar, Package, CreditCard,
  ChevronDown, ChevronUp, Search, Filter, ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError, showLoading, dismissToast } from '../utils/toast';

// Simulated Data (would come from API in a real app)
const simulatedOrders = [
  {
    id: 'MCV20241201ABC123',
    customerName: 'Adebayo Ogundimu',
    customerEmail: 'adebayo@email.com',
    domain: 'adebayo.mycv.i.ng',
    packageType: 'With CV',
    amount: 2500,
    status: 'in-progress',
    date: 'Dec 1, 2024',
    profession: 'Software Developer',
    cvFile: 'adebayo_cv.pdf',
    cvFilePath: '/uploads/cvs/adebayo_cv.pdf',
  },
  {
    id: 'MCV20241201DEF456',
    customerName: 'Fatima Abdullahi',
    customerEmail: 'fatima@email.com',
    domain: 'fatima.mycv.i.ng',
    packageType: 'Custom',
    amount: 5000,
    status: 'pending',
    date: 'Dec 1, 2024',
    profession: 'Medical Doctor',
    professionalSummary: 'Experienced medical doctor with a passion for public health.',
    workHistory: 'Hospital X (2020-Present), Clinic Y (2018-2020)',
    education: 'University of Z (MD)',
    technicalSkills: 'Patient Care, Diagnosis',
    softSkills: 'Communication, Empathy',
  },
  {
    id: 'MCV20241202GHI789',
    customerName: 'Chioma Nwankwo',
    customerEmail: 'chioma@email.com',
    domain: 'chioma.mycv.i.ng',
    packageType: 'With CV',
    amount: 2500,
    status: 'completed',
    date: 'Dec 2, 2024',
    profession: 'Business Analyst',
    cvFile: 'chioma_cv.pdf',
    cvFilePath: '/uploads/cvs/chioma_cv.pdf',
  },
  {
    id: 'MCV20241203JKL012',
    customerName: 'Ahmed Bello',
    customerEmail: 'ahmed@email.com',
    domain: 'ahmed.mycv.i.ng',
    packageType: 'Custom',
    amount: 5000,
    status: 'delivered',
    date: 'Dec 3, 2024',
    profession: 'Financial Consultant',
    professionalSummary: 'Financial expert with 10+ years experience.',
    workHistory: 'Bank A (2015-Present)',
    education: 'University of B (MBA)',
    technicalSkills: 'Financial Modeling, Risk Assessment',
    softSkills: 'Negotiation, Leadership',
  },
];

const emailTemplates = {
  'order-confirmation': {
    subject: '🎉 Order Confirmed - Your CV Website is Coming!',
    message: `Dear {{customer_name}},

Thank you for choosing MyCV.i.ng! 🇳🇬

Your order has been confirmed and we're excited to create your professional CV website.

Order Details:
- Order Reference: {{order_reference}}
- Domain: {{domain}}.mycv.i.ng
- Package: {{package_type}}
- Amount: ₦{{amount}}

What happens next?
1. Our team will start working on your website within 24 hours
2. You'll receive progress updates via email
3. Your website will be delivered within {{delivery_time}}

We're proud to be a Nigerian company helping Nigerian professionals succeed worldwide!

Best regards,
The MyCV.i.ng Team 🚀`
  },
  'in-progress': {
    subject: '🚀 Your CV Website is Being Created!',
    message: `Dear {{customer_name}},

Great news! We've started working on your CV website. 🎨

Our team is currently:
- Processing your information
- Designing your professional layout
- Optimizing for mobile and desktop

Your website {{domain}}.mycv.i.ng will be ready soon!

We'll notify you as soon as it's completed.

Best regards,
The MyCV.i.ng Team`
  },
  'completed': {
    subject: '✅ Your CV Website is Ready!',
    message: `Dear {{customer_name}},

Fantastic news! Your professional CV website is now complete! 🎉

You can view your new website at: https://{{domain}}.mycv.i.ng

Features included:
- Mobile-responsive design
- Professional layout
- SEO optimized
- Fast loading speed

We're conducting final quality checks and will deliver it to you within the next few hours.

Thank you for choosing MyCV.i.ng - proudly Nigerian! 🇳🇬

Best regards,
The MyCV.i.ng Team`
  },
  'delivered': {
    subject: '🎊 Your CV Website Has Been Delivered!',
    message: `Dear {{customer_name}},

Your professional CV website is now live and ready to impress! 🌟

🔗 Your Website: https://{{domain}}.mycv.i.ng

What you can do now:
- Share your website link with potential employers
- Update your LinkedIn profile with your new website
- Include the link in your email signature
- Print business cards with your website URL

Need any changes or have questions? Just reply to this email.

Thank you for trusting MyCV.i.ng with your professional online presence!

Proudly Nigerian, Globally Professional! 🇳🇬

Best regards,
The MyCV.i.ng Team`
  }
};

const AdminDashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [pendingOrdersCount, setPendingOrdersCount] = useState(simulatedOrders.filter(o => o.status === 'pending').length);

  const [selectedOrderForGen, setSelectedOrderForGen] = useState<typeof simulatedOrders[0] | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const [emailRecipient, setEmailRecipient] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [selectedEmailTemplate, setSelectedEmailTemplate] = useState('');

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState<typeof simulatedOrders[0] | null>(null);

  const showSection = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const showLoadingOverlay = () => setIsLoading(true);
  const hideLoadingOverlay = () => setIsLoading(false);

  const refreshDashboard = () => {
    showLoadingOverlay();
    const loadingToast = showLoading('Refreshing dashboard...');
    setTimeout(() => {
      setLastUpdated(new Date().toLocaleTimeString());
      setPendingOrdersCount(simulatedOrders.filter(o => o.status === 'pending').length);
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Dashboard refreshed successfully!');
    }, 1500);
  };

  const viewOrder = (orderId: string) => {
    const order = simulatedOrders.find(o => o.id === orderId);
    if (order) {
      setCurrentOrderDetails(order);
      setIsOrderModalOpen(true);
    } else {
      showError('Order not found.');
    }
  };

  const exportOrders = () => {
    showLoadingOverlay();
    const loadingToast = showLoading('Exporting orders to CSV...');
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Orders exported successfully!');
    }, 2000);
  };

  const selectOrderForGeneration = (orderId: string) => {
    const order = simulatedOrders.find(o => o.id === orderId);
    if (order) {
      setSelectedOrderForGen(order);
      showSuccess(`Order ${orderId} selected for generation.`);
    } else {
      showError('Order not found.');
    }
  };

  const selectTemplate = (templateName: string) => {
    setSelectedTemplate(templateName);
    showSuccess(`Template '${templateName}' selected.`);
  };

  const generateWebsiteNow = () => {
    if (!selectedOrderForGen) {
      showError('Please select an order first.');
      return;
    }
    if (!selectedTemplate) {
      showError('Please choose a template.');
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(0);
    showLoadingOverlay();
    const loadingToast = showLoading(`Generating website for ${selectedOrderForGen.domain}...`);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      if (progress <= 100) {
        setGenerationProgress(progress);
      }
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          hideLoadingOverlay();
          dismissToast(loadingToast);
          showSuccess(`Website for ${selectedOrderForGen.domain} generated successfully!`);
          setIsGenerating(false);
          setSelectedOrderForGen(null);
          setGenerationProgress(0);
          // In a real app, you'd update the order status in the backend/state
        }, 500);
      }
    }, 500);
  };

  const generateBulkWebsites = () => {
    showLoadingOverlay();
    const loadingToast = showLoading('Bulk generation started for pending orders...');
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Bulk generation completed for 5 pending orders!');
    }, 2000);
  };

  const previewTemplate = (templateName: string) => {
    showError('Template preview not implemented yet.');
    // window.open(`/templates/preview/${templateName}`, '_blank');
  };

  const editTemplate = (templateName: string) => {
    showError(`Template editor for ${templateName} not implemented yet.`);
  };

  const createNewTemplate = () => {
    showError('Template creator not implemented yet.');
  };

  const loadEmailTemplate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const templateName = e.target.value;
    setSelectedEmailTemplate(templateName);
    const template = emailTemplates[templateName as keyof typeof emailTemplates];

    if (template) {
      setEmailSubject(template.subject);
      setEmailMessage(template.message);
    } else {
      setEmailSubject('');
      setEmailMessage('');
    }
  };

  const sendNotificationEmail = () => {
    if (!emailRecipient || !emailSubject || !emailMessage) {
      showError('Please fill in all fields.');
      return;
    }

    showLoadingOverlay();
    const loadingToast = showLoading('Sending email...');
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Email sent successfully!');
      // Clear form
      setEmailRecipient('');
      setEmailSubject('');
      setEmailMessage('');
      setSelectedEmailTemplate('');
    }, 2000);
  };

  const previewEmail = () => {
    if (!emailSubject || !emailMessage) {
      showError('Please fill in subject and message.');
      return;
    }

    const previewWindow = window.open('', '_blank', 'width=600,height=800');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
        <head><title>Email Preview</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>${emailSubject}</h2>
            <div style="white-space: pre-wrap; line-height: 1.6;">${emailMessage}</div>
        </body>
        </html>
      `);
    }
  };

  const sendNotification = (orderRef: string) => {
    showLoadingOverlay();
    const loadingToast = showLoading(`Sending notification for ${orderRef}...`);
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess(`Notification sent for ${orderRef}!`);
    }, 1500);
  };

  const sendBulkNotifications = () => {
    showLoadingOverlay();
    const loadingToast = showLoading('Bulk notifications sent to 8 customers...');
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Bulk notifications sent successfully!');
    }, 2500);
  };

  const editEmailTemplate = (templateName: keyof typeof emailTemplates) => {
    const template = emailTemplates[templateName];
    if (template) {
      setSelectedEmailTemplate(templateName);
      setEmailSubject(template.subject);
      setEmailMessage(template.message);
      showSuccess(`Loaded '${templateName}' template for editing.`);
      setActiveSection('notifications'); // Switch to notifications section
    } else {
      showError('Template not found.');
    }
  };

  const previewEmailTemplate = (templateName: keyof typeof emailTemplates) => {
    const template = emailTemplates[templateName];
    if (template) {
      const previewWindow = window.open('', '_blank', 'width=600,height=800');
      if (previewWindow) {
        previewWindow.document.write(`
          <html>
          <head><title>Template Preview - ${templateName}</title></head>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>${template.subject}</h2>
              <div style="white-space: pre-wrap; line-height: 1.6;">${template.message}</div>
          </body>
          </html>
        `);
      }
    } else {
      showError('Template not found.');
    }
  };

  const saveSettings = () => {
    showLoadingOverlay();
    const loadingToast = showLoading('Saving settings...');
    setTimeout(() => {
      hideLoadingOverlay();
      dismissToast(loadingToast);
      showSuccess('Settings saved successfully!');
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSection === 'dashboard') {
        setLastUpdated(new Date().toLocaleTimeString());
      }
    }, 300000); // Auto-refresh dashboard every 5 minutes
    return () => clearInterval(interval);
  }, [activeSection]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'delivered': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="spinner mx-auto mb-4"></div>
            <p className="text-gray-600">Processing...</p>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white flex flex-col">
          <div className="p-6 flex-grow">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🇳🇬</span>
              <h1 className="text-xl font-bold">MyCV.i.ng Admin</h1>
            </div>

            <nav className="space-y-2">
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'dashboard' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('dashboard')}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'orders' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('orders')}
              >
                <ClipboardList className="w-5 h-5" />
                <span>Orders</span>
                {pendingOrdersCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{pendingOrdersCount}</span>
                )}
              </div>
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'generator' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('generator')}
              >
                <Palette className="w-5 h-5" />
                <span>CV Generator</span>
              </div>
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'templates' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('templates')}
              >
                <FileText className="w-5 h-5" />
                <span>Templates</span>
              </div>
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'notifications' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('notifications')}
              >
                <Mail className="w-5 h-5" />
                <span>Notifications</span>
              </div>
              <div
                className={`sidebar-item px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition-all duration-300 ${activeSection === 'settings' ? 'active bg-white/20 border-r-4 border-green-400' : 'hover:bg-white/10'}`}
                onClick={() => showSection('settings')}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
            </nav>
          </div>

          <div className="p-6 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs opacity-75">admin@mycv.i.ng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Dashboard Section */}
          {activeSection === 'dashboard' && (
            <div id="dashboard-section" className="section-content p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Last updated: <span id="last-updated">{lastUpdated}</span></span>
                  <button onClick={refreshDashboard} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> Refresh
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-900">247</p>
                      <p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +12% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">₦892,500</p>
                      <p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +18% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                      <p className="text-3xl font-bold text-gray-900">{pendingOrdersCount}</p>
                      <p className="text-sm text-orange-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Needs attention</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completed</p>
                      <p className="text-3xl font-bold text-gray-900">239</p>
                      <p className="text-sm text-green-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 96.8% success rate</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    {simulatedOrders.slice(0, 3).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => viewOrder(order.id)}>
                        <div>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-sm text-gray-600">{order.domain}</p>
                        </div>
                        <span className={`status-badge px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(order.status)}`}>{order.status.replace('-', ' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button onClick={() => showSection('orders')} className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-300 flex items-center gap-3">
                      <ClipboardList className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Process New Orders</p>
                        <p className="text-sm text-gray-600">{pendingOrdersCount} orders waiting</p>
                      </div>
                    </button>
                    <button onClick={() => showSection('generator')} className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition duration-300 flex items-center gap-3">
                      <Palette className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-medium">Generate CV Website</p>
                        <p className="text-sm text-gray-600">Create new websites</p>
                      </div>
                    </button>
                    <button onClick={() => showSection('notifications')} className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-300 flex items-center gap-3">
                      <Mail className="w-6 h-6 text-purple-600" />
                      <div>
                        <p className="font-medium">Send Notifications</p>
                        <p className="text-sm text-gray-600">Update customers</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Section */}
          {activeSection === 'orders' && (
            <div id="orders-section" className="section-content p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Order Management</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select className="appearance-none px-4 py-2 border border-gray-300 rounded-lg pr-8 focus:ring-blue-500 focus:border-blue-500">
                      <option>All Orders</option>
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                      <option>Delivered</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <button onClick={exportOrders} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                    <Download className="w-4 h-4" /> Export
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Order</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Customer</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Domain</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Package</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {simulatedOrders.map(order => (
                        <tr key={order.id} className="order-row hover:bg-gray-50 cursor-pointer" onClick={() => viewOrder(order.id)}>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-gray-500">{order.date}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium">{order.customerName}</p>
                              <p className="text-sm text-gray-500">{order.customerEmail}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium">{order.domain}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.packageType === 'With CV' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>{order.packageType}</span>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium">₦{order.amount.toLocaleString()}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`status-badge px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(order.status)}`}>{order.status.replace('-', ' ')}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button onClick={(e) => { e.stopPropagation(); selectOrderForGeneration(order.id); showSection('generator'); }} className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors" title="Generate Website">
                                <Palette className="w-5 h-5" />
                              </button>
                              <button onClick={(e) => { e.stopPropagation(); sendNotification(order.id); }} className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50 transition-colors" title="Send Notification">
                                <Mail className="w-5 h-5" />
                              </button>
                              <button onClick={(e) => { e.stopPropagation(); viewOrder(order.id); }} className="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-50 transition-colors" title="View Details">
                                <Eye className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CV Generator Section */}
          {activeSection === 'generator' && (
            <div id="generator-section" className="section-content p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">CV Website Generator</h2>
                <button onClick={generateBulkWebsites} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                  <Rocket className="w-4 h-4" /> Bulk Generate
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Order Selection */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Select Order</h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {simulatedOrders.map(order => (
                      <div
                        key={order.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${selectedOrderForGen?.id === order.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                        onClick={() => selectOrderForGeneration(order.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{order.customerName}</p>
                            <p className="text-sm text-gray-600">{order.profession}</p>
                            <p className="text-sm text-gray-500">{order.domain}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.packageType === 'With CV' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>{order.packageType}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Template Selection */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Choose Template</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`template-card border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${selectedTemplate === 'modern' ? 'selected border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => selectTemplate('modern')}
                    >
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-medium">Modern</p>
                        <p className="text-sm text-gray-600">Clean & Professional</p>
                      </div>
                    </div>
                    <div
                      className={`template-card border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${selectedTemplate === 'creative' ? 'selected border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => selectTemplate('creative')}
                    >
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-medium">Creative</p>
                        <p className="text-sm text-gray-600">Bold & Artistic</p>
                      </div>
                    </div>
                    <div
                      className={`template-card border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${selectedTemplate === 'corporate' ? 'selected border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => selectTemplate('corporate')}
                    >
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-medium">Corporate</p>
                        <p className="text-sm text-gray-600">Traditional & Formal</p>
                      </div>
                    </div>
                    <div
                      className={`template-card border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${selectedTemplate === 'tech' ? 'selected border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => selectTemplate('tech')}
                    >
                      <div className="text-center">
                        <div className="w-full h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg mb-3 flex items-center justify-center">
                          <Settings className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-medium">Tech</p>
                        <p className="text-sm text-gray-600">Developer Focused</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={generateWebsiteNow}
                      disabled={!selectedOrderForGen || isGenerating}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <div className="spinner w-5 h-5 border-white border-t-blue-300"></div> Generating...
                        </>
                      ) : (
                        <>
                          <Rocket className="w-5 h-5" /> Generate Website
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Generation Progress */}
              {isGenerating && (
                <div id="generation-progress" className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Generation Progress</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>Processing order data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="spinner w-3 h-3 border-white border-t-blue-300"></div>
                      </div>
                      <span>Generating HTML structure ({generationProgress}%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${generationProgress > 40 ? 'bg-blue-500' : 'bg-gray-300'}`}>
                        {generationProgress > 40 ? <div className="spinner w-3 h-3 border-white border-t-blue-300"></div> : <span className="text-gray-600 text-xs">○</span>}
                      </div>
                      <span className={`${generationProgress > 40 ? 'text-gray-800' : 'text-gray-500'}`}>Applying template styles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${generationProgress > 70 ? 'bg-blue-500' : 'bg-gray-300'}`}>
                        {generationProgress > 70 ? <div className="spinner w-3 h-3 border-white border-t-blue-300"></div> : <span className="text-gray-600 text-xs">○</span>}
                      </div>
                      <span className={`${generationProgress > 70 ? 'text-gray-800' : 'text-gray-500'}`}>Deploying to subdomain</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Templates Section */}
          {activeSection === 'templates' && (
            <div id="templates-section" className="section-content p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">CV Templates</h2>
                <button onClick={createNewTemplate} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" /> New Template
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Modern Template */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Palette className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Modern Professional</h3>
                    <p className="text-gray-600 mb-4">Clean, minimalist design perfect for professionals in any industry.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Used 127 times</span>
                      <div className="flex gap-2">
                        <button onClick={() => previewTemplate('modern')} className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors" title="Preview">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button onClick={() => editTemplate('modern')} className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50 transition-colors" title="Edit">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creative Template */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Creative Portfolio</h3>
                    <p className="text-gray-600 mb-4">Bold and artistic design for creative professionals and designers.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Used 89 times</span>
                      <div className="flex gap-2">
                        <button onClick={() => previewTemplate('creative')} className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors" title="Preview">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button onClick={() => editTemplate('creative')} className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50 transition-colors" title="Edit">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Template */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <Building className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Corporate Executive</h3>
                    <p className="text-gray-600 mb-4">Traditional and formal design for corporate executives and managers.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Used 156 times</span>
                      <div className="flex gap-2">
                        <button onClick={() => previewTemplate('corporate')} className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors" title="Preview">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button onClick={() => editTemplate('corporate')} className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-50 transition-colors" title="Edit">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div id="notifications-section" className="section-content p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Email Notifications</h2>
                <button onClick={sendBulkNotifications} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Bulk Send
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Email Composer */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Compose Notification</h3>
                  <form onSubmit={(e) => { e.preventDefault(); sendNotificationEmail(); }}>
                    <div className="mb-4">
                      <label htmlFor="recipient-select" className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
                      <div className="relative">
                        <select
                          id="recipient-select"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none pr-8 focus:ring-blue-500 focus:border-blue-500"
                          value={emailRecipient}
                          onChange={(e) => setEmailRecipient(e.target.value)}
                          required
                        >
                          <option value="">Select customer...</option>
                          {simulatedOrders.map(order => (
                            <option key={order.id} value={order.customerEmail}>{order.customerName} ({order.customerEmail})</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email-template" className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                      <div className="relative">
                        <select
                          id="email-template"
                          onChange={loadEmailTemplate}
                          value={selectedEmailTemplate}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none pr-8 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Custom Email</option>
                          <option value="order-confirmation">Order Confirmation</option>
                          <option value="in-progress">Work In Progress</option>
                          <option value="completed">Website Completed</option>
                          <option value="delivered">Website Delivered</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email-subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="email-subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email subject..."
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email-message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        id="email-message"
                        rows={8}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email message..."
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <div className="flex gap-3">
                      <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" /> Send Email
                      </button>
                      <button type="button" onClick={previewEmail} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" /> Preview
                      </button>
                    </div>
                  </form>
                </div>

                {/* Email Templates */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Email Templates</h3>
                  <div className="space-y-4">
                    {Object.entries(emailTemplates).map(([key, template]) => (
                      <div key={key} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <h4 className="font-medium mb-2 capitalize">{key.replace('-', ' ')}</h4>
                        <p className="text-sm text-gray-600 mb-3">{template.subject}</p>
                        <div className="flex gap-2">
                          <button onClick={() => editEmailTemplate(key as keyof typeof emailTemplates)} className="text-blue-600 hover:text-blue-800 text-sm p-1 rounded-full hover:bg-blue-50 transition-colors" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button onClick={() => previewEmailTemplate(key as keyof typeof emailTemplates)} className="text-green-600 hover:text-green-800 text-sm p-1 rounded-full hover:bg-green-50 transition-colors" title="Preview">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div id="settings-section" className="section-content p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Settings</h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* General Settings */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <input type="text" id="business-name" defaultValue="MyCV.i.ng" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="support-email" className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                      <input type="email" id="support-email" defaultValue="support@mycv.i.ng" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="default-template" className="block text-sm font-medium text-gray-700 mb-2">Default Template</label>
                      <div className="relative">
                        <select id="default-template" className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none pr-8 focus:ring-blue-500 focus:border-blue-500">
                          <option>Modern Professional</option>
                          <option>Creative Portfolio</option>
                          <option>Corporate Executive</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Settings */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Payment Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="paystack-public-key" className="block text-sm font-medium text-gray-700 mb-2">Paystack Public Key</label>
                      <input type="text" id="paystack-public-key" defaultValue="pk_live_****" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="cv-price" className="block text-sm font-medium text-gray-700 mb-2">With CV Price (₦)</label>
                      <input type="number" id="cv-price" defaultValue="2500" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="custom-cv-price" className="block text-sm font-medium text-gray-700 mb-2">Custom Creation Price (₦)</label>
                      <input type="number" id="custom-cv-price" defaultValue="5000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button onClick={saveSettings} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {isOrderModalOpen && currentOrderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Order Details: {currentOrderDetails.id}</h3>
              <button onClick={() => setIsOrderModalOpen(false)} className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500">Customer Name</p>
                <p className="font-medium text-gray-800">{currentOrderDetails.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{currentOrderDetails.customerEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Domain</p>
                <p className="font-medium text-gray-800">{currentOrderDetails.domain}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Package Type</p>
                <p className="font-medium text-gray-800">{currentOrderDetails.packageType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium text-gray-800">₦{currentOrderDetails.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadgeClass(currentOrderDetails.status)}`}>{currentOrderDetails.status.replace('-', ' ')}</span>
              </div>
            </div>

            {currentOrderDetails.packageType === 'With CV' && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">CV File</p>
                <a href={currentOrderDetails.cvFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> {currentOrderDetails.cvFile}
                </a>
              </div>
            )}

            {currentOrderDetails.packageType === 'Custom' && (
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">Custom CV Details</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li><strong>Profession:</strong> {currentOrderDetails.profession}</li>
                  <li><strong>Summary:</strong> {currentOrderDetails.professionalSummary}</li>
                  <li><strong>Work History:</strong> {currentOrderDetails.workHistory}</li>
                  <li><strong>Education:</strong> {currentOrderDetails.education}</li>
                  <li><strong>Skills:</strong> {currentOrderDetails.technicalSkills}, {currentOrderDetails.softSkills}</li>
                </ul>
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => { selectOrderForGeneration(currentOrderDetails.id); showSection('generator'); setIsOrderModalOpen(false); }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Palette className="w-5 h-5" /> Generate Website
              </button>
              <button onClick={() => { sendNotification(currentOrderDetails.id); setIsOrderModalOpen(false); }} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Mail className="w-5 h-5" /> Send Notification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;