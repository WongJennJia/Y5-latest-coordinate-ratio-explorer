import { createFileRoute } from "@tanstack/react-router";
import { Percent } from "lucide-react";
import { MissionContent } from "@/components/MissionContent";
import { BatikDyeScaler } from "@/components/BatikDyeScaler";

export const Route = createFileRoute("/proportion")({
  head: () => ({
    meta: [
      { title: "Proportion Mission (Topic 7.3) — Math Explorer" },
      { name: "description", content: "Learn, explore and practise proportion: determine the unknown value using proportion (DSKP 7.3.1)." },
      { property: "og:title", content: "Proportion Mission — Math Explorer" },
      { property: "og:description", content: "Year 5 proportion mission with interactive exploration and practice quiz." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-5xl">
      <MissionContent
        missionId="proportion"
        icon={<Percent className="h-6 w-6" />}
        nextTo="/final-challenge"
        learnTool={<BatikDyeScaler />}
      />
    </div>
  ),
});
