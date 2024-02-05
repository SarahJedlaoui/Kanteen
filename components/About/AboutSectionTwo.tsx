import Image from "next/image";
import Link from "next/link";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-20 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/blog/chat.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-xl"
                />
                <Image
                 src="/images/blog/chat.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none rounded-xl"
                />
              </div>
            </div>
            <div className="w-full px-20 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                    Chat with our marketing experts
                  </h2>
                  <p className="text-primary font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Step 2:
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our team will request information about your business or venue. This description should encompass key elements such as the type of business, its location, unique features, services provided, and any other aspects that distinguish your venue. Providing this information assists in devising a customized promotional strategy that accentuates the most attractive features of your business.
                  </p>
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
