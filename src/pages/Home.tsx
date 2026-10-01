import boardImage from "../assets/board.jpeg";
import bugsImage2 from "../assets/bugs2.jpeg";
import lakesideGroupImage from "../assets/lakeside-group.jpg";
import matchingSweatersImage from "../assets/matching-sweaters.jpg";
import mountainLakeImage from "../assets/mountain-lake.jpg";
import parkImage from "../assets/park.jpg";
import prImage from "../assets/pr.jpeg";
import sparkImage from "../assets/spark.jpeg";
import squatImage from "../assets/squat.jpeg";
import tillieImage from "../assets/tillie.jpeg";

type GalleryImage = {
  src: string;
  alt: string;
  span: string;
};

function Home() {
  const galleryImages: GalleryImage[] = [
    {
      src: parkImage,
      alt: "Park",
      span: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: tillieImage,
      alt: "Tillie",
      span: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: boardImage,
      alt: "Board",
      span: "col-span-3 row-span-2 aspect-video",
    },
    {
      src: squatImage,
      alt: "Squat",
      span: "col-span-1 row-span-2",
    },
    {
      src: lakesideGroupImage,
      alt: "Friends together beside a lake",
      span: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: mountainLakeImage,
      alt: "Friends gathered at a mountain lake",
      span: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: matchingSweatersImage,
      alt: "Three friends wearing matching cable-knit sweaters",
      span: "col-span-1 row-span-2",
    },
    {
      src: sparkImage,
      alt: "Spark",
      span: "col-span-3 row-span-2 aspect-video",
    },
    {
      src: bugsImage2,
      alt: "Bugs2",
      span: "col-span-2 row-span-2 aspect-square",
    },
    { src: prImage, alt: "PR", span: "col-span-2 row-span-2 aspect-square" },
  ];

  return (
    <div className="text-gray-900 px-6">
      <section className="flex flex-col py-6 max-w-2xl">
        <h1 className="text-7xl font-bold mb-4">Hello!</h1>
        <p className="text-lg mb-3 text-gray-700">
          I'm Bryan. I believe in scale, free markets, empiricism, and
          technology as a tool for civilizational growth. Currently I'm thinking
          a lot about continual learning, energy, space, and compute.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Some things I believe
        </h2>

        <ul className="list-disc list-inside">
          <li>
            <a href="nat.org" className="underline hover:text-gray-900">
              "As human beings it is our right (maybe our moral duty) to reshape
              the universe to our preferences"
            </a>
          </li>
          <li>Work on things that are important yet not being worked on</li>
          <li>Impact over happiness, happiness comes from impact</li>
          <li>Hard companies are just as hard as easy ones</li>
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
    </div>
  );
}

export default Home;
