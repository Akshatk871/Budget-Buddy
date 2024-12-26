import React from 'react';
import { DollarSign, LineChart, Shield, Users } from 'lucide-react';

import home from "../assets/home.png";
import about from "../assets/about.png";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`p-6 rounded-lg ${className}`} {...props}>
    {children}
  </div>
);

export default function HomePage() {
  const services = [
    {
      title: "Money Management",
      description: "With experience in all market conditions, we recognize what processes and solutions.",
      icon: DollarSign
    },
    {
      title: "Financial Planning",
      description: "These plans may include investment strategies, savings plans, etc.",
      icon: LineChart
    },
    {
      title: "Strategic Partner",
      description: "Partner with us for comprehensive financial guidance and strategic planning.",
      icon: Users
    },
    {
      title: "Risk Management",
      description: "Protect your assets with our advanced risk management solutions.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f6]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-serif font-medium leading-tight text-[#1b3a2b]">
              Empower Your Financial Future with BudgetBuddy
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              We help businesses stand out in crowded markets. When customers have a positive experience with a brand, they are more likely to remember it.
            </p>
            <Button className="mt-8 bg-[#1b3a2b] hover:bg-[#2c5c44] text-white text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
          <div className="relative h-[400px]">
            <img
              src={home}
              alt="Financial Illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#1b3a2b] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-4">
            Financial Plan for Long-Term Success
          </h2>
          <p className="text-gray-200 mb-12 max-w-2xl">
            We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white text-[#1b3a2b] hover:shadow-lg transition-shadow">
                  <IconComponent className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img
              src={about}
              alt="About Us"
              className="object-cover rounded-2xl w-full h-full"
            />
          </div>
          <div>
            <span className="text-[#1b3a2b] font-medium">ABOUT US</span>
            <h2 className="text-4xl font-serif mt-2 mb-4">
              Providing Innovative Services and Solutions
            </h2>
            <p className="text-gray-600">
              We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b3a2b] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">BudgetBuddy</h3>
            <p className="text-gray-300">
              Simplifying complexity with innovative financial solutions.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-gray-300">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

