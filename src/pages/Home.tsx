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
          I'm Bryan. I believe in scale, free markets, empiricism, and
          technology levers. Currently I'm thinking a lot about memory and
          continual learning.
        </p>
        <p className="text-lg mb-3 text-gray-700">Some good reads:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <a
              href="https://arxiv.org/abs/2501.00663"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              Titans: Learning to Memorize at Test Time
            </a>
          </li>
          <li>
            <a
              href="https://abehrouz.github.io/files/NL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              Nested Learning: The Illusion of Deep Learning Architecture
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2601.07372"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              Conditional Memory via Scalable Lookup: A New Axis of Sparsity for
              Large Language Models
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Some other things I believe
        </h2>

        <ul className="list-disc list-inside">
          <li>Decision quality is the best leadership metric</li>
          <li>Easy companies are just as hard as hard ones</li>
          <li>Small teams get more done</li>
          <li>Moving quickly is important</li>
          <li>Impact over happiness, happiness comes from impact</li>
          <li>Markets inefficiently trend toward efficiency</li>
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
