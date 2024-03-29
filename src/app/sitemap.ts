import { allProjects } from "@/.contentlayer/generated";

export default function sitemap() {
  const projects = allProjects.map((project) => ({
    url: `https://yarar.dev/${project._id.replace(".mdx", "")}`,
    lastModified: new Date(),
  }));

  const routes = ["", "contact"].map((url) => ({
    url: `https://yarar.dev/${url}`,
    lastModified: new Date(),
  }));

  return [...projects, ...routes];
}
