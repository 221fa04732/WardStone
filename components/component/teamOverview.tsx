import TeamCard from "./teamCard"

export type teamInfoType = {
    name : string,
    designation : string,
    url : string,
    about : string,
    linkedinURL : string,
    xURL : string
}

const teamInfo : teamInfoType[] = [{
    name : "Sebastian Fischer",
    designation : "Chief Executive Officer",
    url : "/team1.png",
    about : "I am the cofounder & CEO of Wardstone, a space defense company building satellites to defend the U.S. and its allies from hypersonic and ballistic missiles. I have 10+ years of engineering and product experience in satellites, drones, and self-driving cars. I held leadership roles at Amazon Prime Air and Cruise Self-Driving and previously worked at Lockheed Martin and NASA on Planetary Spacecraft. I studied Aerospace Engineering at MIT and did a dual MS/MBA degree at Harvard.",
    linkedinURL : "https://www.linkedin.com/in/sebafischer/",
    xURL : ""
},{
    name : "Tobias Fischer",
    designation : "Chief Technology Officer",
    url : "/team2.png",
    about : "I am the cofounder of Wardstone, where I lead the technical development of next-generation defense spacecraft. Previously I worked at Astranis, building, launching, and operating geostationary communication satellites. I hold a bachelor's in mechanical engineering from Cornell University. At Cornell, I was the Chief Spacecraft Engineer for a lunar CubeSat mission that demonstrated novel electric propulsion and navigation systems.",
    linkedinURL : "https://www.linkedin.com/in/tobifischer/",
    xURL : ""
},{
    name : "Gur Kimchi",
    designation : "Advisor",
    url : "/team3.png",
    about : "",
    linkedinURL : "",
    xURL : ""
},{
    name : "Ret. Maj. Gen. Charles Corcoran",
    designation : "Advisor",
    url : "/team4.png",
    about : "",
    linkedinURL : "",
    xURL : ""
},{
    name : "Garry Tan",
    designation : "Partner and Investor",
    url : "/team5.png",
    about : "",
    linkedinURL : "",
    xURL : ""
}]

export default function TeamOverview(){
    return(<div className="w-11/12 flex justify-center items-center mt-[150px]">
        <div className="flex flex-wrap justify-center item-center gap-y-40 gap-x-16">
            {teamInfo.map((item, index)=>(
                <TeamCard key={index} data={item} />
            ))}
        </div>
    </div>)
}