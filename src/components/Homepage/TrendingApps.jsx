// "use client";
import React from "react";
import Link from "next/link";
import AppCard from "@/ui/AppCard";


const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async ({ from }) => {
  const apps = await appsPromise();

  console.log(from, "from");

  return (
    <div className="container mx-auto px-4 my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
         <h2 className="font-bold text-4xl">
          {from === "homepage" ? "Trending apps" : "All Apps"}
        </h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {apps
          .slice(0, from === "homepage" ? 8 : apps.length - 1)
          .map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
      </div>
     

      <div className="text-center mt-4">
        {from === "homepage" && (
        <Link href={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      )}
      </div>
    </div>
  );
};

export default TrendingApps;