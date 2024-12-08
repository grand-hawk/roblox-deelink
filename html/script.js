function setText(content) {
  document.getElementById("text").innerText = content;
}

function onLoad() {
  const query = new URLSearchParams(window.location.search);

  const placeId = query.get("placeId");
  const jobId = query.get("jobId") || query.get("gameId");

  if (!placeId) return setText("Invalid placeId");

  const deeplinkParams = new URLSearchParams({ placeId });
  if (jobId) deeplinkParams.set("gameInstanceId", jobId);

  window.location.replace(`roblox://${deeplinkParams}`);

  setText("Roblox opened");
}

window.onload = onLoad;
