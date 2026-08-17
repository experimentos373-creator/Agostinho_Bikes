from duckduckgo_search import DDGS
import urllib.request
import re
import os

queries = {
    'luna_qs': 'LUNA QS scooter site:mevmobility.pt OR site:bsmov.com OR site:riedis-electric.com',
    'luna_qc': 'LUNA QC scooter site:mevmobility.pt OR site:bsmov.com',
    'triciclo_kiev': 'Triciclo Kiev scooter mobilidade',
    'voltrish_21': 'scooter Voltrish 21 mobilidade',
    'tokio_extreme': 'Tokio EXTREME scooter capota'
}

dest_dir = r'e:\Takos\route109\public\images\vehicles'

with DDGS() as ddgs:
    for name, q in queries.items():
        print(f'Searching {name}...')
        try:
            results = ddgs.text(q, max_results=3)
            found = False
            for res in results:
                url = res['href']
                print(f'Found URL: {url}')
                try:
                    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                    html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
                    imgs = set(re.findall(r'src=["\'](https?://[^"\']+\.(?:jpg|png|jpeg|webp))["\']', html))
                    if imgs:
                        # try to find one that looks like a product image
                        target_img = list(imgs)[0]
                        for img in imgs:
                            if 'upload' in img or 'product' in img:
                                target_img = img
                                break
                        print(f'Selected image: {target_img}')
                        req_img = urllib.request.Request(target_img, headers={'User-Agent': 'Mozilla/5.0'})
                        with urllib.request.urlopen(req_img, timeout=10) as r_img, open(f'{dest_dir}/{name}.png', 'wb') as f_out:
                            f_out.write(r_img.read())
                        print(f'Success for {name}')
                        found = True
                        break
                except Exception as e:
                    pass
            if not found:
                print(f'No image downloaded for {name}')
        except Exception as e:
            print(f'Failed {name}: {e}')
