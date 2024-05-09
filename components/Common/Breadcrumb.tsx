import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-64 lg:pt-[250px]">
      <div className="container mx-auto flex justify-center">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-10/12 lg:w-11/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12 text-center">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl flex justify-center">
                  {pageName}
                </h1>
                <p className="flex justify-center text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>
              </div>
            </div>
           
          </div>
        </div>

        
      </section>
    </>
  );
};

export default Breadcrumb;
