"use client";
import ChoosedPackages from "@/components/choosed-packages";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function PackageDetailsPage() {
  const searchParams = useSearchParams();
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      setPackageData(parsedData);
      console.log("parsed query:", parsedData);
    }
  }, [searchParams]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packageData.map((pkg: any) => (
        <ChoosedPackages key={pkg?.id} pkg={pkg} />
      ))}
    </div>
  );
}
