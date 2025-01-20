import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-red-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready for Seamless Hawaii Freight Forwarding?
          </h2>
          <p className="mt-4 text-xl text-red-100">
            Let Five Star Transportation handle your entire logistics chain. From pickup to final delivery, we've got
            you covered with our comprehensive, end-to-end solution.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="https://www.fivestartrans.com">
            <Button size="lg" variant="secondary">
              Get a Free Quote
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

