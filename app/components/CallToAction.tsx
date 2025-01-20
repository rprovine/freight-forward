import { Ship } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full bg-red-500 px-4 py-1 text-sm font-semibold">
                <Ship className="mr-2 h-4 w-4" />
                Hawaii Freight Forwarding Experts
              </div>
              <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
                Five Star Transportation: Your One-Stop Hawaii Freight Solution
              </h1>
              <p className="mt-4 text-lg">
                Simplify your logistics with our comprehensive end-to-end services. From inland trucking to final mile
                delivery in Hawaii, we handle it all.
              </p>
              {/* Free Quote Button */}
              <div className="mt-6">
                <a
                    href="https://www.fivestartrans.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-red-600 hover:bg-gray-200"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <Image
                  src="/freight_ship.jpg"
                  alt="Cargo ship at port representing Five Star Transportation's freight forwarding services"
                  layout="fill"
                  objectFit="cover"
                  priority
              />
            </div>
          </div>
        </div>
      </div>
  );
}