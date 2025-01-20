import { Scale } from "lucide-react"

export default function JonesAct() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Scale className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Understanding the Jones Act</h2>
          <p className="mt-4 text-lg text-gray-500">
            The Jones Act is a federal law that regulates maritime commerce in the United States, significantly
            impacting freight forwarding to and from Hawaii.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Key Points</h3>
            <ul className="mt-5 list-disc list-inside space-y-2 text-gray-500">
              <li>
                Requires goods shipped between U.S. ports to be transported on ships built, owned, and operated by U.S.
                citizens or permanent residents
              </li>
              <li>Affects shipping costs and logistics for Hawaii-bound freight</li>
              <li>Aims to maintain a strong U.S. maritime industry</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Impact on Hawaii Shipping</h3>
            <ul className="mt-5 list-disc list-inside space-y-2 text-gray-500">
              <li>Limited carrier options for domestic routes</li>
              <li>Potentially higher shipping costs compared to international routes</li>
              <li>Increased complexity in logistics planning and execution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

