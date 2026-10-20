"use client";
import { useEffect, useState, type ImgHTMLAttributes } from "react";

type ScreenshotProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "width"> & {
  src: string;
  alt: string;
  caption?: string;
  width?: number | string;
};

/**
 * Documentation screenshot with an optional caption.
 * Click the image to open it full size; press Esc or click again to close.
 */
export function Screenshot({ src, alt, caption, width, style, ...props }: ScreenshotProps) {
  const [open, setOpen] = useState(false);
  const maxWidth =
    width === undefined ? undefined : typeof width === "number" ? `${width}px` : width;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <figure className="gl-screenshot">
      <button
        type="button"
        className="gl-screenshot-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge screenshot: ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" style={{ maxWidth, ...style }} {...props} />
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
      {open ? (
        <div className="gl-lightbox" role="dialog" aria-label={alt} onClick={() => setOpen(false)}>
          <img src={src} alt={alt} />
          {caption ? <p>{caption}</p> : null}
        </div>
      ) : null}
    </figure>
  );
}
