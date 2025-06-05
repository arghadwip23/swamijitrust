import { ShieldCheck } from "lucide-react";

const badges = [
  "Registered NGO",
  "12A & 80G Certified",
  "100% Transparent Operations",
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-6">
      {badges.map((text, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2   px-4 py-4 text-orange-300  "
        >
          <ShieldCheck className="w-6 h-6 " />
          <span className="text-lg font-bold">{text}</span>
        </div>
      ))}
    </div>
  );
}
