import React from "react";

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type TeamProps = {
  team?: TeamMember[];
};

const Team: React.FC<TeamProps> = ({ team }) => {
  if (!team || team.length === 0) return null;

  return (
    <section id="team" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Team Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white/5 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2"
            >
              {/* Member Image */}
              {member.image && (
                <div className="flex justify-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              {/* Member Info */}
              <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                {member.name}
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
