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
function WeOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceInfo = [
    // Website Development
    {
      title: "Website Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and scalable websites tailored to your business needs.",
      icon: Globe,
      features: [
        "Responsive Design",
        "Modern Framworks",
        "Performance Optimization",
        "Fully Dynamic",
        "Seo Ready",
      ],
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      link: "",
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
      features: [
        "UI/UX Design",
        "Brand Integration",
        "Responsive for All Size",
        "User Experience",
        "User Friendly",
      ],
      gradient: "from-purple-600 via-pink-600 to-purple-800",
      link: "",
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
      features: [
        "Motion Graphics",
        "Color Correction",
        "Audio Enhancement",
        "Social Media Ready",
      ],
      gradient: "from-green-600 via-teal-600 to-green-800",
      link: "",
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
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
      ],
      gradient: "from-orange-600 via-red-600 to-orange-800",
      link: "/services/graphic-designing",
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
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Analytics Tracking",
      ],
      gradient: "from-yellow-600 via-orange-600 to-yellow-800",
      link: "/services/seo-optimization",
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
      features: [
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "PPC Advertising",
      ],
      gradient: "from-indigo-600 via-blue-600 to-indigo-800",
      link: "/services/digital-marketing",
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
      features: [
        "AI Chatbots",
        "Process Automation",
        "Machine Learning",
        "Custom AI Solutions",
      ],
      gradient: "from-cyan-600 via-blue-600 to-cyan-800",
      link: "/services/agentic-ai",
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
      features: [
        "Consulting Services",
        "Custom Solutions",
        "Technology Integration",
        "Ongoing Support",
      ],
      gradient: "from-rose-600 via-pink-600 to-rose-800",
      link: "/services/more-fields",
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
  const IconComponents = currentServices.icon

  return (
    <section className="w-full max-w-[1440px] border-2 border-fuchsia-600">
      <div>
        <h1>What We Offer</h1>
      </div>

    </section>
  );
}

export default WeOffer;
