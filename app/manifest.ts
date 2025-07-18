import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CalEasy",
    short_name: "CalEasy",
    description:
      "Scheduling meetings shouldn’t be a hassle. At CalEasy, we streamline the process so your clients can effortlessly book time with you—allowing you to focus on what truly matters.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5DA1F7",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
