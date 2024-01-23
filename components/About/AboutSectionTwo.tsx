import Image from "next/image";
import Link from "next/link";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/logo/linkedin.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/logo/linkedin.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Chat with our marketing experts
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our team will request information about your business or venue. This description should encompass key elements such as the type of business, its location, unique features, services provided, and any other aspects that distinguish your venue. Providing this information assists in devising a customized promotional strategy that accentuates the most attractive features of your business.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Contact Our Experts
                  </Link>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSectionTwo;
