from pathlib import Path
from PIL import Image

p = Path("public/images/partners")

# Crop FMUL to circular emblem (top square)
fmul = Image.open(p / "fmul-logo.png").convert("RGBA")
w, h = fmul.size
# emblem is roughly top 82x82 of the 82x120 image
emblem = fmul.crop((0, 0, w, w))
emblem.save(p / "fmul.png", optimize=True)
print("fmul emblem", emblem.size)

# Lightweight Horizon Europe wordmark: EU flag + text
horizon = """<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 280 48" width="280" height="48" role="img" aria-label="Horizon Europe">
  <title>Horizon Europe</title>
  <g transform="translate(4,6) scale(0.06)">
    <rect width="900" height="600" fill="#039"/>
    <g fill="#fc0" transform="translate(450,300)">
      <path id="s" d="M0,162.5 22.041947,230.338137 -35.664619,188.411863H35.664619L-22.041947,230.338137z"/>
      <use xlink:href="#s" y="-400"/>
      <g id="s5">
        <use xlink:href="#s" transform="rotate(30) rotate(-30,0,200)"/>
        <use xlink:href="#s" transform="rotate(60) rotate(-60,0,200)"/>
        <use xlink:href="#s" transform="rotate(90) rotate(-90,0,200)"/>
        <use xlink:href="#s" transform="rotate(120) rotate(-120,0,200)"/>
        <use xlink:href="#s" transform="rotate(150) rotate(-150,0,200)"/>
      </g>
      <use xlink:href="#s5" transform="scale(-1,1)"/>
    </g>
  </g>
  <text x="72" y="20" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#0a1f44">Horizon Europe</text>
  <text x="72" y="36" font-family="Arial, Helvetica, sans-serif" font-size="9" fill="#5a6a7a">European Union</text>
</svg>
"""
(p / "horizon-europe.svg").write_text(horizon, encoding="utf-8")
print("horizon rewritten", (p / "horizon-europe.svg").stat().st_size)

# Remove oversized originals / error leftovers
for name in ["fmul-logo.png", "_test.png"]:
    f = p / name
    if f.exists():
        f.unlink()
        print("removed", name)

# Composite la Caixa: star SVG alone is not ideal; keep PNG wordmark.
# Delete star-only if we want only PNG - keep both for now but use PNG in data.
print("done")
