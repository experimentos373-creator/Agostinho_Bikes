import os

routes = [
    # (path, priority, changefreq)
    ("", "1.0", "weekly"),
    ("catalogo", "0.9", "weekly"),
    ("aluguer", "0.9", "weekly"),
    ("servicos", "0.9", "weekly"),
    ("empresa", "0.8", "weekly"),
    ("galeria", "0.7", "weekly"),
    ("mondraker", "0.8", "weekly"),
    ("bicicletas-eletricas", "0.8", "weekly"),
    ("mondraker-crafty", "0.8", "weekly"),
    ("mondraker-zendit", "0.7", "weekly"),
    ("mondraker-summum", "0.7", "weekly"),
    ("e-bikes", "0.8", "weekly"),
    ("e-bikes-usadas", "0.7", "weekly"),
    ("oficina-pombal", "0.9", "weekly"),
    ("assistencia-bosch", "0.9", "weekly"),
    ("diagnostico-bosch", "0.8", "weekly"),
    ("diagnostico-dji-avinox", "0.8", "weekly"),
    ("orcamento", "0.7", "monthly"),
    ("marcacao-oficina", "0.7", "monthly"),
]

languages = ["pt", "en", "es", "fr", "de"]
domain = "https://www.agostinhobikes.com"
lastmod = "2026-08-03"

xml = []
xml.append('<?xml version="1.0" encoding="UTF-8"?>')
xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
xml.append('        xmlns:xhtml="http://www.w3.org/1999/xhtml">')

for path, priority, changefreq in routes:
    for lang in languages:
        # Build current loc
        if lang == "pt":
            loc_path = f"/{path}" if path else ""
        else:
            loc_path = f"/{lang}/{path}" if path else f"/{lang}"
        
        loc = f"{domain}{loc_path}"
        
        xml.append("  <url>")
        xml.append(f"    <loc>{loc}</loc>")
        xml.append(f"    <lastmod>{lastmod}</lastmod>")
        xml.append(f"    <changefreq>{changefreq}</changefreq>")
        xml.append(f"    <priority>{priority}</priority>")
        
        # Add alternate hreflangs
        for alt_lang in languages:
            if alt_lang == "pt":
                alt_path = f"/{path}" if path else ""
            else:
                alt_path = f"/{alt_lang}/{path}" if path else f"/{alt_lang}"
            alt_loc = f"{domain}{alt_path}"
            xml.append(f'    <xhtml:link rel="alternate" hreflang="{alt_lang}" href="{alt_loc}" />')
            
        # Add x-default pointing to Portuguese version
        default_path = f"/{path}" if path else ""
        default_loc = f"{domain}{default_path}"
        xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{default_loc}" />')
        
        xml.append("  </url>")

xml.append("</urlset>")

output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "sitemap.xml"))
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(xml) + "\n")

print(f"Generated multilingual sitemap with {len(routes) * len(languages)} URLs at {output_path}")
