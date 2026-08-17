import urllib.request
import urllib.parse
import re
import os

queries = {
    'luna_qs': 'LUNA QS 4 RODAS scooter',
    'luna_qc': 'scooter LUNA QC',
    'triciclo_kiev': 'Triciclo Kiev scooter mobilidade',
    'voltrish_21': 'scooter Voltrish 21 mobilidade',
    'tokio_extreme': 'Tokio EXTREME scooter capota'
}

dest_dir = r'e:\Takos\route109\public\images\vehicles'
os.makedirs(dest_dir, exist_ok=True)

for name, q in queries.items():
    print(f'Searching {name}...')
    try:
        url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(q)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
            matches = re.findall(r'src=\"//(external-content\.duckduckgo\.com/iu/\?u=[^\"]+)\"', html)
            if matches:
                for img_url in matches:
                    img_url = 'https://' + img_url.replace('&amp;', '&')
                    actual_url = urllib.parse.unquote(img_url.split('u=')[1].split('&')[0])
                    if '.jpg' in actual_url.lower() or '.png' in actual_url.lower() or '.jpeg' in actual_url.lower() or '.webp' in actual_url.lower():
                        print(f'Downloading {actual_url}')
                        try:
                            req_img = urllib.request.Request(actual_url, headers={'User-Agent': 'Mozilla/5.0'})
                            with urllib.request.urlopen(req_img, timeout=10) as r_img, open(f'{dest_dir}/{name}.png', 'wb') as f_out:
                                f_out.write(r_img.read())
                            print(f'Success for {name}')
                            break
                        except Exception as e2:
                            print(f'Failed to download {actual_url}: {e2}')
            else:
                print('No images found in html.')
    except Exception as e:
        print(f'Failed {name}: {e}')
