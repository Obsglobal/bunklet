import Image from "next/image";
import React from "react";

const TeamDetails = [
  {
    id: 0,
    image: "/founder.svg",
    name: "Benjamin Ajayi",
    title: "Founder",
  },
  {
    id: 1,
    image: "/member.svg",
    name: "Darrell Steward",
    title: "Member",
  },
  {
    id: 2,
    image: "/member1.svg",
    name: "Kristin Watson",
    title: "Member",
  },
];
const TeamSection = () => {
  return (
    <div className="lg:px-24 px-6 pb-10">
      <div className="flex flex-col">
        <span className="text-lightgray text-2xl font-semibold py-4">Our Team</span>
        <div className="flex gap-6 md:flex-row flex-col items-center justify-between">
          {TeamDetails.map((team) => (
            <div className="flex flex-col border-[#D8D8D8] border gap-3" key={team.id}>
              <Image src={team.image} width={400} height={100} alt="team" />
              <span className="text-xl text-darkgray p-3">{team.name}</span>
              <span className="text-[#5D5D5D] font-normal p-3 text-lg">{team.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
