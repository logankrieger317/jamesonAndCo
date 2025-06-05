import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Reviews from "../ui/Reviews";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <p className="text-base font-semibold leading-7 text-red-600">Meet Your Groomer</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hello! I'm Hailey, Your Pup's Personal Groomer
              </h1>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 mb-16">
              <img 
                src="https://1bff00330b087e4e410e.cdn6.editmysite.com/uploads/b/1bff00330b087e4e410e76d46e213bda0e4c9548df0a8a71f7cdff7060f72b76/Screen%20Shot%202022-10-18%20at%203.03.14%20PM_1666123408.png?width=800&optimize=medium&height=480&fit=cover&dpr=1" 
                alt="Hailey with a dog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8 text-lg leading-8 text-gray-600">
              <p>
                From the moment I started working with animals over a decade ago, I knew I had found my calling. I began my journey as a bather, eager to learn the intricacies of dog grooming. As I honed my skills, I discovered an unexpected passion for transforming scruffy pups into polished pooches.
              </p>

              <p>
                Never in my wildest dreams did I imagine that my love for grooming would lead me to owning my very own salon. But here I am, surrounded by the joyful barks and playful antics of my furry clientele. It's a dream come true, and I can't imagine doing anything else.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-12">
                <h2 className="text-xl font-semibold text-red-900 mb-4">My Philosophy</h2>
                <p className="text-red-700">
                  At the heart of my philosophy lies the belief that every dog deserves a grooming experience that is tailored to their unique needs and personality. I take pride in creating a calm and comfortable environment where even the most anxious pups feel at ease.
                </p>
              </div>

              <p>
                Beyond the technical aspects of grooming, it's the connection I form with each dog that truly fuels my passion. I treat every furry friend with the utmost care and affection, building a bond that extends beyond the grooming table. Witnessing the transformation in their demeanor and spirits after a visit fills me with joy.
              </p>

              <p>
                Whether it's transforming a matted mess into a picture of elegance or simply providing a relaxing spa day, I approach each grooming session with dedication and enthusiasm. My salon is more than just a place for grooming; it's a sanctuary where furry companions receive the love and attention they deserve.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="italic">
                  When you entrust your beloved pet to my care, you can rest assured that they will be treated with the utmost respect, compassion, and expertise. I am not just a groomer; I am a friend to animals, and my passion extends beyond the salon walls. I actively support animal welfare initiatives in my community, striving to make a positive impact on the lives of all creatures.
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8">
              <a
                href="https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Book an Appointment
              </a>
              <a
                href="/blog"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
              >
                Read Our Blog <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
