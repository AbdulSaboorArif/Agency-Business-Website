"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Palette,
  Video,
  ImageIcon,
  Search,
  TrendingUp,
  Bot,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function WeOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceInfo = [
    // Website Development
    {
      title: "Website Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and scalable websites tailored to your business needs.",
      icon: Globe,
      feature: [
        "Responsive Design",
        "Modern Framworks",
        "Performance Optimization",
        "Fully Dynamic",
        "Seo Ready",
      ],
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      link: "/Services/DynamicServices",
      image: "",
      imageAlt:
        "Modern web development workspace with code editor and responsive design mockups",
    },

    // Website Designing
    {
      title: "Website Designing",
      description:
        "Creative and user-friendly website designs that capture your brand essence. We focus on UI/UX principles to create engaging digital experiences.",
      icon: Palette,
      feature: [
        "UI/UX Design",
        "Brand Integration",
        "Responsive for All Size",
        "User Experience",
        "User Friendly",
      ],
      gradient: "from-purple-600 via-pink-500 to-purple-800",
      link: "/Services/DynamicServices",
      image: "",
      imageAlt:
        "Creative design workspace with color palettes, wireframes, and design tools",
    },

    // Video Editing
    {
      title: "Video Editing",
      description:
        "Professional video editing services fro marketing content, social media, tutorials and promotional videos. We bring you vision to life with creative storytelling",
      icon: Video,
      feature: [
        "Motion Graphics",
        "Color Correction",
        "Audio Enhancement",
        "Social Media Ready",
      ],
      gradient: "from-green-600 via-teal-500 to-green-800",
      link: "/Services/DynamicServices",
      image: "",
      imageAlt:
        "Professional video editing setup with timeline, effects, and preview monitors",
    },

    // Graphic Designing
    {
      title: "Graphic Designing",
      description:
        "Eye-catching visual designs for branding, marketing materials, social media content, and print media. We create designs that communicate your message effectively.",
      icon: ImageIcon,
      feature: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
      ],
      gradient: "from-orange-500 via-red-500 to-orange-500",
      link: "/Services/DynamicServices",
      image: "/placeholder.svg?height=400&width=500&text=Graphic+Design",
      imageAlt:
        "Creative graphic design workspace with logos, branding materials, and design tools",
    },

    // Seo Optimization
    {
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your website's visibility and ranking on search engines. We help drive organic traffic and increase online presence.",
      icon: Search,
      feature: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Analytics Tracking",
      ],
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      link: "/Services/DynamicServices",
      image: "/placeholder.svg?height=400&width=500&text=SEO+Analytics",
      imageAlt:
        "SEO analytics dashboard showing search rankings, traffic growth, and keyword performance",
    },

    // Digital Marketing
    {
      title: "Digital Marketing",
      description:
        "Full-service digital marketing solutions including social media marketing, content strategy, email campaigns, and online advertising to grow your business.",
      icon: TrendingUp,
      feature: [
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "PPC Advertising",
      ],
      gradient: "from-indigo-600 via-blue-600 to-indigo-800",
      link: "/Services/DynamicServices",
      image: "/placeholder.svg?height=400&width=500&text=Digital+Marketing",
      imageAlt:
        "Digital marketing dashboard with social media metrics, campaign analytics, and growth charts",
    },

    // Agentic AI Creation
    {
      title: "Agentic AI Creation",
      description:
        "Cutting-edge AI solutions and intelligent agents that automate processes, enhance user experiences, and provide smart business insights using the latest AI technologies.",
      icon: Bot,
      feature: [
        "AI Chatbots",
        "Process Automation",
        "Machine Learning",
        "Custom AI Solutions",
      ],
      gradient: "from-cyan-600 via-blue-600 to-cyan-800",
      link: "/Services/DynamicServices",
      image: "/placeholder.svg?height=400&width=500&text=AI+Technology",
      imageAlt:
        "Futuristic AI interface with neural networks, chatbot interactions, and machine learning visualizations",
    },
    // Add More Fields
    {
      title: "And More Fields",
      description:
        "We continuously expand our services to meet evolving digital needs. From emerging technologies to specialized solutions, we're here to help your business thrive.",
      icon: Plus,
      feature: [
        "Consulting Services",
        "Custom Solutions",
        "Technology Integration",
        "Ongoing Support",
      ],
      gradient: "from-rose-500 via-pink-500 to-rose-500",
      link: "/Services/DynamicServices",
      image: "/placeholder.svg?height=400&width=500&text=Innovation+Hub",
      imageAlt:
        "Innovation workspace with emerging technologies, consulting materials, and solution blueprints",
    },
  ];

  const nextServices = () => {
    setCurrentIndex((pervIndex) => (pervIndex + 1) % serviceInfo.length);
  };

  const prevServices = () => {
    setCurrentIndex(
      (pervIndex) => (pervIndex - 1 + serviceInfo.length) % serviceInfo.length
    );
  };

  const currentServices = serviceInfo[currentIndex];
  const IconComponents = currentServices.icon;

  return (
    <section className="py-20 px-4 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl sm:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            What We Offer
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Comprehensive digital solutions with cutting-edge technology to
            elevate your business
          </p>
        </div>

        <div className="relative perspective-1000">
          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white shadow-2xl rounded-lg"
            onClick={prevServices}
          >
            <ChevronLeft className="w-10 h-10 " />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white shadow-2xl rounded-lg"
            onClick={nextServices}
          >
            <ChevronRight className="w-10 h-10 " />
          </button>

          {/* 3D Service Card with Split Layout */}
          <div className="lg:mx-12 sm:mx-2 transform-gpu transition-all duration-700 ease-out hover:scale-105">
            <div className="relative group">
              {/* Card Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transform rotate-1 scale-105 opacity-30 blur-sm"></div>

              {/* Main Card */}
              <div
                className={`relative bg-gradient-to-br ${currentServices.gradient} p-1 rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-4xl hover:-translate-y-2`}
              >
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-white/10 relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/10 rounded-full animate-pulse"></div>
                  </div>

                  {/* Split Layout Content */}
                  <div className="grid lg:grid-cols-2 gap-0 relative">
                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex p-4 bg-gradient-to-br ${currentServices.gradient} rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3`}
                        >
                          <IconComponents className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {currentServices.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {currentServices.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {currentServices.feature.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${currentServices.gradient} rounded-full shadow-lg`}
                            ></div>
                            <span className="text-gray-200 font-medium text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link href={currentServices.link}>
                          <button
                            className={`bg-gradient-to-r ${currentServices.gradient} hover:scale-105 transform transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl group w-full sm:w-auto`}
                          >
                            Explore Service
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative lg:min-h-[500px] min-h-[300px] overflow-hidden rounded-r-3xl lg:rounded-l-none rounded-l-3xl">
                      {/* Image Container with 3D Effect */}
                      <div className="absolute inset-0 transform transition-all duration-500 hover:scale-110">
                        <Image
                          src={currentServices.image || "/placeholder.svg"}
                          alt={currentServices.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Image Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-l ${currentServices.gradient} opacity-20`}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/20 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Counter */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <span className="font-medium">
              {currentIndex + 1} of {serviceInfo.length}
            </span>
            <div className="space-x-4">
              {serviceInfo.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index == currentIndex
                      ? `bg-gradient-to-r ${currentServices.gradient} shadow-lg scale-125`
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeOffer;
