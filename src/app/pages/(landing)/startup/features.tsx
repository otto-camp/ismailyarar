import {
  DollarSign,
  Lightbulb,
  PackageOpen,
  Scaling,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    name: "Innovation",
    desc: "Unique and disruptive offerings that solve problems or meet market needs.",
    icon: <Lightbulb />,
  },
  {
    name: "Scalability and Flexibility",
    desc: "Rapid growth and adaptability to changing market conditions.",
    icon: <Scaling />,
  },
  {
    name: "Personalized Customer Experience",
    desc: "Tailoring products/services to individual needs and providing customized support.",
    icon: <ThumbsUp />,
  },
  {
    name: "Cost Efficiency",
    desc: "Competitive pricing without compromising quality.",
    icon: <DollarSign />,
  },
  {
    name: "Agility",
    desc: "Swift adaptation to market feedback and changing customer demands.",
    icon: <DollarSign />,
  },
  {
    name: "Transparency",
    desc: "Open and authentic communication, fostering trust and long-term relationships.",
    icon: <PackageOpen />,
  },
];

export default function Features() {
  return (
    <>
      {features.map((feature) => (
        <div
          key={feature.name}
          className="border rounded-xl border-gray-300 hover:border-gray-700 duration-300 mx-auto p-4 w-full max-w-xs"
        >
          <div className="flex justify-start items-center gap-4">
            <span className="p-2 bg-emerald-700 rounded-lg">
              {feature.icon}
            </span>
            <h3>{feature.name}</h3>
          </div>
          <p>{feature.desc}</p>
        </div>
      ))}
    </>
  );
}
