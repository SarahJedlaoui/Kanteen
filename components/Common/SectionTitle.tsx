const SectionTitle = ({
  title,
  paragraph,
  number,
  width = "500px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  number: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {/** <p className="text-primary font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          Step {number}:
        </p>*/}
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
