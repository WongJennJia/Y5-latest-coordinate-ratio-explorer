import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { MissionContent } from "@/components/MissionContent";

export const Route = createFileRoute("/ratio")({
  head: () => ({
    meta: [
      { title: "Ratio Mission (Topic 7.2) — Math Explorer" },
      { name: "description", content: "Learn, explore and practise ratio: Part to Part, Part to Whole and Whole to Part (DSKP 7.2.1)." },
      { property: "og:title", content: "Ratio Mission — Math Explorer" },
      { property: "og:description", content: "Year 5 ratio mission with interactive exploration and practice quiz." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-5xl">
      <MissionContent missionId="ratio" icon={<Scale className="h-6 w-6" />} nextTo="/proportion" />
    </div>
  ),
});
