"use client";

import { useState } from "react";
import { Button, Card, Label, Textarea } from "@/components/ui";

const initialText = "Hello, world!";

function encodeBase64(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function decodeBase64(value: string) {
  const binary = atob(value.trim());
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function Base64Tool() {
  const [input, setInput] = useState(initialText);
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState<string | null>(null);

  function handleConvert() {
    try {
      setOutput(mode === "encode" ? encodeBase64(input) : decodeBase64(input));
      setError(null);
    } catch {
      setOutput("");
      setError(mode === "decode" ? "Invalid Base64 input." : "Unable to encode this text.");
    }
  }

  function handleCopy() {
    void navigator.clipboard.writeText(output);
  }

  function handleClear() {
    setInput("");
    setOutput("");
    setError(null);
  }

  return (
    <div className="base64-tool">
      <div className="base64-mode" role="group" aria-label="Base64 operation">
        <Button type="button" variant={mode === "encode" ? "primary" : "secondary"} onClick={() => { setMode("encode"); setError(null); }}>
          Encode
        </Button>
        <Button type="button" variant={mode === "decode" ? "primary" : "secondary"} onClick={() => { setMode("decode"); setError(null); }}>
          Decode
        </Button>
      </div>

      <div className="base64-tool-grid">
        <Card className="json-panel">
          <div className="tool-panel-header">
            <div>
              <Label htmlFor="base64-input">{mode === "encode" ? "Text" : "Base64"}</Label>
              <p>{mode === "encode" ? "Enter text to encode." : "Paste a Base64 string to decode."}</p>
            </div>
          </div>
          <Textarea
            id="base64-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            spellCheck={false}
            className="json-editor"
            placeholder={mode === "encode" ? "Hello, world!" : "SGVsbG8sIHdvcmxkIQ=="}
          />
          <div className="tool-actions">
            <Button type="button" onClick={handleConvert}>{mode === "encode" ? "Encode" : "Decode"}</Button>
            <Button type="button" variant="ghost" onClick={handleClear}>Clear</Button>
          </div>
        </Card>

        <Card className="json-panel">
          <div className="tool-panel-header">
            <div>
              <Label htmlFor="base64-output">{mode === "encode" ? "Base64 output" : "Decoded text"}</Label>
              <p>Conversion happens locally in your browser.</p>
            </div>
            <Button type="button" variant="secondary" onClick={handleCopy} disabled={!output}>Copy</Button>
          </div>
          <Textarea id="base64-output" value={output} readOnly spellCheck={false} className="json-editor" aria-label="Base64 conversion output" />
          {error && <p className="tool-error" role="alert">{error}</p>}
        </Card>
      </div>
    </div>
  );
}
