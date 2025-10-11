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
    name: "Research vs Application Layer",
    description:
      "Talk to me about why you're working on one and not the other.",
    amount: 5.8,
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
      "Besides satellites, what's the point of being in space? We need a reason for FAANG to dump billions into space infra.",
    amount: 10.02,
  },
  {
    name: "Duplex Voice Models",
    description:
      "We need voice models that can i/o data streams asynchronously.",
    amount: 25.79,
  },
];

export default function Bids() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <h3 className="text-7xl font-bold">Bids</h3>
        <p className="text-lg text-gray-700">
          I learn best from people that care about their thing. Please yap to me
          about your takes. These can be redeemed in person or virtually.
        </p>
      </div>

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
