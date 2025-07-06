"use client"

import { useState, useEffect } from "react"
import {
  Globe,
  Palette,
  Video,
  ImageIcon,
  Search,
  TrendingUp,
  Bot,
  Plus,
  ArrowRight,
  Star,
  Heart,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "next-sanity"

const sanity = createClient({
  projectId: "5o717i87",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-01",
})

// Icon mapping for dynamic icons
const iconMap = {
  Globe,
  Palette,
  Video,
  ImageIcon,
  Search,
  TrendingUp,
  Bot,
  Plus,
}

interface SanityService {
  _id: string
  title: string
  description: string
  features: string[]
  gradient: string
  link: string
  icons: string
  image: string
  imageAlt: string
}

export default function Services() {
  const [serviceInfo, setServiceInfo] = useState<SanityService[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchServices = async () => {
    try {
      setLoading(true)
      const query = `*[_type == "Services"] | order(_createdAt asc){
        _id,
        title,
        description,
        features,
        gradient,
        link,
        icons,
        "image": image.asset->url,
        imageAlt
      }`
      const data = await sanity.fetch(query)
      return data
    } catch (error) {
      console.error("Failed to fetch services:", error)
      setError("Failed to load services. Please try again later.")
      return []
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServices()
      setServiceInfo(data)
    }
    getData()
  }, [])

  const toggleFavorite = (serviceId: string) => {
    setFavorites((prev) => (prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]))
  }

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Globe
  }

  const getServiceCategory = (title: string) => {
    // Simple category mapping based on service title
    if (title.toLowerCase().includes("website") || title.toLowerCase().includes("web")) return "Development"
    if (title.toLowerCase().includes("design")) return "Design"
    if (title.toLowerCase().includes("video")) return "Media"
    if (title.toLowerCase().includes("seo")) return "Marketing"
    if (title.toLowerCase().includes("marketing")) return "Marketing"
    if (title.toLowerCase().includes("ai")) return "Technology"
    return "Services"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Loading our amazing services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <p className="text-gray-300 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            What We Offer!
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-blue-400">Service</span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive digital solutions with cutting-edge technology to elevate your business to new heights
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 border border-blue-500/30 text-blue-300 rounded-full">
              {serviceInfo.length} Services Available
            </span>
            <span className="px-3 py-1 border border-green-500/30 text-green-300 rounded-full">Expert Team</span>
            <span className="px-3 py-1 border border-purple-500/30 text-purple-300 rounded-full">Custom Solutions</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {serviceInfo.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <p className="text-gray-300 text-lg">No services available at the moment.</p>
            <p className="text-gray-500 text-sm mt-2">Please check back later or contact us for more information.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceInfo.map((service, index) => {
              const IconComponent = getIconComponent(service.icons)
              const isFavorite = favorites.includes(service._id)
              const category = getServiceCategory(service.title)
              const isPopular = index < 3 // Mark first 3 services as popular

              return (
                <div
                  key={service._id}
                  className="group relative bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden backdrop-blur-sm rounded-lg"
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-md">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(service._id)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-200"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFavorite ? "fill-red-500 text-red-500" : "text-white hover:text-red-400"
                      }`}
                    />
                  </button>

                  {/* Service Image Header */}
                  <div className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg?height=300&width=400&text=Service"}
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
                  <div className="p-6">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">{category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-300">4.8</span>
                        <span className="text-xs text-gray-500">(New)</span>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 text-xs border border-gray-600/50 text-gray-400 hover:border-gray-500/50 rounded-md transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-2 py-1 text-xs border border-gray-600/50 text-gray-400 rounded-md">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Service Footer */}
                  <div className="p-6 pt-0">
                    {/* Pricing */}
                    <div className="flex items-center justify-between w-full mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">Contact Us</span>
                        <span className="text-sm text-gray-400">for pricing</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 w-full">
                      <Link href={service.link || "/contact"} className="flex-1">
                        <button
                          className={`w-full bg-gradient-to-r ${service.gradient || "from-blue-600 to-purple-600"} hover:opacity-90 text-white border-0 px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center group`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {
                "Don't see exactly what you're looking for? We specialize in creating custom digital solutions tailored to your unique business needs."
              }
            </p>
            <Link href="/Contact">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md font-medium transition-all duration-200 flex items-center justify-center mx-auto">
                Contact Us for Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
