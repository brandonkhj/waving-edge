import logoDefault from '/logo.png';
import logoOnDark from '/logo-mark-light.png';

/**
 * Brand mark. The primary logotype is charcoal + teal, which sinks into the
 * charcoal footer, so dark surfaces get the light W mark from the app icon
 * instead — both are supplied in the brand assets.
 *
 * Pass alt="" when the mark sits inside a link that already carries the brand
 * name as text, so the link isn't announced twice.
 */
export default function WaveLogo({ height = 34, onDark = false, alt = 'Waving Edge Venture' }) {
  return (
    <img
      src={onDark ? logoOnDark : logoDefault}
      alt={alt}
      className="wave-logo"
      style={{ height, width: 'auto' }}
    />
  );
}
