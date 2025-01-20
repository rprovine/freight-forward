import { Truck } from "lucide-react"

export default function Carriers() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Truck className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Major Carriers: Pasha and Matson</h2>
          <p className="mt-4 text-lg text-gray-500">
            Two primary carriers dominate the Hawaii freight forwarding industry, each offering unique services and
            capabilities.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Pasha Hawaii</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Specializes in roll-on/roll-off cargo and containerized freight</li>
              <li>Offers bi-weekly service between the U.S. West Coast and Hawaii</li>
              <li>Known for their modern, fuel-efficient vessels</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Matson</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Provides comprehensive shipping and logistics services</li>
              <li>Offers multiple weekly sailings from the U.S. West Coast to Hawaii</li>
              <li>Extensive experience in handling various types of cargo, including refrigerated goods</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

