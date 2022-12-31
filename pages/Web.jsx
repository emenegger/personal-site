import React from "react";
import { Grid, Container, Text, Row, Button, Link, Spacer } from "@nextui-org/react";
import ProjectCard from "../components/ProjectCard";

const cardContent = [
  {
    title: "KubernOcular",
    summary: "Kubernetes Vizualization",
    description:
      "Kubernetes visualization tool displaying informative charts and sortable tables on key metrics.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Kubernetes",
      "Cytoscape.js",
      "Chart.js",
      "Jest",
      "Sass",
    ],
    image:
      "https://images.unsplash.com/photo-1463567517034-628c51048aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    github: "https://github.com/oslabs-beta/KubernOcular",
    link: "https://www.kubernocular.com/",
    id: "1",
  },
  {
    title: "Pickup Comps",
    summary: "NBA Comparison",
    description:
      "App to compare your pick up basketball stats to current NBA players.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Auth0", "Chakra UI"],
    image:
      "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    github: "https://github.com/emenegger/pickup-comps-nextjs",
    link: "https://google.com",
    id: "2",
  },
  {
    title: "NBA PGA API",
    summary: "API for NBA Stats",
    description:
      "Open source developer portal and API for current NBA players per game averages.",
    tech: ["Next.js", "React", "MongoDB", "Evergreen UI"],
    image:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    github: "https://github.com/emenegger/NBA-PGA-API-V2",
    link: "https://nba-pga-api.vercel.app/",
    id: "3",
  },
];

const cards = cardContent.map((c) => {
  return (
    <Grid xs={4} justify="center" alignItems="center" display="flex" key={c.id}>
      <ProjectCard
        title={c.title}
        description={c.description}
        tech={c.tech}
        image={c.image}
        summary={c.summary}
        github={c.github}
        link={c.link}
      />
    </Grid>
  );
});

const cv = cardContent.map((project) => {
  return (
    <Container justify="center" display="flex" direction="column">
      <Spacer/>
      <Text h2 weight="semibold">
        {project.title}
      </Text>
      <Text h4 weight="light">
        {project.description}
      </Text>
      <Text h5 weight="thin">
        Tech: {project.tech.map((t) => t + ", ")}
      </Text>
      <Row >
        <Link href={project.github}>
          <Button flat size="xs">
            GitHub
          </Button>
        </Link>
        <Link href={project.link}>
          <Button flat color="secondary" size="xs" autoFocus>
            View
          </Button>
        </Link>
      </Row>
    </Container>
  );
});

const Web = () => {
  return (
    <>
    <Row justify="center">
     <Text h1 weight='bold'>Web</Text>
    </Row>
      {/* {cv} */}
   <Grid.Container gap={1} justify="center" alignItems="center" display="flex">
    {cards}
    </Grid.Container>
    </>
  );
};

export default Web;
