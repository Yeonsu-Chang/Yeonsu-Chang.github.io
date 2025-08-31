// src/App.tsx  — paste all of this

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, FileText, ExternalLink, Menu } from "lucide-react";

const LINKS = {
  email: "mailto:yeonsu@hanyang.ac.kr",
  cv: "/Yeonsu_CV.pdf", // public/Yeonsu_CV.pdf 에 파일 넣어두기
};

const PROFILE = {
  name: "Yeonsu Chang (장연수)",
  title: "Integrated Ph.D Candidate",
  dept: "Department of Mathematics, Hanyang University",
  location: "Room 735, Building 507, Hanyang University, 222, Wangsimni-ro, Seongdong-gu, Seoul, 04763, Republic of Korea",
  locationUrl: "https://maps.app.goo.gl/mmicVHMCk4f92bmN8",
  topics: [
    "Graph Theory",
    "Structural Graph Theory",
    "Parameterized Complexity",
    "Reduced Parameter",
  ],
  advisor: "O-joung Kwon",
  advisorUrl: "http://ojkwon.com",
  updated: "Updated: August 31, 2025",
};

const JOURNAL = [
  {
    authors: "Yeonsu Chang, Sejin Ko, O-joung Kwon, and Myounghwan Lee",
    title: "A characterization of graphs of radius-r flip-width at most 2",
    venue: "Discrete Mathematics 348(4)",
    date: "Apr, 2025",
    link: "https://doi.org/10.48550/arXiv.2306.15206",
    note: "114366",
  },
];

const CONF = [
  {
    authors: "Yeonsu Chang, O-joung Kwon, and Myounghwan Lee",
    title:
      "A new width parameter of graphs based on edge cuts: α-edge-crossing width",
    venue: "WG23 (accepted)",
    link: "https://doi.org/10.48550/arXiv.2302.04624",
  },
  {
    authors:
      "Shinwoo An, Yeonsu Chang, Kyungjin Cho, O-joung Kwon, Myounghwan Lee, Eunjin Oh, and Hyeonjun Shin",
    title:
      "Pre-assignment problem for unique minimum vertex cover on bounded clique-width graphs",
    venue: "AAAI 2025 (accepted)",
    link: "https://doi.org/10.48550/arXiv.2408.09591",
  },
];

const PREPRINTS = [
  {
    authors:
      "",
    title:
      "",
    venue: "",
    link: "",
  },
];

const TALKS = [
  {
    when: "Oct 26–28, 2023",
    where: "2023 KMS Annual Meeting",
    title: "A characterization of graphs of radius-r flip-width at most 2",
  },
];

function Publication({ p }: { p: any }) {
  // 본인 이름 하이라이트
  const highlightAuthor = (authors: string) => {
    return authors.split(/(Yeonsu Chang)/g).map((part, i) =>
      part === "Yeonsu Chang" ? (
        <span key={i} className="font-semibold text-slate-800">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="mb-4">
      {/* 제목 */}
      <div className="font-medium text-slate-800">{p.title}</div>
      {/* 저자 (내 이름만 진하게) */}
      <div className="text-sm text-slate-600 mb-1">{highlightAuthor(p.authors)}</div>
      {/* venue */}
      <div className="text-sm text-slate-500 italic">
        {p.venue}
        {p.date ? `, ${p.date}` : ""}
      </div>
      {/* 링크 (문자 그대로, 검정색) */}
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-sm text-black underline hover:text-gray-700"
        >
          {p.link}
        </a>
      )}
    </div>
  );
}


