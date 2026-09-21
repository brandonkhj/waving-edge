import logoDefault from '/logo.png';
import logoOnDark from '/logo-mark-light.png';

/**
 * Brand mark. The primary logotype is charcoal + teal, which sinks into the
 * charcoal footer, so dark surfaces get the light W mark from the app icon
 * instead — both are supplied in the brand assets.
 */
export default function WaveLogo({ height = 34, onDark = false }) {
  return (
    <img
      src={onDark ? logoOnDark : logoDefault}
      alt="Waving Edge Venture"
      className="wave-logo"
      style={{ height, width: 'auto' }}
    />
  );
}
