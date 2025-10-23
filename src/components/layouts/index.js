// Component barrel
// Re-export commonly used component modules so you can import from '@/components'
// Examples:
// import { Navbar, Layout } from '@/components'

export { default as Navbar } from "./Navbar";
export { default as Layout } from "./Layout";
export { default as Footer } from "./Footer";
export { default as AboutInfo } from "./AboutInfo";

// Re-export all named UI exports (Button, Text, Title, Tooltip, Badge, etc.)
export * from "../ui";