function PublicationList({ papers }: { papers: any[] }) {
  const total = papers.length;
  return (
    <div>
      {papers.map((p, i) => {
        const num = total - i; // 역순 번호
        return (
          <div key={i} className="mb-4">
            {/* 번호 + 제목 */}
            <div className="font-medium text-slate-800">
              [{num}] {p.title}
            </div>
            {/* 저자 (내 이름만 검정색) */}
            <div className="text-sm text-slate-600 mb-1">
              {p.authors.split(/(Yeonsu Chang)/g).map((part: string, j: number) =>
                part === "Yeonsu Chang" ? (
                  <span key={j} className="text-black">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </div>
            {/* venue */}
            <div className="text-sm text-slate-500 italic">
              {p.venue}
              {p.date ? `, ${p.date}` : ""}
            </div>
            {/* 링크 */}
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-sm text-black underline hover:text-gray-700"
              >
                {p.link}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}




export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b bg-slate-900 text-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gray-200" /> {/* 로고 박스는 밝은 회색 */}
            <div className="leading-tight">
              <a href="/" className="font-semibold hover:opacity-80">
                {PROFILE.name}
              </a>
              <div className="text-[12px] text-gray-400">{PROFILE.title}</div>
            </div>
          </div>

          {/* 오른쪽 메뉴 버튼 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-black hover:bg-gray-100 border"
              >
                <Menu className="mr-2 h-4 w-4" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white shadow-md border text-black"
            >
              <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href={LINKS.email}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={LINKS.cv} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> CV (PDF)
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-5 py-8">
        <Tabs defaultValue="home">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="papers">Papers</TabsTrigger>
            <TabsTrigger value="talks">Talks</TabsTrigger>
          </TabsList>

          {/* HOME */}
          <TabsContent value="home" className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* 왼쪽: 사진 영역 (16:9 비율) */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-hidden rounded-xl border bg-slate-100">
                  {/* 16:9 비율 고정 */}
                  <div className="aspect-video w-full">
                    <img
                      src="/profile.jpg"    // public/profile.jpg 에 사진 넣으면 자동 표시됨
                      alt="Profile"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const holder = document.getElementById("photo-placeholder");
                        if (holder) holder.style.display = "flex";
                      }}
                    />
                    {/* 이미지 없을 때 플레이스홀더 */}
                    <div
                      id="photo-placeholder"
                      className="absolute inset-0 hidden items-center justify-center text-slate-400"
                    >
                      <div className="text-center">
                        <div className="text-sm">Put your photo at</div>
                        <div className="font-mono text-xs">/public/profile.jpg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 오른쪽: 프로필 카드 */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="leading-relaxed text-slate-700">
                  Hello, I,m Yeonsu Chang (장연수). 
                  I am an Integrated Ph.D student in mathematics at Hanyang University advised by {PROFILE.advisor}. 
                  My research interests lie in structural graph theory and parameterized algorithms. 
                  In particular, my current research focuses on problems related to reduced parameters and &chi;-boundedness.
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div>
                    Email:{" "}
                    <a className="underline" href={LINKS.email}>
                      yeonsu@hanyang.ac.kr
                    </a>
                  </div>
                </div>
                  <div>
                    <span className="font-medium">Location:</span>{" "}
                    <a
                      href={PROFILE.locationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-black hover:text-gray-600"
                    >
                      {PROFILE.location}
                    </a>
                  </div>

                <div>Advisor:{" "}
                  <a href={PROFILE.advisorUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-black hover:text-gray-600">
                    {PROFILE.advisor}
                  </a>
                </div>

                <Separator className="my-4" />

                {/* Interests (C: Two-line Tag List) */}
                <div className="mb-2 font-medium">Interests</div>
                <ul className="flex flex-wrap gap-1.5 text-[13px] text-slate-700">
                  {[
                    "Structural Graph Theory","Parameterized Complexity",
                    "Reduced Parameter","Chiboundedness"
                  ].map((t, i) => (
                    <li key={t} className="after:mx-1 after:text-slate-300 after:content-['•'] last:after:content-['']">
                      {t}
                    </li>
                  ))}
                </ul>


                <div className="mt-4 flex gap-3">
                  <Button asChild variant="outline">
                    <a href={LINKS.cv} target="_blank" rel="noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={LINKS.email}>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>

                <div className="mt-4 text-xs text-slate-500">{PROFILE.updated}</div>
              </CardContent>
            </Card>
          </TabsContent>


          {/* ABOUT */}
          <TabsContent value="about" className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>About me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7">
                <div className="font-semibold">Education</div>
                <ul className="list-disc pl-5">
                  <li>
                    <div>Integrated Ph.D in Mathematics, Hanyang University</div>
                    <div className="text-slate-500 text-sm">Mar 2022 – Present</div>
                  </li>
                  <li>
                    <div>B.S. in Mathematics, Hanyang University (incl. military service)</div>
                    <div className="text-slate-500 text-sm">Mar 2015 – Feb 2022</div>
                  </li>
                </ul>
                <Separator />
                <div className="font-semibold">Military Service</div>
                <ul className="list-disc pl-5">
                  <li>Republic of Korea Army (Jan 2017 – Oct 2018), Sergeant</li>
                </ul>
                <Separator /> 
                <div className="font-semibold">Teaching assistant at Hanyang University</div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <div>Linear Algebra 1 (MAT 2023)</div>
                    <div className="text-slate-500 text-sm">Spring 2025</div>
                  </li>
                  <li>
                    <div>Math Capstone PBL (Solving Graph Problems) (MATH 4012)</div>
                    <div className="text-slate-500 text-sm">Fall 2024</div>
                  </li>
                  <li>
                    <div>Linear Algebra 1 (MAT 2023), Differential Geometry (MAT 4005)</div>
                    <div className="text-slate-500 text-sm">Spring 2024</div>
                  </li>
                  <li>
                    <div>Head TA</div>
                    <div className="text-slate-500 text-sm">Fall 2022 - Spring 2024</div>
                  </li>
                  <li>
                    <div>Math Capstone PBL (Applications of graph algorithms) (PBL 4012)</div>
                    <div className="text-slate-500 text-sm">Fall 2022</div>
                  </li>
                  <li>
                    <div>Linear Algebra 1 (MAT 2023)</div>
                    <div className="text-slate-500 text-sm">Spring 2022</div>
                  </li>
                  {/* 필요한 항목을 더 추가 */}
                </ul>
              </CardContent>
            </Card>

            <Card>
            <CardHeader>
              <CardTitle>My Interests</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 space-y-3">
              <p>
                I am particularly interested in <span className="font-medium">graph parameters</span>, 
                and I am working on organizing their hierarchy.
              </p>
              <p>
                This project is maintained at{" "}
                <a
                  href="https://graphparameterhierarchy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-black hover:text-gray-600"
                >
                  graphparameterhierarchy.com
                </a>.  
                If you have information that should be added, please feel free to contact me via email.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

          {/* PAPERS */}
          <TabsContent value="papers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Journal papers</CardTitle>
              </CardHeader>
              <CardContent>
                <PublicationList papers={JOURNAL} />
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Refereed conference papers</CardTitle>
              </CardHeader>
              <CardContent>
                <PublicationList papers={CONF} />
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader><CardTitle>Preprints</CardTitle></CardHeader>
              <CardContent>
                <PublicationList papers={PREPRINTS} />
              </CardContent>
            </Card>
          </TabsContent>


          {/* TALKS */}
          <TabsContent value="talks" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                {TALKS.map((t, i) => (
                  <div key={i} className="mb-3 text-sm">
                    <div className="font-medium">{t.where}</div>
                    <div className="text-slate-600">{t.when}</div>
                    <div>{t.title}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}
