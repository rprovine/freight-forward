import { MapPin } from "lucide-react"

export default function Routes() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Shipping Routes</h2>
          <p className="mt-4 text-lg text-gray-500">
            We specialize in efficient freight forwarding along crucial domestic and international routes to and from
            Hawaii.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Domestic: Long Beach, CA to Hawaii</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Regular weekly sailings coordinated by Five Star Transportation</li>
              <li>Seamless integration with our inland trucking and storage services</li>
              <li>Transit time: Approximately 5-7 days</li>
              <li>Full visibility and tracking throughout the journey</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">International: China to Hawaii</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Comprehensive service from Chinese ports to final destination in Hawaii</li>
              <li>Coordination with trusted partners for the international leg</li>
              <li>Customs clearance and documentation handled by our experts</li>
              <li>Smooth transition to our domestic services upon reaching the U.S.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

