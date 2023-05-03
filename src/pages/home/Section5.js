import { reviews } from "../../resource/reviews"
import Review from "./Review"

export default function Section5() {

    const reviewsElement = reviews.map((review, idx) => (
        <Review {...review} key={idx} />
    ))


    return (
        <div className="reviews flex flex-col justify-center items-center h-full p-14">
            <h1 className="text-xl lg:text-4xl text-zinc-300 text-center my-auto mt-2 lg:mt-10 h-1/5 flex items-center">REVIEWS</h1>
            <div className="flex flex-row w-full h-4/5 justify-center items-start flex-wrap pt-24 gap-8">
                {reviewsElement}
            </div>
        </div>
    )
}