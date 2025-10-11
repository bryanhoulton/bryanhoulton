export default function People() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-2xl">
      <h3 className="text-7xl font-bold">People</h3>
      <p>
        Inspired by{" "}
        <a
          href="https://patrickcollison.com/people"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 p-1 underline rounded-md hover:bg-primary-50 transition-colors inline-block px-1 -mx-0.5"
        >
          this list
        </a>{" "}
        from Patrick Collison.
      </p>
    </div>
  );
}
