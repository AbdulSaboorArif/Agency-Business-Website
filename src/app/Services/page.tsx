"use client";

import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
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

// Sanity Client Configuration
const sanity = createClient({
  projectId: "5o717i87",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-01",
});

// Icons for Services
const serviceIcons = {
  Globe,
  Palette,
  Video,
  ImageIcon,
  Search,
  TrendingUp,
  Bot,
  Plus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
};

// Type Definition for Service Data
export interface SanityService {
  _id: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  link: string;
  icons: string[];
  image: string;
  imageAlt: string;
}

export default function Services() {
  const [serviceInfo, setServiceInfo] = useState<SanityService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching Services Data from Sanity
  const fetchServices = async () => {
    setLoading(true);
    try {
      const query = `*[_type == "Services"] | order(_createdAt asc) {
        _id,
        title,
        description,
        features,
        gradient,
        link,
        icons,
        "image": image.asset->url,
        imageAlt
        }`;
      const data = await sanity.fetch<SanityService[]>(query);
      return data;
    } catch (error) {
      console.error("Failed to fetch services:", error);
      setError("Failed to load services. Please try again later.");
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Run Time Confinguration using use Effect

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServices();
      setServiceInfo(data);
    };
    getData();
  });

  const getServicesCategory = (title: string) => {
    // Simple categroy maping based on title
    if (
      title.toLowerCase().includes("website") ||
      title.toLowerCase().includes("web")
    )
      return "Development";
    if (title.toLowerCase().includes("design")) return "Design";
    if (title.toLowerCase().includes("video")) return "Media";
    if (title.toLowerCase().includes("seo")) return "Marketing";
    if (title.toLowerCase().includes("marketing")) return "Marketing";
    if (title.toLowerCase().includes("ai")) return "Technology";
    return "Services";
  };

  const getIconsComponents = (iconName: string) => {
    return serviceIcons[iconName as keyof typeof serviceIcons] || Globe;
  };

  return (
    <>
      <Header />
      <main>
        <div>
          {/* BackGround Images */}
          <div>
            <div>
              <h1>What We Offer!</h1>
              <div>
                <Link href="/">Home</Link>
                <span>{">"}</span>
                <span>Service</span>
              </div>
            </div>
          </div>

          {/* Buttom Content */}
          <div>
            <div>
              <h1>Our Digital Services</h1>
              <p>
                Comprehensive digital solutions with cutting-edge technology to
                elevate your business to new heights
              </p>
            </div>
            {/* Services Card Grid */}
            <div>
              {serviceInfo.length === 0 ? (
                <div>
                  <p className="text-gray-300 text-lg">
                    No services available at the moment.
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Please check back later or contact us for more information.
                  </p>
                </div>
              ) : (
                <div>
                  {serviceInfo.map((service, index) => {
                    // Use the first icon if available, otherwise fallback to 'Globe'
                    const IconComponent = getIconsComponents(service.icons && service.icons[0]) || Globe;
                    const category = getServicesCategory(service.title);
                    return (
                      <div key={service._id}>
                        {/* Image Section */}

                        {/* Service Image Header */}
                        <div className="p-0">
                          <div className="relative h-48 overflow-hidden">p
                            <Image
                              src={
                                service.image ||
                                "/placeholder.svg?height=300&width=400&text=Service"
                              }
                              alt={service.imageAlt || service.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${service.gradient || "from-blue-600 to-purple-600"} opacity-20`}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                            {/* Service Icon */}
                            <div className="absolute bottom-4 left-4">
                              <div
                                className={`p-3 bg-gradient-to-br ${service.gradient || "from-blue-600 to-purple-600"} rounded-lg shadow-lg`}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Service Content */}
                        <div>
                          <h1 className="text-xl font-semibold">{service.title}</h1>
                          <p className="text-white">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
