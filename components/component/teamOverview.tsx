import TeamCard from "./teamCard"

export type teamInfoType = {
    name : string,
    designation : string,
    url : string
}

const teamInfo : teamInfoType[] = [{
    name : "Sebastian Fischer",
    designation : "Chief Executive Officer",
    url : "/team1.png"
},{
    name : "Tobias Fischer",
    designation : "Chief Technology Officer",
    url : "/team2.png"
},{
    name : "Gur Kimchi",
    designation : "Advisor",
    url : "/team3.png"
},{
    name : "Ret. Maj. Gen. Charles Corcoran",
    designation : "Advisor",
    url : "/team4.png"
},{
    name : "Garry Tan",
    designation : "Partner and Investor",
    url : "/team5.png"
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