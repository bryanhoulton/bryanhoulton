type Bid = {
  name: string;
  description: string;
  amount: number;
};

const bids: Bid[] = [
  {
    name: "David Rosenthal",
    description: "I will pay you to yap",
    amount: 100,
  },
  { name: "Kudzo Ahegbebu", description: "I will pay you to yap", amount: 100 },
  { name: "Sholto Douglas", description: "I will pay you to yap", amount: 100 },
  { name: "Claire Birch", description: "I will pay you to yap", amount: 100 },
  { name: "Tyler Cowen", description: "I will pay you to yap", amount: 100 },
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
        {bids.map((bid) => (
          <div
            key={bid.name}
            className="flex flex-col gap-1 hover:bg-gray-100 rounded-md transition-all duration-300 p-2"
          >
            <div className="flex items-center gap-1">
              <h4 className="text-lg font-bold">{bid.name}</h4>
              <p className="text-gray-700">(${bid.amount})</p>
            </div>
            <p className="text-gray-700">{bid.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
