type Quote = {
  text: string;
  source: string;
};

const quotes: Quote[] = [
  {
    text: "War is not monstrous for making corpses of men so much as it is for making machines of them. And woe to those who have no use in war except to feed the machines.",
    source: "Peirce Brown, Morning Star, pg. 199",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so.",
    source: "Mark Twain",
  },
  {
    text: "We are the unwilling, led by the unqualified, doing the unnecessary, for the ungrateful.",
    source: "The Reason You're Alive, Matthew Quick (requoted)",
  },
  {
    text: "We dont get to choose our time. Death is what gives life meaning. To know your days are numbered. Your time is short.",
    source: "The Ancient One, Doctor Strange",
  },
  {
    text: "No one knows what curves life will throw at you, but if the driver has the courage to create his own conditions, then the rain is simply rain.",
    source: "The Art of Racing in the Rain, 2019",
  },
  {
    text: "Everything around you that you call life was made up by people no smarter than you.",
    source: "Steve Jobs",
  },
  {
    text: "We were being told that we somehow must become what we are not, sacrificing what we are, to inherent the masquerade of what we will be.",
    source: "Shane Koyczan",
  },
  {
    text: "Listen earnestly to anything your children want to tell you, no matter what. If you don't listen eagerly to the little stuff when they are little, they won't tell you the big stuff when they are big, because to them all of it has always been big stuff.",
    source: "Catherine Wallace",
  },
  {
    text: "Keep in mind that many people have died for their beliefs; its actually quite common. The real courage is in living and suffering for what you believe.",
    source: "Brom - Eragon, by Christopher Paolini",
  },
  {
    text: "You know what tastes better than peanut butter and banana on a bagel? Its peanut butter and banana on a bagel when you're not worrying about shit.",
    source: "Joe Delaney",
  },
  {
    text: "You will wander blindly into the universe's libraries, all hubris, all certainty, and barely be out the door before you realize you didn't understand a damn thing you read. … Nature's imagination is better than yours, and she is under no obligation to make herself comprehensible.",
    source: "exurb1a",
  },
  {
    text: "Close your eyes. Count to one. That's how long forever feels.",
    source: "Kurzgesagt",
  },
  {
    text: "You're my friend. Who watched trashy TV with me and puts up with my shit. You're the person I don't need to explain myself to - not when it matters. You see everything I am, and you don't run away from it.",
    source: "Bryce - Crescent City, Sarah J Maas",
  },
  {
    text: "I watched my crew starve and die, and when they were gone, there was nothing I could do but sit alone in the dark and wait. I worked on equations, mathematical concepts you could never comprehend with your puny little brain, and I read and watched and counted toward infinity, as the Numenists do. All it did was stave off the darkness for one more second. One more moment. I screamed, though I have no mouth to scream. I wept, though I have no eyes for tears. I crawled through space and time, a worm inching through the labyrinth built by the dreams of a mad God. This I learned, meatbag, this and nothing more: when air, food, and shelter are assured, only two things matter. Work and companionship. To be alone and without purpose is to be the living dead.",
    source: "Gregorovich, To Sleep in a Sea of Stars, Christopher Paolini",
  },
  {
    text: "Hear me now. The Lord of Empty Spaces protects us as we venture forth to fight our foes. Guide our hands - and our thoughts - and guide our weapons that we may work our will upon these perversions of peace. Let daring be our shield and righteous fury be our sword, and may our enemies fleet at the sight of those who defend the defenseless, and may we stand unbowed and unbroken in the face of evil. For today is the Day of Wraith, and we are the instruments of our species' retribution.",
    source: "Gregorovich, To Sleep in a Sea of Stars, Christopher Paolini",
  },
  {
    text: "The ultimate hidden truth of the world is that it is something that we make, and could just as easily make differently.",
    source: "David Graebur",
  },
  {
    text: "How much did they first pay you to give up on your dreams? And when were you going to stop, and come back and do what makes you happy?",
    source: "Up In The Air",
  },
  {
    text: "And I'll use you as a warning sign... that if you talk enough sense then you'll lose your mind.",
    source: "I Found - Amber Run",
  },
  {
    text: "There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.",
    source: "The Wise Man's Fear, Patrick Rothfuss",
  },
  {
    text: "How dare you stand where he stood.",
    source: "Harry Potter, Harry Potter",
  },
  {
    text: "There is something terrifyingly beautiful about watching someone who has come to terms with death and stares it in the eyes with no fear.",
    source: "random tiktok",
  },
  {
    text: "To erode with others into a greater static is a luxury.",
    source: "random tiktok",
  },
  {
    text: "All those days that came and went, little did I know that they were life.",
    source: "Stig H. Johansson",
  },
  {
    text: "It's you, sitting with them, looking at the world, trying to solve a problem.",
    source: "Ed Sims when talking about sales",
  },
  {
    text: "I am the marsh now. I am the feather of an egret. I am every shell washed upon the shore. I am a firefly. You'll see hundreds beckoning far into the dark reaches of the marsh. And that's where you will always find me. Way out yonder. Where the crawdads sing.",
    source: "Where the Crawdads Sing, Delia Owens",
  },
  {
    text: "Suddenly you're ripped into being alive. And life is pain, and life is suffering, and life is horror, but my god you're alive and it's spectacular.",
    source: "Joseph Campbell",
  },
  {
    text: "Beautiful things don't ask for attention",
    source: "Secret Life of Walter Mitty",
  },
  {
    text: "All I ever did, I did to make you proud.",
    source: "Tai Lung, Kung Fu Panda",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
  },
  {
    text: "I have walked your halls, broken your schools, eaten at your tables, and suffered your gallows.",
    source: "Darrow, Red Rising",
  },
  {
    text: "He thinks he has to lead alone… because his father had to. He doesn't realize the strength you have together.",
    source: "Hiccups Mom, HTTYD",
  },
  {
    text: "Ten spears go to battle… and nine shatter. Did the war *forge* the one that remained? No, Amaram. All the war did was *identify the spear that would not break*.",
    source: "Kaladin Stormblessed, Oathbringer, Brandon Sanderson",
  },
  {
    text: "*By compressing the dull but necessary task of making a living into the smallest possible time, you show respect for* **life**, *and there is something grand about that.*",
    source: "Paul Graham",
  },
  {
    text: "@Nicole: \"Kids need parents not friends.\" Yeah and now I don't need a parent and I don't know how to be your friend so visiting is just awkward.",
    source: "Some random tiktok comment",
  },
  {
    text: "With shortness of breath… I'll try to explain the infinite… And how rare and beautiful it truly is that we exist",
    source: "Saturn, Sleeping at Last",
  },
  {
    text: "You want me to wrap us Smash? Like, as a whole? The whole thing? sighs You want me to wrap up all of Smash. It means so much to me, and I really do think it was important. But you're asking me why? … Well, it was a chance for us to be somebody. It was a chance for all of us, to be somebody. And that was a big deal.",
    source: "Smash Melee Documentary",
  },
  {
    text: "Out beyond the ideas of right and wrongdoing, there is a field. I'll met you there.",
    source: "Rumi",
  },
  {
    text: "Living is an ocean",
    source: "@dadchats",
  },
  {
    text: "I will only ever love you with my arms behind my back. Because I'm gonna love you heart forward. It's all I know.",
    source: "Nahko and the Medicine for the People",
  },
  {
    text: "I thought I knew all the people in the world who were asking these questions. Who on Earth are you?",
    source: "Sholto Douglas",
  },
  {
    text: "Perhaps the only difference between me and other people, was that I've always demanded more from the sunset. More spectacular colours when the sun hit the horizon. That's perhaps my only sin.",
    source: "Nymphomaniac Vol I.",
  },
  {
    text: "The crux of man is to truly make meaning, and not delusion, out of nothing.",
    source: "Anton Wilson",
  },
  {
    text: "It's always been you.",
    source: "Pepper Potts",
  },
  {
    text: "Don't regret the pain. Love that it meant you lived.",
    source: "random tiktok",
  },
  {
    text: "You are precisely as big as what you love and precisely as small as what you allow to annoy you.",
    source: "Anton Wilson",
  },
  {
    text: "Tell me about your tomorrow.",
    source: "A close friend",
  },
  {
    text: "It ain't the being alone\nIt ain't the empty home, baby\nYou know I'm good on my own\nYou know, it's more the being unknown",
    source: "Hozier, Unknown / Nth",
  },
  {
    text: "B level performance gets an A level severance package.",
    source: "Reed Hastings",
  },
  {
    text: "When I came to meet you at the end of\nthe day I was sure you were going to\ntell me you were leaving when suddenly\nyou took my face in your hands and\nkissed me on the mouth so perfectly and\nby surprise my soul exploded right out\nthe back of my head in a way I've simply\nnever been able to fold or back inside\nnor would I want to",
    source: "**The Next Comes**, exurb1a",
  },
  {
    text: 'For the first time "Bryan" was mentioned by more people unprompted than any other alumnus. More than Wes. More than Mackenzie. More than Jackson or Pranav or Saurav or Nabeela. Your lore is strong rn.',
    source: "JN",
  },
  {
    text: "I want to feel your soft lips, your sharp teeth, Feel your nails in my flesh, your light, your color, your pulseYour sweat, your speed, your muscle, your fleshYour skin, your boneYour shadow, your breath, your bloodYour mouth, your cry shatteredYour heartbeat, your heartbeat, your heartbeatYour heartbeat, your heartbeat. Warm dawn, bodies and breath — I am alive.",
    source: "Woman Is, Lempicka",
  },
  {
    text: "Thou art God.",
    source: "Stranger in a Strange Land",
  },
  {
    text: "Tout est normal, t'es amoureux, tu n'choisis pas",
    source: "Emma Peters",
  },
  {
    text: "No kids? Your age? In a heartbeat.",
    source: "A friend.",
  },
  {
    text: "Okay.",
    source: "Eternal Sunshine of a Spotless Mind",
  },
  {
    text: "Your life will not go unnoticed because I will notice it. Your life will not go unwitnessed because I will be your witness.",
    source: "Shall We Dance",
  },
];

export default function Quotes() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl">
      <h3 className="text-7xl font-bold">Quotes</h3>
      <p className="text-lg text-gray-700 mb-2">
        Bangers that I ended up saving.
      </p>

      <div className="space-y-1 -mx-4">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-100 rounded-md transition-all duration-300"
          >
            <blockquote className="text-gray-800 text-lg italic leading-relaxed mb-2">
              "{quote.text}"
            </blockquote>
            {quote.source && (
              <cite className="not-italic text-gray-500 text-sm font-light">
                — {quote.source}
              </cite>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
