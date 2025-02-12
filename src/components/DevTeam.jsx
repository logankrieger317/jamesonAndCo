import Header from "./Header";
import Footer from "./Footer";

export default function DevTeam() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Development Team</h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Day 13 Laboratories
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Website designed and developed by Logan Krieger
            </p>
            <div className="mt-4">
              <a
                href="https://logankrieger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-500"
              >
                Visit Developer's Website →
              </a>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://logankrieger.com"
                title="Logan Krieger's Website"
                className="w-full h-[600px] border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              2025 Day 13 Laboratories. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
