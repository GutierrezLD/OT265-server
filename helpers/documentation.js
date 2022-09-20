const userRouteDoc = require("../DocumentationSchemas/user.doc");
const newsRouteDoc = require("../DocumentationSchemas/news.doc");
const testimonialsRouteDoc = require("../DocumentationSchemas/testimonial.doc");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "OT265 Server",
    version: "1.0.0",
    description: "This is the description of documentation",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || "3000"}`,
      description: "Local Dev",
    },
  ],
  tags: [
    {
      name: "Users",
      description: "Users routes",
    },
  ],
  paths: {
    ...userRouteDoc,
    ...newsRouteDoc,
    ...testimonialsRouteDoc,
  },
};

module.exports = swaggerDocumentation;
