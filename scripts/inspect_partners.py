from pathlib import Path
import re

p = Path("public/images/partners")
for f in sorted(p.iterdir()):
    b = f.read_bytes()
    ok = b.startswith(b"\x89PNG") or b"<svg" in b[:200].lower() or b"<?xml" in b[:50]
    print(f"{f.name:22} {len(b):8} ok={ok}")

h = (p / "horizon-europe.svg").read_text(encoding="utf-8", errors="ignore")
print("viewBox", re.search(r'viewBox="[^"]+"', h))
print("paths", h.count("<path"), "images", h.count("<image"), "base64", h.count("base64"))
