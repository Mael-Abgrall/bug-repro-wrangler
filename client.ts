import { ofetch } from "ofetch";

const url = "http://localhost:8000/sse";
const result = await ofetch(url, {
  method: "GET",
  responseType: "stream",
});

for await (const chunk of result) {
  console.log(chunk);
}
