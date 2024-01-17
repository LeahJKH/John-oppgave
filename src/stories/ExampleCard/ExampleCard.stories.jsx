import { ExampleCard } from "./ExampleCard";

export default {
  title: "Example/ExampleCard",
  component: ExampleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const ImageOne = {
  args: {
    img: {
      src: true,
      alt: "Picture of a Lake",
    },
    title: "A beautiful day at the Lake",
    children: <p>Join us next time!</p>,
  },
};
export const ImageTwo = {
  args: {
    img: {
      src: false,
      alt: "A tree dangling over a lake",
    },
    title: "Dusk approaches.",
    children: <p>Good Night!</p>,
  },
};
