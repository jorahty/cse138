import { lectures } from '@/data/lectures';

export default function Home() {
  return (
    <main>
      {lectures.map(({ emoji, number, description }) => (
        <a key={number} href={`Lecture-${number}.pdf`}>
          <h1>{emoji}</h1>
          <h1>{number}</h1>
          <p>{description}</p>
        </a>
      ))}
    </main>
  );
}
