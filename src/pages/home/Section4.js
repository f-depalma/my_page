export default function Section4() {

    const rowClass = "px-6 py-4 text-sm text-gray-100 whitespace-nowrap"
    const headerClass = "px-6 py-3 text-xs font-bold text-left text-zinc-300 uppercase "

    return (
        <div className="bg-black flex flex-col justify-end sm:justify-center items-start p-14 h-full overflow-x-scroll">
            <div className="flex flex-row justify-around items-center flex-wrap w-full gap-8">
                
                <div className="max-w-xl">
                    <div className="flex flex-row justify-center h-24">
                        <img src="VIA-logo.png" className="w-9/12 lg:mr-auto lg:w-80 z-10 object-contain"></img>
                        <div className="max-h-24 overflow-hidden flex flex-col justify-center" style={{maxWith: "88px"}}>
                            <img src="Subject.png" className="h-auto aspect-square rounded-full object-contain float-right" />
                        </div>
                    </div>
                    <h1 className="text-lg lg:text-2xl pt-10 font-bold text-zinc-300 z-10">Software Technology Engineering</h1>
                    <h2 className="text-sm lg:text-base">3<sup>rd</sup> Semester</h2>
                </div>

                <div className="flex flex-col z-10 overflow-hidden">
                    <div className="p-1.5 w-full inline-block align-middle h-full">
                        <table className="block h-full overflow-y-auto overflow-x-auto rounded">
                            <thead className="bg-yellow-600 sticky top-0">
                                <tr>
                                    <th scope="col"
                                        className={headerClass}>Exam</th>
                                    <th scope="col"
                                        className={headerClass}>Grade</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-600 bg-zinc-800">
                                <tr>
                                    <td className={rowClass} title="Software Development with Java">SDJ1 <span className="hidden sm:contents">- Software Development with Java</span></td>
                                    <td className={rowClass}>12</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Semester Project 1">SEP1 <span className="hidden sm:contents">- Semester Project 1</span></td>
                                    <td className={rowClass}>4</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Responsive Web">RWD1 <span className="hidden sm:contents">- Responsive Web Design</span></td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Discrete Mathematics and Algorithms">DMA1 <span className="hidden sm:contents">- Discrete Mathematics and Algorithms</span></td>
                                    <td className={rowClass}>12</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Semester Project 2">SEP2 <span className="hidden sm:contents">- Semester Project 2</span></td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Software Engineering">SWE1 <span className="hidden sm:contents">- Software Engineering</span></td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass} title="Database Systems">DBS1 <span className="hidden sm:contents">- Database Systems</span></td>
                                    <td className={rowClass}>12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
