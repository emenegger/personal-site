import React from "react";
import Head from "next/head";
import {
  Grid,
  Container,
  Text,
  Row,
  Button,
  Link,
  Spacer,
} from "@nextui-org/react";
import ProjectCard from "../components/ProjectCard";
import AltCard from "../components/AltCard";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ApiIcon from '@mui/icons-material/Api';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ColorLensIcon from '@mui/icons-material/ColorLens';

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
      "https://images.unsplash.com/photo-1570783700979-ab82b9250371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    github: "https://github.com/oslabs-beta/KubernOcular",
    link: "https://www.kubernocular.com/",
    id: "1",
    icon: <DirectionsBoatIcon sx={{ width: "34px", height: "34px" }} key={'1'}/>
  },
  {
    title: "NBA PGA API",
    summary: "API for NBA Stats",
    description:
      "Open source developer portal and API for current NBA players per game averages.",
    tech: ["Next.js", "React", "MongoDB", "Evergreen UI"],
    image:
      // "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      // "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1651340608985-d25cc73156e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    github: "https://github.com/emenegger/NBA-PGA-API-V2",
    link: "https://nba-pga-api.vercel.app/",
    id: "2",
    icon: <ApiIcon sx={{ width: "34px", height: "34px" }} key={'2'}/>
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
    link: "",
    id: "3",
    icon: <SportsBasketballIcon sx={{ width: "34px", height: "34px" }} key={'3'}/>
  },
  {
    title: "Loci Spots",
    summary: "Local Restaurant Reviews",
    description:
      "App for locals only restaurant reviews",
    tech: ["React", "Node.js","Express", "SQL", "Sass"],
    image:
      // "https://images.unsplash.com/photo-1527102612281-7fff0660b9bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
      "https://images.unsplash.com/photo-1568187779709-06768ff598ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    github: "https://github.com/Yeti-Crab-Loci-Spots/Loci-Spots",
    link: "",
    id: "4",
    icon: <RestaurantIcon sx={{ width: "34px", height: "34px" }} key={'4'}/>
  },
  {
    title: "Beat Books",
    summary: "Music Recommendations",
    description:
      "App recommending music for your current book",
    tech: ["React", "Node.js","Express","Sass"],
    image:
      "https://images.unsplash.com/photo-1526395050546-dc5b0fe8df5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    github: "https://github.com/Yeti-Crab-Loci-Spots/Loci-Spots",
    link: "",
    id: "5",
    icon: <LibraryBooksIcon sx={{ width: "34px", height: "34px" }} key={'5'}/>
  },
  {
    title: "LeCollectif",
    summary: "Art Gallery",
    description:
      "Online marketplace for photographers, artists, and collectors",
    tech: ["React", "Node.js", "Express", "SQL","Sass"],
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    github: "https://github.com/Yeti-Crab-Loci-Spots/Loci-Spots",
    link: "",
    id: "6",
    icon: <ColorLensIcon sx={{ width: "34px", height: "34px" }} key={'6'}/>
  },

];

const cards = cardContent.map((c) => {
  return (
    <Grid sm={4} justify="center" alignItems="center" display="flex" key={c.id}>
      <ProjectCard
        title={c.title}
        description={c.description}
        tech={c.tech}
        image={c.image}
        summary={c.summary}
        github={c.github}
        link={c.link}
        key={c.id}
      />
    </Grid>
  );
});

const alternateCards = cardContent.map(ele => <AltCard content={ele} key={ele.id}/>)

// CV Style
// const cv = cardContent.map((project) => {
//   return (
//     <Container justify="center" display="flex" direction="column">
//       <Spacer/>
//       <Text h2 weight="semibold">
//         {project.title}
//       </Text>
//       <Text h4 weight="light">
//         {project.description}
//       </Text>
//       <Text h5 weight="thin">
//         Tech: {project.tech.map((t) => t + ", ")}
//       </Text>
//       <Row >
//         <Link href={project.github}>
//           <Button flat size="xs">
//             GitHub
//           </Button>
//         </Link>
//         <Link href={project.link}>
//           <Button flat color="secondary" size="xs" autoFocus>
//             View
//           </Button>
//         </Link>
//       </Row>
//     </Container>
//   );
// });

const Web = () => {
  return (
    <>
      <Head>
        <title>Evan Emenegger - Web</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Text h1 weight="bold">
          Web
        </Text>
      </Row>
      {/* {cv} */}
      <Grid.Container
        gap={2}
        justify="center"
        alignItems="center"
        display="flex"
        wrap='wrap'
        css={{gridTemplateColumns: 'repeat(3, 1fr)'}}
      >
        {cards}
        {/* {alternateCards} */}
      </Grid.Container>
    </>
  );
};

export default Web;
