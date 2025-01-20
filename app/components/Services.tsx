import { Package, PackageOpen } from "lucide-react"

export default function Services() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services: FCL and LCL Shipping</h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer flexible shipping solutions to meet your specific needs, whether you're moving full container loads
            or smaller shipments.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <Package className="h-16 w-16 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Full Container Load (FCL)</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-center">
              <li>Ideal for large shipments</li>
              <li>Exclusive use of entire container</li>
              <li>Direct transport from origin to destination</li>
              <li>Reduced handling and potential for damage</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <PackageOpen className="h-16 w-16 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Less than Container Load (LCL)</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-center">
              <li>Cost-effective for smaller shipments</li>
              <li>Share container space with other cargo</li>
              <li>Flexible shipping schedules</li>
              <li>Ideal for businesses with fluctuating shipping needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

