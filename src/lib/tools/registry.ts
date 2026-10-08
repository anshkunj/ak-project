export type ToolDefinition = {
  slug: string;
  name: string;
  description: string;
  category: string;
  href: string;
};

export const tools: ToolDefinition[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Format, validate, and minify JSON directly in your browser.",
    category: "Developer Tools",
    href: "/tools/json-formatter",
  },
  {
    slug: "base64",
    name: "Base64 Encoder & Decoder",
    description: "Encode and decode Base64 text quickly in your browser.",
    category: "Developer Tools",
    href: "/tools/base64",
  },
];
