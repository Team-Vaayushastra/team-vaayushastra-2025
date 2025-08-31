import Avionics from "../assets/department-assets/avionics/avionics-3d.png";
import Design from "../assets/department-assets/design/design-3d.png";
import MM from "../assets/department-assets/mm/mm-3d.png";

import ACS from "../assets/department-assets/avionics/acs.png";
import DAS from "../assets/department-assets/avionics/das.jpg";
import GUI from "../assets/department-assets/avionics/gui.png";

import Analysis from "../assets/department-assets/design/analysis.jpg";
import Designing from "../assets/department-assets/design/designing.jpeg";
import Manufacturing from "../assets/department-assets/design/manufacturing.jpg";

import Marketing from "../assets/department-assets/mm/marketing.png";
import Media from "../assets/department-assets/mm/media.jpg";

// team members
//avionics
import Muzzammil from "../assets/team-members/avionics/muzzammil.jpg" 
import Craig from "../assets/team-members/avionics/craig.jpg" 
import Sarah from "../assets/team-members/avionics/sarah.jpg"
import Aish from "../assets/team-members/avionics/aishh.png"

// design
import Meghna from "../assets/team-members/design/meghna.jpg"
import Vandan from "../assets/team-members/design/vandan.jpg"
import Shahid from "../assets/team-members/design/shahid.jpg"
import Vedang from "../assets/team-members/design/vedang.jpg"
import Yash from "../assets/team-members/design/yash.jpg"
import Sana from "../assets/team-members/design/sana.jpg"
import Rion from "../assets/team-members/design/rion.jpg"
import Poorvi from "../assets/team-members/design/poorvi.jpg"

//m-m
import Ayush from "../assets/team-members/mm/ayush.jpg"
import Adriana from "../assets/team-members/mm/adriana.jpg"

export type DepartmentContent = {
  id: string;
  title: string;
  description: string;
  image: string;
  color?: string;
  bgColor?: string;
  hero?: {
    paragraphs: string[];
    heading: string;
    subheading?: string;
  };
  features?: { title: string; description: string }[];
  team?: { name: string; role: string; image: string }[];
  subDepartments: { title: string; description: string; image: string }[];
};

export const departmentData: Record<string, DepartmentContent> = {
  avionics: {
    id: "avionics",
    title: "Avionics",
    description: "Visualize. Code. Display. Flight-Controls. Data-Collection.",
    color: "bg-blue-600",
    bgColor: "bg-blue-500",
    image: Avionics,
    hero: {
      heading: "Avionics Department",
      subheading: "Visualize & Control Flight Systems",
      paragraphs: [
        "Intuitive Control – Interact with devices through sleek icons & visuals.",
        "Direct Manipulation – Move, drag, and control elements naturally.",
        "Fly in First-Person – Immerse yourself in FPV piloting.",
      ],
    },
    features: [
      {
        title: "Autonomous Control",
        description: "Algorithms for autonomous landing.",
      },
      {
        title: "Data Acquisition",
        description: "Collects flight telemetry efficiently.",
      },
    ],
    team: [
      { name: "Craig Zalake", role: "Captain", image: Craig },
      { name: "Sarah Ger", role: "Vice-Captain", image: Sarah },
      { name: "Aishwarya Sreejith", role: "Avionics Head", image: Aish },
      { name: "Muzzammil", role: "Avionics Member", image: Muzzammil },
    ],
    subDepartments: [
      {
        title: "Autonomous Control System",
        image: ACS,
        description:
          "Algorithm written by us for autonomous landing of secondary aircraft",
      },
      {
        title: "Data Acquisition System",
        image: DAS,
        description:
          "Working with Electronics Components used in RC Aircrafts and programming Microcontrollers used",
      },
      {
        title: "GUI",
        image: GUI,
        description: "Home Made GUI for displaying flight parameters",
      },
    ],
  },

  design: {
    id: "design",
    title: "Design",
    description: "Research. Design. Simulate. Fabricate. Innovate.",
    color: "bg-red-600",
    bgColor: "bg-red-500",
    image: Design,
    hero: {
      heading: "Design Department",
      paragraphs: [
        "Design & Simulation – Transform ideas into aircraft using advanced 3D modeling, analysis, and simulation tools.",
        "Hands-On Fabrication – Build with precision through 3D printing, laser cutting, foam cutting, and composites.",
        "End-to-End Innovation – From research to final prototype, every step brings concepts closer to flight.",
      ],
    },
    features: [
      {
        title: "Solid Works Modeling",
        description: "3D design of aircraft structures.",
      },
      {
        title: "Ansys Analysis",
        description: "Structural analysis of aircraft structures.",
      },
    ],
    team: [
      { name: "Vedang Amberkar", role: "Team Manager", image: Vedang },
      { name: "Rion Dmello", role: "Design Head", image: Rion },
      { name: "Shahid Khan", role: "Manufacturing Head", image: Shahid },
      { name: "Yash", role: "Design Member", image: Yash },
      { name: "Meghna", role: "Design Member", image: Meghna },
      { name: "Vandan", role: "Design Member", image: Vandan },
      { name: "Sana", role: "Design Member", image: Sana },
      { name: "Poorvi", role: "Design Member", image: Poorvi },
    ],
    subDepartments: [
      {
        title: "Analysis",
        image: Analysis,
        description: "Analysis Structue before Manufacturing",
      },
      {
        title: "Design",
        image: Designing,
        description: "Design RC Aircraft",
      },
      {
        title: "Manufacturing",
        image: Manufacturing,
        description: "Manufacturing & Fabricating RC Aircraft",
      },
    ],
  },

  media_marketing: {
    id: "media_marketing",
    title: "Media & Marketing",
    description: "Engage. Promote. Fund. Sustain.",
    color: "bg-green-600",
    bgColor: "bg-green-500",
    image: MM,
    hero: {
      heading: "Media & Marketing",
      paragraphs: [
        "Engage Audience – Build strong connections through social media and outreach.",
        "Secure Support – Drive sponsorships and manage funds effectively",
        "Streamline Process – Maintain documents to keep competitions running smoothly.",
      ],
    },
    features: [
      {
        title: "Content Creation",
        description: "Multimedia content development.",
      },
      {
        title: "Marketing and Pitch",
        description:
          "Developing marketing strategies and pitching to sponsors.",
      },
    ],
    team: [
      { name: "Ayush Kude", role: "Media-Marketing Head", image: Ayush },
      { name: "Adriana", role: "Media-Marketing Member", image: Adriana },
    ],
    subDepartments: [
      {
        title: "Marketing",
        image: Marketing,
        description: "Manages social media presence.",
      },
      {
        title: "Social Media",
        image: Media,
        description: "Creates and curates content.",
      },
    ],
  },
};
