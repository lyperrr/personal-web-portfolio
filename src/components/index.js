// Component barrel
// Re-export commonly used component modules so you can import from '@/components'
// Examples:
// import { Navbar, Layout } from '@/components'

export { default as Navbar } from "./layouts/Navbar";
export { default as Layout } from "./layouts/Layout";
export { default as Footer } from "./layouts/Footer";
export { default as AboutInfo } from "./layouts/AboutInfo";

// Re-export all named UI exports (Button, Text, Title, Tooltip, Badge, etc.)
export * from "./ui";
