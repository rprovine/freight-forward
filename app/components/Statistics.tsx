import { BarChart, PieChart, TrendingUp } from "lucide-react"

export default function Statistics() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Five Star Transportation: By the Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Key statistics and data points that highlight Five Star Transportation's achievements.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <BarChart className="mx-auto h-10 w-10 text-red-600" />
            <p className="mt-4 text-4xl font-extrabold text-red-600">98%</p>
            <p className="mt-2 text-gray-500">on-time delivery rate</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <PieChart className="mx-auto h-10 w-10 text-red-600" />
            <p className="mt-4 text-4xl font-extrabold text-red-600">50K+</p>
            <p className="mt-2 text-gray-500">shipments handled annually</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <TrendingUp className="mx-auto h-10 w-10 text-red-600" />
            <p className="mt-4 text-4xl font-extrabold text-red-600">20+</p>
            <p className="mt-2 text-gray-500">years of experience</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-500">Source: Five Star Transportation internal data</p>
        </div>
      </div>
    </section>
  )
}

