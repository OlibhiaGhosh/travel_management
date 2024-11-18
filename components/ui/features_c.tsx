import { BackgroundGradient } from "./background-gradient";
import { FocusCards } from "./focus-card";

const FocusCardsDemo = () => {
    const cards = [
      {
        title: "Forest Adventure",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is a beautiful description of this place",
      },
      {
        title: "Valley of life",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is a beautiful description of this place",
      },
      {
        title: "Sala behta hi jayega",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is a beautiful description of this place",
      },
      {
        title: "Camping is for pros",
        src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is a beautiful description of this place",
      },
      {
        title: "The road not taken",
        src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is a beautiful description of this place",
      },
      {
        title: "The First Rule",
        src: "https://assets.aceternity.com/the-first-rule.png",
        description: "This is a beautiful description of this place",
      },
    ];
  
    return <FocusCards cards={cards} />;
  };
export default function Features_c(){
    return(
        <>
        <div className="mx-10 flex mt-16 ">
            <div className="basis-1/3 flex flex-col gap-12 max-xl:gap-9 xl:mt-2">
              <div className="w-[0px] hover:-translate-y-[0px]"></div>
              <div className="w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">Package Comparison</h2>
                    <p className="mb-2">
                      Compare multiple travel packages side-by-side with our
                      intuitive comparison tool. View detailed breakdowns of
                      inclusions, pricing, itineraries, and user ratings.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>

              <div className="ml-12 xl:ml-32 2xl:ml-40 w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">Real-time Availability</h2>
                    <p className="mb-2">
                      Never miss out on your perfect vacation with our real-time
                      availability tracker. Get instant notifications when
                      prices drop or seats become available.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>

              <div className="w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">
                      Secure Booking and 24/7 support
                    </h2>
                    <p className="mb-2">
                      End-to-end encrypted booking process with instant
                      confirmation and Access round-the-clock assistance from
                      our experienced travel support team.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            </div>

            <div className="basis-2/3 flex mt-4">
              <FocusCardsDemo />
            </div>
          </div></>
    )
}