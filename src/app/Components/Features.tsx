import { CheckCircle, Users, Clock, Award, Shield, Zap } from "lucide-react";

function Features() {
  const card = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description:
        "Work with experienced professionals who bring years of expertise to your project",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Fast Delivery",
      description:
        "We deliver high-quality results on time, every time, without compromising on quality.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Proven Results",
      description:
        "Our track record speaks for itself with successful projects and satisfied clients.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Reliable Support",
      description:
        "24/7 support and maintenance to ensure your project runs smoothly at all times.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Innovative Solutions",
      description:
        "We use cutting-edge technology and creative approaches to solve complex challenges.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-600" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure exceptional results.",
    },
  ];

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] h-auto mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-relaxed ">
            Why Work With US!
          </h1>

          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            We combine expertise, innovation, and dedication to deliver
            exceptional results that exceed expectations and drive your business
            forward.
          </p>
        </div>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {card.map((card, index) => {
            const borderColors = [
              "border-l-blue-500",
              "border-l-green-500",
              "border-l-purple-500",
              "border-l-red-500",
              "border-l-yellow-500",
              "border-l-teal-500",
            ];
            return (
              <div
                key={index}
                className={`rounded-xl p-8 border-l-4 hover:bg-gray-600 ${borderColors[index]}`}
              >
                <div className="flex items-center justify-center bg-gray-700 w-16 h-16 rounded-lg mb-6 mx-auto">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {card.title}
                </h3>
                <p className="text-white text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
