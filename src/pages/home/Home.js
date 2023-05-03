import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"
import Section7 from "./Section7"

export default function Home() {

    const sections = [
        <Section1 key="1"/>,
        <Section2 key="2"/>,
        <Section3 key="3"/>,
        <Section4 key="4"/>,
        <Section5 key="5"/>,
        <Section6 key="6"/>,
        <Section7 key="7"/>
    ]

    const contents = sections.map((content, idx) => {
        return (
            <Section key={idx}>
                {content}
            </Section>
        )
    })


    return (
        <div className="w-full bg-black text-gray-200">
            {contents}
        </div>
    )
}