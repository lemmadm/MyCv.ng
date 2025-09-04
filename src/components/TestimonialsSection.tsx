import React from 'react';
import { Star } from 'lucide-react'; // Using lucide-react for icons

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from Nigerian professionals who transformed their careers with a MyCV.i.ng website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <img src="images/pexels-ivan-samkov-7620920.jpg" alt="Customer 1" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
            <div className="flex text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "MyCV.i.ng is a game-changer! I got my professional website in less than 24 hours, and it helped me land my dream job. Highly recommended!"
            </p>
            <p className="font-bold text-gray-900">- Aisha M., Software Engineer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <img src="images/pexels-andrea-piacquadio-3767397.jpg" alt="Customer 2" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
            <div className="flex text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "I never thought having an online CV could make such a difference. MyCV.i.ng made it so easy and affordable. Employers are impressed!"
            </p>
            <p className="font-bold text-gray-900">- David O., Marketing Manager</p>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <img src="images/pexels-ivan-samkov-7620564.jpg" alt="Customer 3" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
            <div className="flex text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "The team at MyCV.i.ng is fantastic! They were responsive and delivered a beautiful website that truly represents my professional brand. Thank you!"
            </p>
            <p className="font-bold text-gray-900">- Chika E., Business Consultant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;