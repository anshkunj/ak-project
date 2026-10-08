import type { Metadata } from "next";
import { ReactionTimeGame } from "@/components/games/reaction-time";

export const metadata: Metadata = {
  title: "Reaction Time Test — Free Browser Game | anshkunj",
  description: "Test your reaction speed with a fast, free browser reaction time game. No account required.",
  alternates: { canonical: "/games/game_1" },
};

export default function ReactionTimePage() {
  return (
    <main className="game-page">
      <div className="container">
        <div className="game-header">
          <p className="eyebrow">GAME 01 · REFLEX</p>
          <h1>Reaction Time</h1>
          <p>How fast can you react? Wait for the target to change, then click immediately.</p>
        </div>
        <ReactionTimeGame />
        <section className="game-info">
          <h2>How to play</h2>
          <p>Press Start, wait for the target to become ready, and click as quickly as possible. Clicking before it is ready counts as a false start.</p>
          <p>Your best score is stored only in your browser. Lower milliseconds are better.</p>
        </section>
      </div>
    </main>
  );
}
