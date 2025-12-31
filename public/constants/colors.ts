export const UNVISITED_COLORS = [
  // Yellows/Golds
  "#E8C547", // Bright yellow
  "#D4AF37", // Golden yellow
  "#F4E4A6", // Pale yellow/cream
  "#EDD382", // Soft gold
  // Oranges
  "#E67E22", // Bright orange
  "#D35400", // Burnt orange
  "#F39C12", // Golden orange
  "#E8A87C", // Peachy orange
  // Reds/Burgundy
  "#8B2635", // Deep burgundy/maroon
  "#A0373C", // Wine red
  "#B33A3A", // Medium red

  // Neutrals
  // '#D4C5A9', // Beige/tan
  // '#C9A982', // Sand
  // '#8B7355', // Brown
  // '#F5F5DC', // Cream white
  // '#4A4A4A', // Dark gray/charcoal
] as const;

export const vintageColors = {
  green: "#838448",
  blue: "#7a8e82",
  tan: "#deae7e",
  border: "#4f4730",
} as const;

export const colors = {
  notVisited: "#F4E4A6",
  visited: "#2E7D32",
  accent1: "#2EA6A6",
  border: "#F2DEC4",
  accent2: "#D9631E",
  background: "#4A7C89",
  notVisited2: "#D3D9C1",
  visitedHover: '#66BB6A',
} as const;


/*
type CreateGradient = {
  ref: any;
  id: string;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  color0: string;
  color1: string;
};

const createGradient = ({
  ref,
  id,
  x1 = 0,
  x2 = 100,
  y1 = 0,
  y2 = 100,
  color0,
  color1,
}: CreateGradient) => {
  const defs = ref.append("defs");
  const gradient = defs
    .append("linearGradient")
    .attr("id", id)
    .attr("x1", `${x1}%`)
    .attr("y1", `${y1}%`)
    .attr("x2", `${x2}%`)
    .attr("y2", `${y2}%`);

  gradient.append("stop").attr("offset", "0%").attr("stop-color", color0);
  gradient.append("stop").attr("offset", "100%").attr("stop-color", color1);

  return `url(#${id})`;
};

const visitedGradient = createGradient({
  ref: svg,
  id: "visibleGradient",
  color0: colors.visited,
  color1: colors.notVisited,
});
const notVisitedGradient = createGradient({
  ref: svg,
  id: "notVisibleGradient",
  color0: colors.notVisited,
  color1: colors.notVisited2,
});

const gradients = {
  visited: visitedGradient,
  notVisited: notVisitedGradient,
};
*/