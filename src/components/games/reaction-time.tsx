"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Card } from "@/components/ui";

type GameState = "idle" | "waiting" | "ready" | "result";

export function ReactionTimeGame() {
  const [state, setState] = useState<GameState>("idle");
  const [score, setScore] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const [message, setMessage] = useState("Test your reaction speed.");
  const readyAt = useRef<number | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("reaction-time-best");
    if (stored) setBest(Number(stored));
    return () => {
      if (timeoutId.current) window.clearTimeout(timeoutId.current);
    };
  }, []);

  const startRound = useCallback(() => {
    if (timeoutId.current) window.clearTimeout(timeoutId.current);
    setScore(null);
    setState("waiting");
    setMessage("Wait for it...");
    const delay = 1500 + Math.floor(Math.random() * 3500);
    timeoutId.current = window.setTimeout(() => {
      readyAt.current = performance.now();
      setState("ready");
      setMessage("CLICK!");
    }, delay);
  }, []);

  function handleGameClick() {
    if (state === "idle" || state === "result") {
      startRound();
      return;
    }
    if (state === "waiting") {
      if (timeoutId.current) window.clearTimeout(timeoutId.current);
      setState("result");
      setMessage("Too early!");
      setScore(null);
      return;
    }
    if (state === "ready" && readyAt.current !== null) {
      const reaction = Math.round(performance.now() - readyAt.current);
      setScore(reaction);
      setState("result");
      setMessage(reaction + " ms");
      if (best === null || reaction < best) {
        setBest(reaction);
        window.localStorage.setItem("reaction-time-best", String(reaction));
      }
    }
  }

  const buttonLabel = state === "idle" ? "Start" : state === "waiting" ? "Wait..." : state === "ready" ? "CLICK!" : "Play Again";

  return (
    <div className="reaction-game">
      <Card className="reaction-card">
        <div className="reaction-topbar">
          <div><p className="reaction-label">BEST</p><strong>{best !== null ? best + " ms" : "—"}</strong></div>
          <div className="reaction-instructions"><p>{message}</p></div>
          <div className="reaction-score"><p className="reaction-label">LAST</p><strong>{score !== null ? score + " ms" : "—"}</strong></div>
        </div>
        <button type="button" className={"reaction-target reaction-" + state} onClick={handleGameClick} aria-label={state === "ready" ? "Click now" : "Reaction time game"}>
          <span>{buttonLabel}</span>
        </button>
        <div className="reaction-footer">
          <span>Wait for the target to change, then click as fast as you can.</span>
          <Button type="button" variant="ghost" onClick={startRound}>Restart</Button>
        </div>
      </Card>
      <div className="reaction-meta"><span>1 round</span><span>•</span><span>Personal best saved on this device</span></div>
      <p className="reaction-back"><Link href="/games">← All games</Link></p>
    </div>
  );
}