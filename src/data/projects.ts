import erp from "@/assets/projects/erp.png";
import cicd from "@/assets/projects/cicd.png";
import gis from "@/assets/projects/gis-p-a-p.png";
import matalas from "@/assets/projects/matalas.png";

export const projects = [
  {
    slug: "erp",
    title: "ERP & Agricultural Business Management",
    description:
      "Full ERP platform managing inventory, sales workflows, invoicing, and audit trails across multiple departments.",
    tags: ["Laravel", "Vue 3", "PostgreSQL", "Multi-DB"],
    link: "/case-study/erp",
    image: erp,
    featured: true,
  },
  // {
  //   slug: "cicd",
  //   title: "Automated CI/CD Infrastructure",
  //   description:
  //     "Automated build and deployment pipelines using Jenkins with staging environments and production orchestration.",
  //   tags: ["Jenkins", "Linux", "SSH Deploy"],
  //   image: cicd,
  // },
  {
    slug: "matalas",
    title: "Government Property Assessment Data System",
    description:
      "Large-scale data management system developed for the Department of Assessment – LGU. The system manages property assessment records, valuation data, and digitized supporting documents. It centralizes records previously distributed across multiple systems and physical files, enabling faster retrieval, indexing, and reporting.",
    tags: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "MySQL",
      "NAS Storage",
      "Enterprise System",
      "Government System",
    ],
    link: "/case-study/matalas",
    image: matalas,
    featured: true,
  },
  // {
  //   slug: "pagasa-website",
  //   title: "PAGASA Official Website Development",
  //   description:
  //     "Front-end development contribution for the official website of the Philippine Atmospheric Geophysical and Astronomical Services Administration (PAGASA). The project focused on responsive design and building UI components capable of delivering public weather information across devices.",
  //   tags: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Responsive Design",
  //     "Government Website",
  //     "Web UI",
  //   ],
  // },
  {
    slug: "gis-property-digitization-platform",
    title: "Government GIS Property Assessment Platform",
    description:
      "Large-scale government platform used by the LGU, Department of Assessment to digitize, manage, and visualize real property records with GIS mapping and NAS document storage.",
    tags: ["Laravel", "Vue", "MySQL", "Redis", "GIS", "NAS Storage"],
    link: "/case-study/gis",
    image: gis,
    featured: true,
  },
];
