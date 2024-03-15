export const lectures = [
  {
    emoji: '🚀',
    number: 1,
    description: `logistics/administrivia/expectations; distributed systems: what and why?`,
  },
  {
    emoji: '⏳',
    number: 2,
    description: `time and clocks; Lamport diagrams; causality and happens-before; network models; state and events`,
  },
  {
    emoji: '🕗',
    number: 3,
    description: `happens-before recap; partial orders; total orders; Lamport clocks; vector clocks`,
  },
  {
    emoji: '📨',
    number: 4,
    description: `Lamport clocks recap; vector clocks (continued); delivery vs. receiving; some safety properties of executions: FIFO delivery, causal delivery; implementing FIFO delivery`,
  },
  {
    emoji: '🔢',
    number: 5,
    description: `recap of FIFO/causal delivery; totally-ordered delivery; unicast/broadcast/multicast; implementing causal broadcast; introduction to distributed snapshots`,
  },
  { emoji: '📸', number: 6, description: `Chandy-Lamport snapshot algorithm` },
  {
    emoji: '🧷',
    number: 7,
    description: `Chandy-Lamport wrap-up; centralized vs. decentralized algorithms; safety and liveness; reliable delivery`,
  },
  {
    emoji: '💣',
    number: 8,
    description: `fault classification and fault models; two generals problem; common knowledge; forms of fault tolerance; idempotence and “exactly-once” delivery`,
  },
  {
    emoji: '☁️',
    number: 9,
    description: `reliable broadcast; implementing reliable broadcast; reasons to do replication; strong consistency (informally); midterm review`,
  },
  {
    emoji: '🏦',
    number: 10,
    description: `exam review; total order vs. determinism; consistency models (read-your-writes, FIFO, causal, strong); primary-backup replication`,
  },
  {
    emoji: '⛓️',
    number: 11,
    description: `chain replication; latency and throughput; dealing with failure in strongly consistent replication protocols; intro to consensus; the FLP result`,
  },
  { emoji: '🏝️', number: 12, description: `the Paxos protocol` },
  {
    emoji: '⚔️',
    number: 13,
    description: `Paxos wrap-up: nontermination, Multi-Paxos, fault tolerance of Paxos`,
  },
  {
    emoji: '🪵',
    number: 14,
    description: `brief discussion of other consensus protocols; passive vs. active (state machine) replication; eventual consistency; strong convergence and strong eventual consistency; intro to application-specific conflict resolution; network partitions`,
  },
  {
    emoji: '🛒',
    number: 15,
    description: `Dynamo concepts: availability and the consistency/availability trade-off; anti-entropy with Merkle trees; gossip; quorum consistency`,
  },
  { emoji: '💍', number: 16, description: `introduction to sharding; consistent hashing ` },
  {
    emoji: '🗺️',
    number: 17,
    description: `online systems vs. offline systems, raw data vs. derived data; intro to MapReduce; MapReduce examples: forward index to inverted index, word count`,
  },
  {
    emoji: '🦜',
    number: 18,
    description: `MapReduce wrap-up; the math behind replica conflict resolution: recap of strong convergence; recap of partial orders; upper bounds, least upper bounds, join-semilattices `,
  },
  { emoji: '👋', number: 19, description: `ask me anything` },
];
