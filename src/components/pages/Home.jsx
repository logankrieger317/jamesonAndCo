import { useState } from "react";
import Header from "../layout/Header";
import Carousel from "../ui/Carousel";
import Peoples from "../features/People";
import Reviews from "../ui/Reviews";
import Footer from "../layout/Footer";
import Map from "../ui/Map";
import ChatAssistant from "../ui/ChatAssistant";
import ThanksgivingModal from "../modals/ThanksgivingModal";
import { trackBookNowClick } from '../../services/analytics';

const bookingUrl = "https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book"
const tiers = [
  {
    name: "Full Service Grooming",
    id: "tier-basic",
    href: bookingUrl,
    price: { starting: "$78", addons: "$100" },
    description: "A stylish haircut, soothing bat, and more for a fully pampered experience.",
    features: [
      ["Includes: ", "Haircut", ", ", "Bath", ", ", "Brush", ", "],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Feet, Face, and Fanny",
    id: "tier-FFF",
    href: bookingUrl,
    price: { starting: "$64", addons: "$85" },
    description: "A full bath and a trim of the Face, Feet, and Fanny trims to keep your pet looking sharp!",
    features: [
      ["Nail Grind"],
      ["Nail Trim"],
      ["Ear Cleaning"],
      ["And More..."],
    ],
  },
  {
    name: "Bath Only",
    id: "tier-essential",
    href: bookingUrl,
    price: { starting: "$35", addons: "$100" },
    description:
      "A relaxing and enjoyable wash to keep your pet happy and comfortable!",
    features: [
      ["Includes: ",  "Bath", ", ", "Brush", ", "],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Walk In",
    id: "tier-growth",
    href: bookingUrl,
    price: { starting: "$10", addons: "$60" },
    description: "No appointment, No problem! Check out our walk-in services.",
    features: [
      ["Nail Grind"],
      ["Nail Trim"],
      ["Ear Cleaning"],
      ["And More..."],
    ],
  },
];

const Home = () => {
  const bookingUrl = "https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book"
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <div>
        <ThanksgivingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        <ChatAssistant />
        <Header />

        {/* Photo Section */}
        <div className="relative mt-6 flex align-middle justify-center z-10 shadow-2xl ">
          <div className=" max-w-xl max-h-xl ">
            <Carousel />
          </div>
        </div>

        {/* Intro Block  */}

        <div className="relative isolate px-6 pt-2 lg:px-8 bg-opacity-100  z-10 m-2 rounded-xl shadow-2xl ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto -mt-24 max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                In Dogs We Trust
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to Jameson & Company Dog Grooming where your pet is
                truly loved! At Jameson & Company our slogan is, In Dog We
                Trust! We are passionate about work and excited to meet your
                pets. Our goal is to provide a stress-free, comfortable
                experience so that all pups leave Jameson & Company well-groomed
                and feeling happy. Thank you for choosing us for your grooming
                needs.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-500">
                <strong>Serving Kyle, Buda, and the Greater Austin Area:</strong> Located at 820 FM1626 in Austin, we're conveniently accessible to Kyle (Plum Creek, Steeplechase), Buda (Garlic Creek, Whispering Hollow), and surrounding communities. Professional dog grooming services for all breeds and sizes.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={bookingUrl}
                  onClick={(e) => {
                    // Prevent default to ensure our tracking runs
                    e.preventDefault();
                    // Track the click
                    trackBookNowClick('home_hero');
                    // Then navigate
                    window.location.href = bookingUrl;
                  }}
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Book Now!
                </a>
                {/* <a
                  href="Services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Meet The Team */}
        <Peoples />
        {/* Pricing Block */}

        <div className="bg-white py-24 sm:py-32 rounded-xl ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-red-600">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose the right package for you
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
              Prices to meet your needs, whether it's your first trim or you're
              a seasoned pro.
            </p>
            <div className="mt-20 flow-root rounded-xl">
              <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4 rounded-xl">
                {/* Tiers Section */}
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="pt-16 lg:px-8 lg:pt-0 xl:px-14 rounded-xl shadow-2xl m-2 p-4"
                  >
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-gray-900"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-6 flex items-baseline gap-x-1 ">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.price.starting}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        Starting
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {tier.price.addons} with most common add ons
                    </p>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      onClick={() => trackBookNowClick('pricing')}
                      className="mt-10 block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Book Now!
                    </a>
                    <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-6 space-y-3 text-sm font-bold leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <p
                            className="h-6 w-5 flex-none text-red-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Map />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};
export default Home;
