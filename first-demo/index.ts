import { serve } from "https://deno.land/std@0.55.0/http/server.ts";
const s = serve({ port: 9291 });
console.log("http://localhost:9291/");
for await (const req of s) {
  req.respond({ body: "Hello World23\n" });
}

/**
 * 运行执行命令
 * deno run --unstable --allow-env --allow-read --allow-net first-demo/index.ts
 */