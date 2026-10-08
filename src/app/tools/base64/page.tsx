import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/tool-shell";
import { Base64Tool } from "@/components/tools/base64";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder — Free Online Tool | anshkunj",
  description: "Encode and decode Base64 text in your browser. Fast, free, and no account required.",
  alternates: { canonical: "/tools/base64" },
};

export default function Base64Page() {
  return (
    <ToolShell
      category="Developer Tools"
      title="Base64 Encoder & Decoder"
      description="Encode text to Base64 or decode Base64 back to text directly in your browser."
      howToUse={<><p>Choose <strong>Encode</strong> or <strong>Decode</strong>, enter your value, and select the corresponding action.</p><p>Conversion runs locally in your browser, so the input is not sent to a server.</p></>}
      examples={<><p><strong>Encode:</strong> <code>Hello, world!</code> → <code>SGVsbG8sIHdvcmxkIQ==</code></p><p><strong>Decode:</strong> <code>SGVsbG8sIHdvcmxkIQ==</code> → <code>Hello, world!</code></p></>}
      faq={<>
        <details><summary>What is Base64 used for?</summary><p>Base64 represents binary data as text and is commonly used when data needs to travel through text-based systems.</p></details>
        <details><summary>Is Base64 encryption?</summary><p>No. Base64 is an encoding format, not encryption. Encoded data can be decoded by anyone who has it.</p></details>
        <details><summary>Does this tool upload my data?</summary><p>No. Encoding and decoding happen locally in your browser.</p></details>
      </>}
      relatedTools={[{ name: "JSON Formatter & Validator", href: "/tools/json-formatter" }]}
    >
      <Base64Tool />
    </ToolShell>
  );
}
