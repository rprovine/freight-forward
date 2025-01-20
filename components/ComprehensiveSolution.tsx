import { Truck, Ship, Package, MapPin } from "lucide-react"

export default function ComprehensiveSolution() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Five Star Transportation?</h2>
          <p className="mt-4 text-lg text-gray-500">
            We simplify your decision-making process by offering a complete, end-to-end logistics solution for shipping
            to and from Hawaii.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <Truck className="h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Inland Trucking</h3>
            <p className="mt-2 text-center text-gray-500">From your location to Long Beach, CA</p>
          </div>
          <div className="flex flex-col items-center">
            <Package className="h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Storage in CA</h3>
            <p className="mt-2 text-center text-gray-500">Secure storage at our Long Beach facility</p>
          </div>
          <div className="flex flex-col items-center">
            <Ship className="h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Ocean Freight</h3>
            <p className="mt-2 text-center text-gray-500">Reliable shipping across the Pacific</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Hawaii Delivery</h3>
            <p className="mt-2 text-center text-gray-500">Port pickup and final mile delivery</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">
            With Five Star Transportation, you get a single point of contact for your entire shipping journey. No need
            to coordinate with multiple providers - we handle it all, ensuring a smooth, efficient, and hassle-free
            experience.
          </p>
        </div>
      </div>
    </section>
  )
}

