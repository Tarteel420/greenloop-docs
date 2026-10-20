/** Shows where a screen lives in the app, e.g. <UIPath items={["Operations", "Work orders"]} /> */
export function UIPath({ items }: { items: string[] }) {
  return (
    <p className="gl-uipath">
      <span className="gl-uipath-label">Where:</span>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 ? <span className="gl-uipath-sep">›</span> : null}
          <span className="gl-uipath-item">{item}</span>
        </span>
      ))}
    </p>
  );
}
