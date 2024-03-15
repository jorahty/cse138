import { lectures } from '@/data/lectures';

export default function Home() {
  return (
    <main>
      {lectures.map(({ emoji, number, description }) => (
        <a key={number} href={`Lecture-${number}.pdf`}>
          <div>
            <h1>{number}</h1>
            <h2>{emoji}</h2>
          </div>
          <p>{description}</p>
        </a>
      ))}
    </main>
  );
}
