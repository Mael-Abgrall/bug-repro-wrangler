import { Hono } from "hono";
import { stream, streamSSE } from "hono/streaming";

const app = new Hono();
let id = 0;

app.get("/sse", async (c) => {
  return streamSSE(
    c,
    async (stream) => {
      stream.onAbort(() => {
        console.log("Aborted!");
      });

      while (true) {
        const message = `It is ${new Date().toISOString()}`;
        await stream.writeSSE({
          data: message,
          event: "time-update",
          id: String(id++),
        });
        await stream.sleep(1000);
      }
    },
    async (err, stream) => {
      stream.writeln("An error occurred!");
      console.error(err);
    }
  );
});

export { app };
