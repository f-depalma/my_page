export default function Product({ icon, name, company, description }) {
    return (
        <div className="w-60 lg:w-80 p-6 rounded shadow-lg overflow-hidden" style={{ backgroundColor: "#fcfcfc"}}>
            <img src={icon} className="pb-4 w-32 h-16 lg:h-32 object-contain m-auto" />
            <div className="overflow-y-auto">
                <h4 className="text-center text-2xl font-bold pb-2 text-zinc-600">{name}</h4>
                <h4 className="text-center font-bold pb-2 text-yellow-600 ">{company}</h4>
                <p className="text-center text-sm h-full text-zinc-700">{description}</p>
            </div>
        </div>
    )
}