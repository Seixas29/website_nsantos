import urllib.request
from pathlib import Path

out = Path("public/images/partners")
out.mkdir(parents=True, exist_ok=True)

downloads = {
    "lacaixa.png": "https://upload.wikimedia.org/wikipedia/commons/8/8c/La_Caixa_logo.png",
    "lacaixa-star.svg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/La_Caixa_logo.svg/200px-La_Caixa_logo.svg.png",
    "lacaixa.svg": "https://upload.wikimedia.org/wikipedia/commons/2/23/La_Caixa_logo.svg",
}

headers = {"User-Agent": "Mozilla/5.0 (compatible; website-nsantos/1.0)"}

for name, url in downloads.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        path = out / name
        path.write_bytes(data)
        print(f"OK {name}: {len(data)} bytes, start={data[:40]!r}")
    except Exception as e:
        print(f"FAIL {name}: {e}")

# Validate existing assets briefly
for p in sorted(out.iterdir()):
    raw = p.read_bytes()[:80]
    kind = "svg" if b"<svg" in raw.lower() or b"<?xml" in raw else ("png" if raw[:4] == b"\x89PNG" else "other/html?")
    print(f"  {p.name}: {p.stat().st_size} ({kind})")
