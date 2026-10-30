type Bid = {
  name: string;
  description: string;
  amount: number;
};

const bids: Bid[] = [
  {
    name: "Alignment Research",
    description:
      "If you work on alignment research, please talk to me about your concerns. I am generally not that concerned but want to learn other's perspectives.",
    amount: 51.47,
  },
  {
    name: "Neuromorphic Computing",
    description:
      "If you're making brains, reservoir computers, or connectomes, I want hear all about it. Bonus read: 'A Brief History of Intelligence' by Max Bennett.",
    amount: 25.14,
  },
  {
    name: "Reasons to Be in Space",
    description:
      "Besides satellites, what's the point of being in space? We need a reason for FAANG to dump billions into space infra. Is it data centers?",
    amount: 10.02,
  },
  {
    name: "Brain Computer Interfaces",
    description:
      "How are scaling laws applying to brain activity data? If you're working on BCIs, I want to hear about what's scaling and what isn't.",
    amount: 32.47,
  },
  {
    name: "Duplex Voice Models",
    description:
      "We need voice models that model reasoning and speech as separate, related channels. If you build this, we will be your first customer.",
    amount: 25.79,
  },
  {
    name: "Economics of Robot Deployment",
    description:
      "Which markets are most ripe for robot disruption? Which are cost centers and which are profit wells? How will the physical takeoff start?",
    amount: 17.92,
  },
];

export default function Bids() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <h3 className="text-6xl font-bold">Bids</h3>
        <p className="text-lg text-gray-700">
          I learn best from people that care about their thing. Please yap to me
          about your takes. These can be redeemed in person or virtually.
        </p>
      </div>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-2 -mx-2">
        {bids
          .sort((a, b) => b.amount - a.amount)
          .map((bid) => (
            <div
              key={bid.name}
              className="flex flex-col gap-1 hover:bg-gray-100 rounded-md transition-all duration-300 p-2"
            >
              <div className="flex items-center gap-1">
                <h4 className="text-lg font-bold">{bid.name}</h4>
                <p className="text-gray-700">(${bid.amount.toFixed(2)})</p>
              </div>
              <p className="text-gray-700">{bid.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
