import urllib.request
import re
import os

dest_dir = r'e:\Takos\route109\public\images\vehicles'
os.makedirs(dest_dir, exist_ok=True)

# List of URLs to fetch the og:image from
pages = {
    # 1. LUNA QS
    'luna_qs': 'https://riedis-electric.com/en/scooters-mobility-tricycles/115-scooter-eletrica-de-quatro-rodas-lunar-qs.html',
    
    # 2. Triciclo Kiev (We know it is on voltrish.com)
    'triciclo_kiev': 'https://voltrish.com/produto/voltrish-kiev-48v/',
    
    # 3. Voltrish 21 (From the search result: demop-voltrish-21)
    'voltrish_21': 'https://voltrish.com/produto/demop-voltrish-21/',
    
    # 4. Tokio Extreme (From Sodhisa: scooter-mobilidade-quadriciclo-voltrish-tokio-extreme)
    'tokio_extreme': 'https://sodhisabikes.pt/loja/scooter-mobilidade-quadriciclo-voltrish-tokio-extreme/'
}

for name, url in pages.items():
    print(f'Fetching {name} from {url}...')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Extract og:image meta tag content
            # e.g., <meta property="og:image" content="https://..." />
            match = re.search(r'<meta\s+property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html)
            if not match:
                # Try name="twitter:image"
                match = re.search(r'<meta\s+name=["\']twitter:image["\']\s+content=["\']([^"\']+)["\']', html)
                
            if match:
                img_url = match.group(1)
                print(f'Found image URL: {img_url}')
                
                # Download the image
                req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req_img, timeout=10) as r_img, open(f'{dest_dir}/{name}.jpg', 'wb') as f_out:
                    f_out.write(r_img.read())
                print(f'Successfully downloaded {name}.jpg')
            else:
                print(f'No og:image tag found for {name}')
                
    except Exception as e:
        print(f'Failed for {name}: {e}')
