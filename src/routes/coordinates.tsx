import { createFileRoute } from "@tanstack/react-router";
import { Grid3x3 } from "lucide-react";
import { MissionContent } from "@/components/MissionContent";

export const Route = createFileRoute("/coordinates")({
  head: () => ({
    meta: [
      { title: "Coordinates Mission (Topic 7.1) — Math Explorer" },
      { name: "description", content: "Learn, explore and practise coordinates: horizontal and vertical distance between two points (DSKP 7.1.1)." },
      { property: "og:title", content: "Coordinates Mission — Math Explorer" },
      { property: "og:description", content: "Year 5 coordinates mission with GeoGebra exploration and practice quiz." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-5xl">
      <MissionContent missionId="coordinates" icon={<Grid3x3 className="h-6 w-6" />} nextTo="/ratio" />
    </div>
  ),
});
