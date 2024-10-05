import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        rainy: "url('/bg-rainy.jpg')",
        sunny: "url('/bg-sunny.jpg')",
      },
      // backgroundColor: {
      //   primary: "#123",
      // },
    },
  },
  plugins: [],
} satisfies Config;
