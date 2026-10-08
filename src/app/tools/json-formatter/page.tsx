import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/tool-shell";
import { JsonFormatter } from "@/components/tools/json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Free Online Tool | anshkunj",
  description: "Format, validate, and minify JSON in your browser. A fast free JSON formatter and validator with no account required.",
};

export default function JsonFormatterPage() {
  return (
    <ToolShell
      category="Developer Tools"
      title="JSON Formatter & Validator"
      description="Format, validate, and minify JSON directly in your browser. Your JSON stays in the browser while you work."
      howToUse={<><p>Paste JSON into the input panel. The validator checks it as you type.</p><p>Select <strong>Format</strong> to pretty-print JSON, or <strong>Minify</strong> to remove unnecessary whitespace. Use Copy to copy the result.</p></>}
      examples={<><p>Input: <code>{"{"name":"Alex","age":14}"}</code></p><p>Formatted output becomes an indented JSON object that is easier to read and debug.</p></>}
      faq={<>
        <details><summary>Is my JSON uploaded to a server?</summary><p>No. Formatting and validation are performed in your browser.</p></details>
        <details><summary>Does this validate JSON syntax?</summary><p>Yes. The browser JSON parser checks whether the input is valid JSON.</p></details>
        <details><summary>Can I minify JSON?</summary><p>Yes. Minify removes formatting whitespace while keeping the JSON data intact.</p></details>
      </>}
      relatedTools={[
        { name: "Base64 Encoder & Decoder", href: "/tools/base64" },
        { name: "URL Encoder & Decoder", href: "/tools/url-encoder" },
        { name: "JWT Decoder", href: "/tools/jwt-decoder" },
      ]}
    >
      <JsonFormatter />
    </ToolShell>
  );
}
