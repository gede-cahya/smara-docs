# Smara Web Observability v1.20.9

Smara Web now shows per-response request metadata directly in the assistant message footer.

## What is displayed

- Provider and model used for the response
- Input tokens
- Output tokens
- Total tokens
- Response duration
- Estimated cost in USD
- Collapsible request prompt details

## Layout

The response footer keeps runtime stats on the left and the message timestamp on the right, so the chat remains readable while keeping debugging data visible.

## Persistence behavior

Metadata received from WebSocket responses is preserved when the session refreshes from backend history, preventing the stats row from disappearing after it briefly appears.

## Cost estimation

Cost is estimated server-side from provider, model, input tokens, and output tokens. Unknown or local/free models fall back safely.
