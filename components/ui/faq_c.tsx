import Image from "next/image";
import FAQ from "../faqdetails";
export default function FAQ_c() {
  return (
    <div className="mx-10 mt-10 flex justify-center  items-center gap-x-8">
      <div className="w-2/5 xl:w-1/3">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
          alt="FaqsecImage"
          width={450}
          height={450}
        />
      </div>
      <div className="w-3/5 xl:w-2/3 pl-4">
        <FAQ />
      </div>
    </div>
  );
}
