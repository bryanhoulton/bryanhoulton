import alamoImage from '../assets/alamo.jpeg';
import boardImage from '../assets/board.jpeg';
import bugsImage from '../assets/bugs.jpg';
import bugsImage2 from '../assets/bugs2.jpeg';
import parkImage from '../assets/park.jpg';
import prImage from '../assets/pr.jpeg';
import sparkImage from '../assets/spark.jpeg';
import squatImage from '../assets/squat.jpeg';
import tillieImage from '../assets/tillie.jpeg';

type GalleryImage = {
  src: string;
  alt: string;
  span: string;
};

function Home() {
  const galleryImages: GalleryImage[] = [
    { src: bugsImage2, alt: "Bugs2", span: "col-span-2 row-span-2" },
    { src: bugsImage, alt: "Bugs", span: "col-span-2 row-span-2" },
    {
      src: parkImage,
      alt: "Park",
      span: "col-span-2 row-span-2 aspect-square",
    },
    { src: prImage, alt: "PR", span: "col-span-2 row-span-2 aspect-square" },
    {
      src: sparkImage,
      alt: "Spark",
      span: "col-span-3 row-span-2 aspect-video",
    },
    {
      src: boardImage,
      alt: "Board",
      span: "col-span-1 row-span-2",
    },
    {
      src: alamoImage,
      alt: "Alamo",
      span: "col-span-1 row-span-2",
    },
    {
      src: tillieImage,
      alt: "Tillie",
      span: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: squatImage,
      alt: "Squat",
      span: "col-span-1 row-span-2",
    },
  ];

  return (
    <div className="text-gray-900 px-6">
      <section className="flex flex-col py-6 max-w-2xl mb-6">
        <h1 className="text-7xl font-bold mb-4">Hello!</h1>
        <p className="text-lg mb-3 text-gray-700">
          I'm never satisfied & continuously try to learn the unlearned.
        </p>
        <p className="text-lg text-gray-700 mb-3">
          Currently all of my cognitive cycles are going into{" "}
          <a
            href="https://orinlabs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 p-1 underline rounded-md hover:bg-primary-50 transition-colors inline-block px-1 -mx-0.5"
          >
            Orin Labs
          </a>{" "}
          where we're solving teaching.
        </p>

        <p className="text-gray-700 text-lg">
          You can find my values{" "}
          <a
            href="https://glen-plough-111.notion.site/My-Fundamentals-f7cc23e7114c48ca9134267ff49d367e?pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 p-1 underline rounded-md hover:bg-primary-50 transition-colors inline-block px-1 -mx-0.5"
          >
            here
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          A porthole into my life
        </h2>
        <div className="grid grid-cols-4 gap-4 max-w-2xl">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
