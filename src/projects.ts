import type { IconName } from "./components/Icon";

// Texts live in src/i18n/*.json under `<name>.*` (tagline, intro, features.<key>.title/text, shots.<n>).
export const PROJECTS = [
  {
    name: "exposr",
    tags: ["Rust", "TCP/UDP", "GraphQL", "MongoDB"],
    shots: [
      { src: "/screenshots/exposr-dashboard.webp", width: 1440, height: 900 },
      { src: "/screenshots/exposr-services.webp", width: 1440, height: 900 },
    ],
    features: [
      { key: "tcpudp", icon: "plug" },
      { key: "live", icon: "activity" },
      { key: "tls", icon: "shield" },
      { key: "deploy", icon: "layers" },
    ],
    snippet: `# next to your services, once the server runs
exposr-client --server exposr.example.com:2333 \\
  --token <token> --fingerprint <sha256>`,
  },
  {
    name: "rustdeck",
    tags: ["Rust", "Lua", "GUI", "TUI"],
    shots: [{ src: "/screenshots/rustdeck-gui.webp", width: 1120, height: 700 }],
    features: [
      { key: "lua", icon: "code" },
      { key: "pages", icon: "layers" },
      { key: "devices", icon: "plug" },
      { key: "guitui", icon: "terminal" },
    ],
    readme: false,
    snippet: `git clone https://github.com/gallifree/rustdeck && cd rustdeck
cargo run --release -p rustdeck-gui   # desktop editor
cargo run --release -p rustdeck-tui   # or the terminal UI

-- then give a key a Lua script, e.g.
pc.run("wezterm", {"start", "--cwd", os.getenv("HOME")})`,
  },
  {
    name: "rustart",
    tags: ["Rust", "egui", "Android", "MCP"],
    shots: [{ src: "/screenshots/rustart-main.webp", width: 412, height: 915 }],
    features: [
      { key: "gpu", icon: "bolt" },
      { key: "screens", icon: "phone" },
      { key: "mcp", icon: "code" },
      { key: "search", icon: "search" },
    ],
    snippet: `# try the UI on your PC
cargo run -p launcher_desktop
# or install on the phone
cd android && ./gradlew installDebug`,
  },
  {
    name: "rust-agents",
    tags: ["Rust", "GraphQL", "LLM", "Docker"],
    shots: [],
    features: [
      { key: "gateway", icon: "bolt" },
      { key: "agents", icon: "activity" },
      { key: "security", icon: "shield" },
      { key: "selfhost", icon: "layers" },
    ],
    snippet: `git clone https://github.com/gallifree/rust-agents && cd rust-agents/deploy
cp .env.example .env   # fill in the secrets (commands are in the file)
docker compose up -d --build
# → http://localhost:8080`,
  },
] as const satisfies readonly {
  name: string;
  tags: readonly string[];
  shots: readonly { src: string; width: number; height: number }[];
  features: readonly { key: string; icon: IconName }[];
  snippet: string;
  readme?: boolean;
}[];

export type ProjectName = (typeof PROJECTS)[number]["name"];

// Projects with their own site under pages/<name>/ (moved from their repos): home-page card only.
export const SITES = [
  { name: "dicturs", tags: ["Rust", "whisper.cpp", "GUI", "TUI"] },
  { name: "llegion", tags: ["Rust", "Ollama", "egui", "ratatui"] },
  { name: "pimpbox-rgb", tags: ["Rust", "OpenRGB", "GUI", "TUI"] },
] as const;
