import { skills } from "../../resource/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} {...skill} />)

    return (
        <div className="text-neutral-800 flex flex-col justify-center items-center h-full p-12 w-screen" style={{ backgroundColor: "#f5f5f5"}}>
            <h1 className="text-xl lg:text-4xl text-zinc-700 text-center mt-2 lg:mt-10 h-1/5 flex items-center ">SKILLS</h1>
            <div className="flex flex-row w-full justify-center items-center h-4/5 flex-wrap pt-24 md:gap-x-8 gap-y-8">
                {skillComponents}
            </div>
        </div>
    )
}