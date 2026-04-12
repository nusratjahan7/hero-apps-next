import { ArrowLeft, Download, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const appsPromise = async function () {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
};

const AppDetailsPage = async ({ params }) => {
    const apps = await appsPromise();
    const { id } = await params;
    const app = apps.find(app => app.id == id);

    let totalRatings = 0;
    app.ratings.forEach((rating) => {
        totalRatings += rating.count;
    });

    return (
        <section className='container mx-auto px-3'>
            <div className='mt-5'>
                <Link href="/apps" className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 font-bold hover:text-[#1a2980] transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Apps
                </Link>
            </div>
            <div className='mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start'>
                <Image src={app.image} alt={app.title}
                    width={160}
                    height={160}
                    className="h-40 w-40 rounded-3xl object-contain border border-gray-100 shadow-md" />

                <div className='space-y-2 flex-1'>
                    <h1 className='text-3xl font-bold'>{app.title}</h1>
                    <p className='text-gray-500'> Developed by: <span className='text-[#1a2980] font-medium'> {app.companyName}</span></p>
                    <div className='flex flex-wrap items-center gap-6'>
                        <span className='flex items-center gap-1.5 text-orange-400'>
                            <FaStar />
                            {app.ratingAvg}
                        </span>
                        <span className='flex gap-1.5 items-center text-gray-500'>
                            <Download />
                            {app.downloads}
                        </span>
                        <span className='flex gap-1.5 items-center text-gray-500'>
                            <MessageSquare />
                            {app.reviews}
                        </span>
                        <span className='text-gray-500'>{app.size} MB</span>
                    </div>

                    {/* <button 
            
            className={`btn mt-4 bg-linear-to-r from-[#1a2980] to-[#26d0ce] text-white ${
            isInstalled ? 'opacity-50 cursor-not-allowed' : ''
            }`}

            onClick={() => {
            if (!isInstalled) handleInstall();
           }}
            disabled={isInstalled}>

                {isInstalled ? 'Installed' : 'Install'}
            </button> */}
                </div>
            </div>

                {/* rating  */}
            <div className="mt-10 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg md:p-8 mb-4">
          <h2 className="text-2xl font-bold">Ratings breakdown</h2>
          <div className="mt-6 space-y-4">
            {app.ratings.map((rating) => {
              const width = Math.max((rating.count / totalRatings) * 100, 4);

              return (
                <div
                  key={rating.name}
                  className="grid gap-2 md:grid-cols-[120px_1fr_110px] md:items-center"
                >
                  <span className="font-medium text-base-content/70">
                    {rating.name}
                  </span>
                  <div className="h-3 overflow-hidden rounded-full bg-base-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className="text-right font-semibold">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
          </div>


            {/* Description */}
            <div className="rounded-xl border border-gray-200 mb-8  p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-bold text-foreground">Description</h2>
                <p className="leading-relaxed text-gray-500">{app.description}</p>
            </div>

        </section>
    );
};

export default AppDetailsPage;