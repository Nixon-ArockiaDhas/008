import { spawn } from "node:child_process";
import { networkInterfaces } from "node:os";
import { fileURLToPath } from "node:url";

const port = "5173";
const interfaces = networkInterfaces();
const preferredNames = ["en0", "en1"];
const candidates = Object.entries(interfaces)
  .flatMap(([name, addresses]) =>
    (addresses ?? []).map((address) => ({ name, ...address })),
  )
  .filter(
    (address) =>
      address.family === "IPv4" &&
      !address.internal &&
      !address.address.startsWith("169.254."),
  )
  .sort((a, b) => {
    const aRank = preferredNames.indexOf(a.name);
    const bRank = preferredNames.indexOf(b.name);
    return (aRank < 0 ? 99 : aRank) - (bRank < 0 ? 99 : bRank);
  });

const lanAddress = candidates[0]?.address;
console.log("\n008Hub development preview");
console.log(`Local: http://localhost:${port}`);
console.log(
  lanAddress
    ? `iPad: http://${lanAddress}:${port}`
    : "iPad: connect both devices to the same Wi-Fi, then use this Mac's LAN IP on port 5173",
);
console.log("");

const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const child = spawn(process.execPath, [nextCli, "dev", "-H", "0.0.0.0", "-p", port], {
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
