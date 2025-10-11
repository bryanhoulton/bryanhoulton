type Album = {
  title: string;
  artist: string;
  cover: string;
  href: string;
  priority?: number;
};

const albums: Album[] = [
  {
    title: "In Tongues",
    artist: "Joji",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/04/34/0d/04340d45-f801-02f2-f1d4-b01b013cb571/888915539828_cover.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=joji%20in%20tongues",
  },
  {
    title: "AM",
    artist: "Arctic Monkeys",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg",
    href: "https://music.apple.com/search?term=arctic%20monkeys%20am",
  },
  {
    title: "Favourite Worst Nightmare",
    artist: "Arctic Monkeys",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=arctic%20monkeys%20favourite%20worst%20nightmare",
  },
  {
    title: "÷",
    artist: "Ed Sheeran",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/14/f5/67/14f56749-bee8-d746-bbe6-f030f4df37d7/5026854101538.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=ed%20sheeran%20",
  },
  {
    title: "The Human Condition",
    artist: "Jon Bellion",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ad/44/ea/ad44ea8b-af34-6628-8a86-65fa33c3ff82/16UMGIM28172.rgb.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=jon%20bellion%20the%20human%20condition",
  },
  {
    title: "OK Computer",
    artist: "Radiohead",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg",
    href: "https://music.apple.com/search?term=radiohead%20ok%20computer",
  },
  {
    title: "Vertigo",
    artist: "EDEN",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/bf/16/30/bf163042-d1c6-dde7-f7dc-cff2fb5bc765/17UM1IM28269.rgb.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=eden%20vertigo",
  },
  {
    title: "Free Spirit",
    artist: "Khalid",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cd/cb/39/cdcb393c-14e6-786a-b120-320957c25699/886447501610.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=khalid%20free%20spirit",
  },
  {
    title: "Unpeeled",
    artist: "Cage the Elephant",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/87/9d/5f/879d5f65-d31e-2090-7e08-a4e29e9092df/886446397436.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=cage%20the%20elephant%20unpeeled",
  },
  {
    title: "Fleet Foxes",
    artist: "Fleet Foxes",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/13/5d/b5135d6b-97e1-19cb-4234-5f711b77972e/098787077766.png/600x600bb.jpg",
    href: "https://music.apple.com/search?term=fleet%20foxes%20fleet%20foxes",
  },
  {
    title: "Pony",
    artist: "Rex Orange County",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e3/af/48/e3af4809-2a90-38c3-c485-44ae6471f75b/886447950241.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=rex%20orange%20county%20pony",
  },
  {
    title: "Tell Me It's Real",
    artist: "Seafret",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/34/65/51/34655139-b2e9-d623-8c4c-e19975efb02b/dj.figvivao.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=seafret%20tell%20me%20its%20real",
  },
  {
    title: "Arcane League of Legends",
    artist: "Various Artists",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/cf/da/60cfdaed-e33d-4f11-dae6-12ab04b75a8c/00196922993985_Cover.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=various%20artists%20arcane%20league%20of%20legends",
  },
  {
    title: "Melophobia",
    artist: "Cage the Elephant",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/d2/e2/02d2e290-82c9-bcf4-73fa-4cd06f65f4b9/886444143073.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=cage%20the%20elephant%20melophobia",
  },
  {
    title: "Original Broadway Cast Recording",
    artist: "Hamilton",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f3/99/31/f399318c-3f0d-bfd5-7a69-0b78b22a90df/075679921338.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=hamilton%20original%20broadway%20cast%20recording",
  },
  {
    title: "Apricot Princess",
    artist: "Rex Orange County",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/2d/1e/73/2d1e7358-0dde-30fc-b5fe-d6ca7d975954/5060450063043_1.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=rex%20orange%20county%20apricot%20princess",
  },
  {
    title: "Untrue",
    artist: "Burial",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9d/0f/1c/9d0f1c2b-2fae-d8ac-3920-ce9ec5bc85b5/7982.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=burial%20untrue",
  },
  {
    title: "Preacher's Daughter",
    artist: "Ethel Cain",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a7/ed/58/a7ed5868-e006-c8cb-5283-e138ea399701/5056167172390_1.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=ethel%20cain%20preachers%20daughter",
  },
  {
    title: "Continuum",
    artist: "John Mayer",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=john%20mayer%20continuum",
  },
  {
    title: "Birthplace",
    artist: "Novo Amor",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bd/ea/99/bdea99d7-53ce-031d-ea40-14ccac5096e7/cover.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=novo%20amor%20birthplace",
  },
  {
    title: "SYML",
    artist: "SYML",
    priority: 1,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fc/6d/85/fc6d855f-caf3-e0b0-95e9-e37ae5c5bc81/067003118651.png/600x600bb.jpg",
    href: "https://music.apple.com/search?term=syml%20syml",
  },
  {
    title: "Flow State",
    artist: "Tash Sultana",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/20/b7/da/20b7da34-2b19-6f91-7b0d-a751f7bc4eaf/3326.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=tash%20sultana%20flow%20state",
  },
  {
    title: "Blurryface",
    artist: "Twenty One Pilots",
    priority: 1,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=twenty%20one%20pilots%20blurryface",
  },
  {
    title: "Soundtrack",
    artist: "Spider-Man Into the Spider-Verse",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/25/96/92/259692e6-1d6f-14c8-19ab-6eda0db2be5d/XELMOB18262.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=spiderman%20into%20the%20spiderverse%20soundtrack",
  },
  {
    title: "Now, Not Yet",
    artist: "Half Alive",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d9/f5/5d/d9f55d68-c60b-e3ce-559d-75cd63a7f591/886447791950.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=half%20alive%20now%20not%20yet",
  },
  {
    title: "Broken Machine",
    artist: "Nothing But Thieves",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/56/8d/40/568d409e-ff31-b00a-1a3c-519c04fa748a/886446439075.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=nothing%20but%20thieves%20broken%20machine",
  },
  {
    title: "Oh Wonder",
    artist: "Oh Wonder",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f3/26/a5/f326a578-f5fd-2065-a043-4c361d57d551/15UMGIM26562.rgb.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=oh%20wonder%20oh%20wonder",
  },
  {
    title: "Go Farther in Lightness",
    artist: "Gang of Youths",
    priority: 1,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/58/32/3d583214-fa87-2788-54a7-fac91b2a8152/886446468518.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=gang%20of%20youths%20go%20farther%20in%20lightness",
  },
  {
    title: "Vessel",
    artist: "Twenty One Pilots",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/73/a7/23/73a7230c-19df-02a4-ff4e-53944024f63d/075679957924.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=twenty%20one%20pilots%20vessel",
  },
  {
    title: "Carrie & Lowell",
    artist: "Sufjan Stevens",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ba/61/bc/ba61bcaf-2034-f13e-6f66-fdb578d618dc/656605609966.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=sufjan%20stevens%20carrie%20%20lowell",
  },
  {
    title: "X&Y",
    artist: "Coldplay",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0c/82/48/0c8248a8-4a5b-d30d-8056-f32d650d2fc9/190295978068.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=coldplay%20xy",
  },
  {
    title: "My Head Is an Animal",
    artist: "Of Monsters and Men",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/a8/c2/a3a8c2ee-79ca-f4f0-8adb-0060e04432fd/12UMGIM10062.rgb.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=of%20monsters%20and%20men%20my%20head%20is%20an%20animal",
  },
  {
    title: "Sigh No More",
    artist: "Mumford & Sons",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e0/93/c3/e093c304-6a7b-a186-03f8-e4c27d44bb23/00892038002237_Cover.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=mumford%20%20sons%20sigh%20no%20more",
  },
  {
    title: "Dookie",
    artist: "Green Day",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5d/b8/1e/5db81e1c-62b2-41ae-da6b-52879bf2334d/093624850212.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=green%20day%20dookie",
  },
  {
    title: "i,i",
    artist: "Bon Iver",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/de/f0/bf/def0bfe3-6b57-34fa-3a40-bb67aa6284b2/656605235066.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=bon%20iver%20ii",
  },
  {
    title: "A Black Mile to the Surface",
    artist: "Manchester Orchestra",
    priority: 0,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/4b/39/3b4b39ec-f062-1361-68a6-b936e3a4ebcb/17CRGIM03389.rgb.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=manchester%20orchestra%20a%20black%20mile%20to%20the%20surface",
  },
  {
    title: "American Teen",
    artist: "Khalid",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f8/45/5a/f8455a71-8307-aa9a-9c95-3d22efe0804f/886446326146.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=khalid%20american%20teen",
  },
  {
    title: "Simulation Theory",
    artist: "Muse",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/3d/e5/ce/3de5cef0-83f1-4320-73e2-b32eae427634/190295559199.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=muse%20simulation%20theory",
  },
  {
    title: "Nectar",
    artist: "Joji",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/06/fb/8e/06fb8e9a-6748-3bad-8a84-5d00b15e4857/190296849497.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=joji%20nectar",
  },
  {
    title: "End Credits",
    priority: 1,
    artist: "EDEN",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/82/7e/fa/827efa70-b6df-15a2-50c9-982cc021772b/859715420463_cover.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=eden%20end%20credits",
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/600x600bb.jpg",
    href: "https://music.apple.com/search?term=frank%20ocean%20blonde",
  },
];

export default function Music() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-7xl mx-auto">
      <h3 className="text-7xl font-bold">Album Wall</h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {albums
          .sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10))
          .map((album) => (
            <a
              key={`${album.artist}-${album.title}`}
              href={album.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden group shadow-lg min-h-[100px] md:min-h-[200px] flex items-end transition-transform hover:scale-105"
              style={{
                backgroundImage: `
                linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(255,255,255,0.1) 100%),
                url(${album.cover})
              `,
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
}
