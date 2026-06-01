import { createFileRoute } from "@tanstack/react-router";
import { Info, GraduationCap, BookMarked } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Project — Math Explorer" },
      { name: "description", content: "Credits, course information and DSKP KSSR curriculum reference for the Math Explorer learning resource." },
      { property: "og:title", content: "About Project — Math Explorer" },
      { property: "og:description", content: "Credits and DSKP curriculum mapping for the EDUP2112 project." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { meta, dskp } = missionsData;

  const facts = [
    { label: "Course", value: meta.course },
    { label: "Target Audience", value: meta.audience },
    { label: "Curriculum", value: meta.curriculum },
    { label: "Developer", value: meta.developer },
    { label: "Institution", value: meta.institution },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Credits & Reference"
        title="About This Project"
        description={`${meta.appName} — ${meta.subtitle}`}
        icon={<Info className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Project Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="text-right font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-primary" /> Purpose
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground/80">
            <p>
              This interactive multimedia resource supports the teaching and learning of Year 5
              Mathematics through a gamified, mission-based adventure.
            </p>
            <p>
              It integrates video, interactive exploration tools and formative practice, aligned to
              the Malaysian DSKP KSSR Standard Curriculum.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 mint-card-shadow">
        <CardHeader>
          <CardTitle>DSKP Curriculum Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Standard</TableHead>
                <TableHead>Learning Standard</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dskp.map((d) => (
                <TableRow key={d.standard}>
                  <TableCell className="font-medium">{d.topic}</TableCell>
                  <TableCell>{d.standard}</TableCell>
                  <TableCell className="text-muted-foreground">{d.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
