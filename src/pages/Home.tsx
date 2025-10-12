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

        <p className="text-gray-700 text-lg mb-3">
          I like optimistic people that have a good split between "doing" and
          "thinking". I think ~80/20 is optimal.
        </p>
        <p className="text-gray-700 text-lg mb-3">
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
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Some things I believe
        </h2>

        <ul className="list-disc list-inside">
          <li>Decision quality is the best leadership metric</li>
          <li>Easy companies are just as hard as hard ones</li>
          <li>Small teams get more done</li>
          <li>Moving quickly is important</li>
          <li>Impact over happiness, happiness comes from impact</li>
          <li>Markets trend toward efficiency but never get there</li>
          <li>Everything with more than one party is a trade</li>
          <li>
            Your first five hires shape your company more than the next fifty
          </li>
          <li>You really can just do things</li>
        </ul>
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Affiliations</h2>
        <p className="text-gray-700 mb-2">
          I'm lucky to be affiliated with some great people and organizations.
        </p>

        <ul className="list-disc list-inside">
          <li>Startup Shell</li>
          <li>Workshop</li>
          <li>South Park Commons</li>
          <li>YC</li>
          <li>University of Maryland</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
