import haileyImage from '../Images/optimized/IMG_5380.webp';

const people = [
  {
    name: 'Hailey',
    email: 'info@jcoatx.com',
    role: 'Founder / Head Groomer',
    imageUrl: haileyImage,
    bio: 'Professional dog groomer with over a decade of experience, dedicated to providing the best care for your furry friends.'
  }
]

export default function Peoples() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">Meet Our Team</h2>
          <div className="space-y-6">
            {people.map((person) => (
              <div
                key={person.name}
                className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <img 
                      className="h-full w-full object-cover sm:aspect-[4/5]" 
                      src={person.imageUrl} 
                      alt={person.name}
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-lg font-medium text-red-600">
                        {person.role}
                      </p>
                      {person.email && (
                        <p className="text-sm text-gray-500">
                          <a 
                            href={`mailto:${person.email}`}
                            className="hover:text-red-600 transition-colors duration-200"
                          >
                            {person.email}
                          </a>
                        </p>
                      )}
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-600 leading-relaxed">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
