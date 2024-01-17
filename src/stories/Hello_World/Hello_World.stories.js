import { HelloWorld } from "./Hello_World";

export default {
  title: "Example/Hello_World",
  component: HelloWorld,
  parameters: {
    layout: "centered",
  },
  tags: ["autodoc"],
};
export const Primary = {
  args: {
    primary: true,
  },
};
export const Secondary = {
  args: {
    primary: false,
  },
};
