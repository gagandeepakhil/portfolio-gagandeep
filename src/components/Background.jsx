import React from "react";

// Ambient, GPU-cheap background: soft aurora blobs + a faint grid.
// Purely decorative, hidden from assistive tech.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob--1" />
      <div className="bg-blob bg-blob--2" />
      <div className="bg-blob bg-blob--3" />
      <div className="bg-noise" />
    </div>
  );
}
