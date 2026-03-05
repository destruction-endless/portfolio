import erp from "@/assets/projects/erp-system.png";
import warehouse from "@/assets/projects/data-warehouse.png";
import cicd from "@/assets/projects/cicd.png";

export const projects = [
  {
    title: "ERP & Agricultural Business Management",
    description:
      "Full ERP platform managing inventory, sales workflows, invoicing, and audit trails across multiple departments.",
    tags: ["Laravel", "Vue 3", "PostgreSQL", "Multi-DB"],
    link: "/case-study",
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
    title: "GIS Land Valuation Mapping System",
    description:
      "A geospatial platform designed to analyze and visualize land valuation data using spatial databases and GIS tools. The system enables geographic analysis of property values and supports planning and taxation through spatial queries and interactive mapping.",
    tags: ["ArcGIS", "QGIS", "PostGIS", "PostgreSQL", "Python", "GIS"],
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
];
