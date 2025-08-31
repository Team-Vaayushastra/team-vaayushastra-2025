import {
  Globe,
  Megaphone,
  Share2,
  CheckCircle,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "International Exposure",
      desc: "Increase exposure of your company and its products among participants and attendees.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Marketing Campaign",
      desc: "Your company's background and products will be featured on our website, banners, brochures, and team uniforms.",
      icon: Megaphone,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Social Media Promotion",
      desc: "We will promote your brand on our social media platforms within 7 days of sponsorship payment.",
      icon: Share2,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Product Acceptability",
      desc: "Gain product acceptance among current and future potential customers globally.",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Product Testing",
      desc: "Your products will be tested and demonstrated on the ground.",
      icon: FlaskConical,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Social Responsibility",
      desc: "Invest in developing future technical talent.",
      icon: HeartHandshake,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
        Benefits of Supporting Us
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={i}
              className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition transform hover:-translate-y-1"
            >
              {/* Icon circle */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r ${b.color} text-white shadow-lg`}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Title + desc */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-300 transition">
                {b.title}
              </h3>
              <p className="text-gray-300 text-sm">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
