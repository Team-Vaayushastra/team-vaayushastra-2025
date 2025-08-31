import InfoCard from "@/components/Cards";
import SAELogo from "../assets/competitions/sae-international-logo.png";
import AIAALogo from "../assets/competitions/aiaa-logo.png";

const competitions = [
  {
    title: "SAE Aero Design West",
    description: "California, USA",
    category: "Advanced Class",
    image: SAELogo,
    link: "https://www.sae.org/attend/student-events/sae-aero-design-west/",
  },
  {
    title: "SAE Aero Design East",
    category: "Advanced Class",
    description: "Texas, USA",
    image: SAELogo,
    link: "https://www.sae.org/attend/student-events/sae-aero-design-east/",
  },
  {
    title: "AIAA",
    category: "Advanced Class",
    description: "USA",
    image: AIAALogo,
    link: "https://www.aiaa.org/",
  },
  //add more competitions as needed
];

const Competitions = () => {
  return (
    <div>
      <section className="relative py-10">
        <h2 className="text-3xl md:text-5xl font-semibold font-montserrat text-center my-8 pb-5 text-white">
          Competitions
        </h2>

        <div
          className={`flex space-x-6 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide overflow-x-auto
        ${competitions.length < 4 ? "justify-center" : "overflow-x-auto"}`}
        >
          {competitions.map((competition, i) => (
            <InfoCard
              key={i}
              title={competition.title}
              description={competition.description}
              category={competition.category}
              image={competition.image}
              link={competition.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Competitions