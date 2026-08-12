import re
import urllib.request
from pathlib import Path

out = Path("public/images/partners")
out.mkdir(parents=True, exist_ok=True)

# Try common CDN / known logo URLs for Fundación "la Caixa"
candidates = [
    "https://www.fundacionlacaixa.org/documents/10180/0/logo-fundacion-la-caixa.svg",
    "https://fundacionlacaixa.org/o/lacaixa-theme/images/logo.svg",
    "https://www.fundacionlacaixa.org/o/lacaixa-theme/images/logo.svg",
]

headers = {"User-Agent": "Mozilla/5.0"}

for url in candidates:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
            ctype = r.headers.get("Content-Type", "")
            print(url, r.status, len(data), ctype)
            if len(data) > 500 and (
                b"<svg" in data[:200] or data[:8] == b"\x89PNG\r\n\x1a\n" or b"PNG" in data[:20]
            ):
                ext = ".svg" if b"<svg" in data[:200] else ".png"
                path = out / f"lacaixa{ext}"
                path.write_bytes(data)
                print("saved", path)
                break
    except Exception as e:
        print("fail", url, e)

# Also scrape homepage for logo assets
try:
    req = urllib.request.Request("https://fundacionlacaixa.org/", headers=headers)
    with urllib.request.urlopen(req, timeout=20) as r:
        html = r.read().decode("utf-8", "ignore")
    matches = re.findall(r'(?:src|href)=["\']([^"\']*logo[^"\']*\.(?:svg|png|jpg))["\']', html, re.I)
    print("matches", matches[:20])
except Exception as e:
    print("scrape fail", e)
