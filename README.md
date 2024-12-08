# Roblox Deeplink

Basic web page that launches Roblox' external handler for deeplinks
Dockerfile uses [nginx](https://nginx.org/en/).

Query parameters:

```ts
{
  placeId: string,
  jobId: string?,
  gameId: string? // same as `jobId`
};
```
