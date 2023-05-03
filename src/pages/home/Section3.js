import { companies } from "../../resource/companies"
import Product from "./Product"

export default function Section3() {

    const companiesElement = companies.map((product, idx) => <Product key={idx} {...product} />)

    return (
        <div className="companies text-neutral-800 flex flex-col justify-start items-center p-14">
            <h1 className="h-1/5 text-xl lg:text-4xl text-zinc-600 text-center my-auto mt-2 lg:mt-10 flex items-center">PRODUCTS</h1>
            <div className="flex flex-row justify-center items-stretch flex-wrap pt-24 gap-8">
                {companiesElement}
            </div>
        </div>
    )
}