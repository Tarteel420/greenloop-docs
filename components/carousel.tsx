"use client";
import { useState } from "react";

type Slide = { src: string; alt: string; caption?: string };

export function Carousel({ images }: { images: Slide[] }) {
  const [i, setI] = useState(0);
  const total = images.length;
  const go = (n: number) => setI((n + total) % total);

  return (
    <div className="gl-carousel">
      <div className="gl-carousel-stage">
        <button className="gl-carousel-arrow" onClick={() => go(i - 1)} aria-label="Previous image">‹</button>
        <img className="gl-carousel-img" src={images[i].src} alt={images[i].alt} loading="lazy" />
        <button className="gl-carousel-arrow" onClick={() => go(i + 1)} aria-label="Next image">›</button>
      </div>
      {images[i].caption ? <p className="gl-carousel-caption">{images[i].caption}</p> : null}
      <div className="gl-carousel-dots">
        {images.map((_, n) => (
          <button
            key={n}
            className={"gl-carousel-dot" + (n === i ? " active" : "")}
            onClick={() => go(n)}
            aria-label={"Go to image " + (n + 1)}
          />
        ))}
        <span className="gl-carousel-count">{i + 1} / {total}</span>
      </div>
    </div>
  );
}
