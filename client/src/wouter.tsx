import { useEffect } from "react";
import { useLocation } from "wouter";
import { event } from "./track-event";

export function WouterTracker() {
  const [location] = useLocation();

  useEffect(() => {
    event({
      type: "page_load",
      page: location,
    });
  }, [location]);

  return null;
}
