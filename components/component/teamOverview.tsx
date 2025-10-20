import TeamCard from "./teamCard"

export type teamInfoType = {
    name : string,
    designation : string,
    url : string,
    linkedinURL : string
}

const teamInfo : teamInfoType[] = [{
    name : "Sebastian Fischer",
    designation : "Chief Executive Officer",
    url : "/team1.png",
    linkedinURL : "https://www.linkedin.com/in/sebafischer/"
},{
    name : "Tobias Fischer",
    designation : "Chief Technology Officer",
    url : "/team2.png",
    linkedinURL : "https://www.linkedin.com/in/tobifischer/"
},{
    name : "Gur Kimchi",
    designation : "Advisor",
    url : "/team3.png",
    linkedinURL : "https://www.linkedin.com/in/gurkimchi/"
},{
    name : "Ret. Maj. Gen. Charles Corcoran",
    designation : "Advisor",
    url : "/team4.png",
    linkedinURL : "https://www.linkedin.com/in/charles-corcoran-353a6834/"
},{
    name : "Garry Tan",
    designation : "Partner and Investor",
    url : "/team5.png",
    linkedinURL : "https://www.linkedin.com/in/garrytan/"
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