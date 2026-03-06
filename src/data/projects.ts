import erp from "@/assets/projects/erp-system.png";
import warehouse from "@/assets/projects/data-warehouse.png";
import cicd from "@/assets/projects/cicd.png";

export const projects = [
  {
    title: "ERP & Agricultural Business Management",
    description:
      "Full ERP platform managing inventory, sales workflows, invoicing, and audit trails across multiple departments.",
    tags: ["Laravel", "Vue 3", "PostgreSQL", "Multi-DB"],
    link: "/case-studies/erp-business-management-system",
    image: erp,
  },
  {
    title: "Property Assessment Data Warehouse",
    description:
      "ETL pipelines integrating multiple transactional databases into a structured analytics-ready data warehouse.",
    tags: ["Python ETL", "PostgreSQL", "MySQL"],
    image: warehouse,
  },
  {
    title: "Automated CI/CD Infrastructure",
    description:
      "Automated build and deployment pipelines using Jenkins with staging environments and production orchestration.",
    tags: ["Jenkins", "Linux", "SSH Deploy"],
    image: cicd,
  },
  {
    title: "Government Property Assessment Data System",
    description:
      "Large-scale data management system developed for the Department of Assessment – City of Manila. The system manages property assessment records, valuation data, and digitized supporting documents. It centralizes records previously distributed across multiple systems and physical files, enabling faster retrieval, indexing, and reporting.",
    tags: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "MySQL",
      "NAS Storage",
      "Enterprise System",
      "Government System",
    ],
  },
  {
    title: "PAGASA Official Website Development",
    description:
      "Front-end development contribution for the official website of the Philippine Atmospheric Geophysical and Astronomical Services Administration (PAGASA). The project focused on responsive design and building UI components capable of delivering public weather information across devices.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Government Website",
      "Web UI",
    ],
  },
  {
    title: "Government GIS Property Assessment Platform",
    description:
      "Large-scale government platform used by the City of Manila Department of Assessment to digitize, manage, and visualize real property records with GIS mapping and NAS document storage.",
    tags: ["Laravel", "Vue", "MySQL", "Redis", "GIS", "NAS Storage"],
    link: "/case-studies/gis-property-digitization-platform",
    featured: true,
  },
];
