import { AnimatedTestimonialsDemo } from "../animatedtestimonials";

export default function Testimonial_c(){
    return(
        <div className="mt-10">
            <div className="mx-10 flex-col gap-x-2 bg-blue-600 rounded-3xl">
              <div className="text-5xl font-bold pt-12 mb-4 flex justify-center text-white">
                Testimonials
              </div>
              <div className="flex justify-center pb-16 pt-8">
                <div className="">
                  <AnimatedTestimonialsDemo />
                </div>
              </div>
            </div>
          </div>
    )
}