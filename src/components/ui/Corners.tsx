/**
 * The four corner brackets used by every `.blueprint`-framed element
 * (buttons, cards, inputs). Matches the original static site's markup:
 * `<i class="corner tl">` etc., styled purely via globals.css.
 */
export function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}
