"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const BLUR_FADE_DELAY = 0.001;

export default function Page() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const { scrollYProgress } = useScroll();
  const { scrollXProgress } = useScroll();
  const [textColor, setTextColor] = useState("#000");
  const scrollToSection = (id: string) => {
    //@ts-ignore
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const invertedProgress = useTransform(scrollYProgress, (value) => 1 - value);

  const invertedScaleY = useSpring(invertedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <motion.div
        className="fixed left-0 !top-0 bottom-0 w-1 bg-black dark:bg-white origin-top"
        style={{ scaleY: scaleY }}
      />
      <div className=" flex gap-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          className=" text-balance py-2 w-[150px] px-4 rounded"
          onClick={() => scrollToSection("projects")}
        >
          projects
        </motion.button>
        <motion.button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" text-balance py-2 w-[150px] px-4 rounded"
          onClick={() => scrollToSection("skills")}
        >
          skills
        </motion.button>
        <motion.button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" text-balance py-2 w-[150px] px-4 rounded"
          onClick={() => scrollToSection("education")}
        >
          education
        </motion.button>
      </div>

      <section id="hero">
        <motion.div
          className="card"
          whileHover={{ rotate: [0, 5, -5, 5, -5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
          style={{
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <Image
                    width={130}
                    height={100}
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                  />
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <motion.div
          onHoverStart={() => setTextColor(getRandomColor())} // Change color on hover
          onHoverEnd={() => setTextColor("#ffff")} // Reset color when not hovering
        >
          <motion.div
            animate={{ color: textColor }} // Animate the text color
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <motion.div
                    animate={{ color: textColor }} // Animate the text color
                    transition={{ duration: 0.3 }} // Smooth transition
                  >
                    <ResumeCard
                      key={education.school}
                      href={"/"}
                      logoUrl={"/"}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                    />
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;d want to build profitable dapps in the solana
                  blockchain , diving deep in to solana.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l"></ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <motion.div
            onHoverStart={() => setTextColor(getRandomColor())} // Change text color on hover
            onHoverEnd={() => setTextColor("#000")} // Reset to black
          >
            <BlurFade delay={500}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  animate={{ color: textColor }} // Animate the text color
                  style={{ color: textColor }} // Set the color directly to ensure it applies
                  transition={{ duration: 0.3 }}
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  animate={{ color: textColor }} // Animate the text color
                  style={{ color: textColor }} // Set the color directly to ensure it applies
                  transition={{ duration: 0.3 }}
                >
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                </motion.p>
              </div>
            </BlurFade>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
