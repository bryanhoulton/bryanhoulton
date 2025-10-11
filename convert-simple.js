import fs from 'fs';

const albumData = JSON.parse(fs.readFileSync("album-data.json", "utf8"));

// Flatten all albums into one array
const allAlbums = [
  ...albumData.first,
  ...albumData.second,
  ...albumData.third,
  ...albumData.fourth,
  ...albumData.fifth,
];

const tsCode = `type Album = {
  title: string;
  artist: string;
  cover: string;
  href: string;
};

const albums: Album[] = ${JSON.stringify(
  allAlbums.map((album) => ({
    title: album.title,
    artist: album.artist,
    cover: album.cover,
    href: album.href,
  })),
  null,
  2
)};

export default function Music() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-7xl mx-auto">
      <h3 className="text-7xl font-bold">Music</h3>
      <p>Caffeine for the mind.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {albums.map((album) => (
          <a
            key={\`\${album.artist}-\${album.title}\`}
            href={album.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden group shadow-lg min-h-[280px] flex items-end transition-transform hover:scale-105"
            style={{
              backgroundImage: \`
                linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(255,255,255,0.1) 100%),
                url(\${album.cover})
              \`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "1/1",
            }}
          >
            <div className="w-full p-3">
              <h4 className="text-white text-lg font-bold drop-shadow mb-1 line-clamp-2">
                {album.title}
              </h4>
              <p className="text-gray-200 text-sm drop-shadow">
                {album.artist}
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
          </a>
        ))}
      </div>
    </div>
  );
}`;

fs.writeFileSync("Music-simple.tsx", tsCode);
console.log("✅ Simple Music.tsx generated with all albums in one grid!");
console.log(`📊 Total albums: ${allAlbums.length}`);
