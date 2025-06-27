import React from 'react';
import { ArrowRight, Shield, Users, DollarSign, FileText, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import NewsScroller from '../components/NewsScroller';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Digital Notices",
      description: "Access all society notices and circulars online",
      link: "/notices"
    },
    {
      icon: DollarSign,
      title: "Financial Transparency",
      description: "View budget, expenses, and audit reports",
      link: "/finance"
    },
    {
      icon: Users,
      title: "Meeting Minutes",
      description: "Complete archive of AGM, SGM, and board meetings",
      link: "/meetings"
    },
    {
      icon: MessageSquare,
      title: "Grievance Portal",
      description: "Submit and track complaints efficiently",
      link: "/grievances"
    }
  ];

  const quickStats = [
    { label: "Total Units", value: "120", icon: "🏠" },
    { label: "Active Residents", value: "450", icon: "👥" },
    { label: "Maintenance Paid", value: "95%", icon: "💰" },
    { label: "Issues Resolved", value: "98%", icon: "✅" }
  ];

  const recentUpdates = [
    {
      title: "New Security Protocols",
      date: "March 12, 2024",
      type: "Security",
      description: "Enhanced visitor management system implemented"
    },
    {
      title: "AGM Notice Released",
      date: "March 10, 2024",
      type: "Meeting",
      description: "Annual General Meeting scheduled for March 15th"
    },
    {
      title: "Maintenance Budget Approved",
      date: "March 8, 2024",
      type: "Finance",
      description: "Q1 2024 budget allocation finalized"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsScroller />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-emerald-200">MAGNOLIA-SKYVIEW</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Your digital gateway to transparent society management, seamless communication, 
            and enhanced community living experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8">
              <FileText className="w-5 h-5 mr-2" />
              Latest Notices
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8">
              <MessageSquare className="w-5 h-5 mr-2" />
              File Grievance
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Society Management Made Easy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for transparent and efficient housing society operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button variant="outline" className="group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Updates</h2>
            <p className="text-gray-600">Stay informed with the latest society developments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      update.type === 'Security' ? 'bg-red-100 text-red-800' :
                      update.type === 'Meeting' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {update.type}
                    </span>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{update.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Digital Revolution
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Experience seamless society management with complete transparency and efficient communication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/notices">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8">
                <CheckCircle className="w-5 h-5 mr-2" />
                View All Notices
              </Button>
            </Link>
            <Link to="/grievances">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8">
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Grievance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
