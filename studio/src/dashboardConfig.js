export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e80e1efbc71899d788db7d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-90-studio",
                  apiId: "d787f7ec-4624-40f8-9175-d39effe132cd",
                },
                {
                  buildHookId: "60e80e1e5c118a923d637ac2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-90",
                  apiId: "9598f5dd-222e-4e5d-b65f-6ce0550bc585",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/huseindra/sanity-gatsby-blog-90",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-90.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
