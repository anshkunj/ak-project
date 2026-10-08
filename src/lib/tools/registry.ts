export type ToolDefinition = {
  slug: string;
  name: string;
  description: string;
  category: string;
  href: string;
};

export const tools: ToolDefinition[] = [
  { slug: "json-formatter", name: "JSON Formatter & Validator", description: "Format, validate, and minify JSON directly in your browser.", category: "Developer Tools", href: "/tools/json-formatter" },
  { slug: "base64", name: "Base64 Encoder & Decoder", description: "Encode and decode Base64 text quickly.", category: "Developer Tools", href: "/tools/base64" },
  { slug: "url-encoder", name: "URL Encoder & Decoder", description: "Encode or decode URL components safely.", category: "Developer Tools", href: "/tools/url-encoder" },
  { slug: "jwt-decoder", name: "JWT Decoder", description: "Inspect JWT headers and payloads without sending them to a server.", category: "Developer Tools", href: "/tools/jwt-decoder" },
  { slug: "uuid-generator", name: "UUID Generator", description: "Generate UUIDs for development and testing.", category: "Developer Tools", href: "/tools/uuid-generator" },
  { slug: "timestamp", name: "Timestamp Converter", description: "Convert Unix timestamps to readable dates and back.", category: "Developer Tools", href: "/tools/timestamp" },
  { slug: "percentage-calculator", name: "Percentage Calculator", description: "Calculate percentages, increases, decreases, and differences.", category: "Calculators", href: "/tools/percentage-calculator" },
  { slug: "unit-converter", name: "Unit Converter", description: "Convert common units for everyday calculations.", category: "Calculators", href: "/tools/unit-converter" },
  { slug: "age-calculator", name: "Age Calculator", description: "Calculate age from a date of birth.", category: "Calculators", href: "/tools/age-calculator" },
  { slug: "calculator", name: "Scientific Calculator", description: "Perform everyday and scientific calculations.", category: "Calculators", href: "/tools/calculator" },
];
