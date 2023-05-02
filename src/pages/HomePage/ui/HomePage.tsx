import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page';
import { Sidebar } from 'widgets/Sidebar';

export default function HomePage() {
  return (
    <Page className="grid grid-cols-autoFr gap-10">
      <Sidebar />

      <section className="w-full border">
        <div>home page</div>

        <Counter />

        {/* <div className="flex flex-col gap-20">
          {[...Array(20)]
            .map((_, i) => i)
            .map((i) => (
              <div className="flex h-40 w-40" key={i}>
                {i}
              </div>
            ))}
        </div> */}
      </section>
    </Page>
  );
}
