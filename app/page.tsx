const descriptions = [
  `logistics/administrivia/expectations; distributed systems: what and why?`,
  `time and clocks; Lamport diagrams; causality and happens-before; network models; state and events`,
  `happens-before recap; partial orders; total orders; Lamport clocks; vector clocks`,
  `Lamport clocks recap; vector clocks (continued); delivery vs. receiving; some safety properties of executions: FIFO delivery, causal delivery; implementing FIFO delivery`,
  `recap of FIFO/causal delivery; totally-ordered delivery; unicast/broadcast/multicast; implementing causal broadcast; introduction to distributed snapshots`,
  `Chandy-Lamport snapshot algorithm`,
  `Chandy-Lamport wrap-up; centralized vs. decentralized algorithms; safety and liveness; reliable delivery`,
  `fault classification and fault models; two generals problem; common knowledge; forms of fault tolerance; idempotence and “exactly-once” delivery`,
  `reliable broadcast; implementing reliable broadcast; reasons to do replication; strong consistency (informally); midterm review`,
];

export default function Home() {
  return (
    <main>
      {descriptions.map((v, i) => (
        <a key={i} href={`Lecture-${i + 1}.pdf`}>
          <h1>{i + 1}</h1>
          <p>{v}</p>
        </a>
      ))}
    </main>
  );
}
