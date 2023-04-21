export default function HomePage() {
  return (
    <div className="w-full border">
      <div>home page</div>

      <div className="flex flex-col gap-20">
        {[...Array(20)]
          .map((_, i) => i)
          .map((i) => (
            <div className="flex h-40 w-40" key={i}>
              {i}
            </div>
          ))}
      </div>
    </div>
  );
}
