import Link from "next/link";

export default function GamesPage() {
  return (
    <main className="games-page">
      <div className="container">
        <div className="games-index-header">
          <p className="eyebrow">BROWSER GAMES</p>
          <h1>Play something quick.</h1>
          <p>Lightweight games you can play instantly in your browser. No account required.</p>
        </div>
        <div className="games-grid">
          <Link href="/games/game_1" className="game-index-card">
            <span className="game-number">01</span>
            <h2>Reaction Time</h2>
            <p>Test your reflexes and chase a faster reaction time.</p>
            <span className="game-link">Play game →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
