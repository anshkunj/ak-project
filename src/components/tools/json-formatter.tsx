"use client";

import { useMemo, useState } from "react";
import { Button, Card, Label, Textarea } from "@/components/ui";

const initialJson = JSON.stringify({ name: "AnshKunj", tools: ["JSON Formatter", "Base64", "URL Encoder"], active: true }, null, 2);

function parseJson(value: string) {
  return JSON.parse(value);
}

export function JsonFormatter() {
  const [input, setInput] = useState(initialJson);
  const [output, setOutput] = useState(initialJson);
  const [error, setError] = useState<string | null>(null);

  const validation = useMemo(() => {
    try { parseJson(input); return { valid: true, message: "Valid JSON" }; }
    catch { return { valid: false, message: "Invalid JSON" }; }
  }, [input]);

  function handleFormat() {
    try { setOutput(JSON.stringify(parseJson(input), null, 2)); setError(null); }
    catch (err) { setError(err instanceof Error ? err.message : "Invalid JSON"); }
  }

  function handleMinify() {
    try { setOutput(JSON.stringify(parseJson(input))); setError(null); }
    catch (err) { setError(err instanceof Error ? err.message : "Invalid JSON"); }
  }

  function handleCopy() { void navigator.clipboard.writeText(output); }
  function handleClear() { setInput(""); setOutput(""); setError(null); }

  return (
    <div className="json-tool">
      <div className="json-tool-grid">
        <Card className="json-panel">
          <div className="tool-panel-header">
            <div><Label htmlFor="json-input">Input JSON</Label><p>Paste or type JSON to validate and format it.</p></div>
            <span className={validation.valid ? "tool-status valid" : "tool-status invalid"}>{validation.message}</span>
          </div>
          <Textarea id="json-input" value={input} onChange={(event) => setInput(event.target.value)} spellCheck={false} className="json-editor" placeholder='{"hello":"world"}' />
          <div className="tool-actions">
            <Button type="button" onClick={handleFormat}>Format</Button>
            <Button type="button" variant="secondary" onClick={handleMinify}>Minify</Button>
            <Button type="button" variant="ghost" onClick={handleClear}>Clear</Button>
          </div>
        </Card>

        <Card className="json-panel">
          <div className="tool-panel-header">
            <div><Label htmlFor="json-output">Output</Label><p>Formatted or minified JSON appears here.</p></div>
            <Button type="button" variant="secondary" onClick={handleCopy} disabled={!output}>Copy</Button>
          </div>
          <Textarea id="json-output" value={output} readOnly spellCheck={false} className="json-editor" aria-label="Formatted JSON output" />
          {error && <p className="tool-error" role="alert">{error}</p>}
        </Card>
      </div>
    </div>
  );
}
