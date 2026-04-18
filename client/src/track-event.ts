interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface EventData {
  user?: string;
  type: "page_load" | "enter";
  page: string;
}

export function event(data: EventData) {
  if (import.meta.env.VITE_TRACKER_API_URL) {
    navigator.sendBeacon(
      import.meta.env.VITE_TRACKER_API_URL,
      [data.user ?? "", data.type ?? "", data.page].join(","),
    );
    console.log("Tracked", data);
  } else {
    console.warn("Missing config env VITE_TRACKER_API_URL");
  }
}
