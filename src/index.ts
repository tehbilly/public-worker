import { Router } from "itty-router";

export default {
  async fetch(req: Request) {
    const router = Router();

    router.get('/ip', () => Response.json({
      "ip": req.headers.get("x-real-ip"),
      "country": req.headers.get("cf-ipcountry"),
      headers: {
        "host": req.headers.get("host"),
        // TODO: Remove the following
        "cf-worker": req.headers.get("cf-worker"),
        "cf-connecting-ip": req.headers.get("cf-connecting-ip"),
        "x-real-ip": req.headers.get("x-real-ip")
      }
    }));

    router.get('*', () => new Response('Not Found.', { status: 404 }));

    return router.handle(req);
  }
};
