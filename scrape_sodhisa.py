import urllib.request
import urllib.parse
import re
import os

dest_dir = r'e:\Takos\route109\public\images\vehicles'
os.makedirs(dest_dir, exist_ok=True)

# 1. Search Sodhisa for Tokio Extreme
try:
    print('Searching Sodhisa for Tokio Extreme...')
    url = 'https://sodhisabikes.pt/?s=tokio+extreme&post_type=product'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Let's find images
    # Usually in woocommerce: src="https://sodhisabikes.pt/wp-content/uploads/..."
    imgs = re.findall(r'src="([^"]+wp-content/uploads/[^"]+)"', html)
    if imgs:
        # We need the product image, which is usually larger.
        # Filter for images containing '-300x300' or similar and remove the suffix to get original or just download the thumbnail
        for img in imgs:
            if 'logo' not in img.lower() and 'banner' not in img.lower():
                # remove size suffix like -300x300
                orig_img = re.sub(r'-\d+x\d+\.(jpg|png|jpeg|webp)$', r'.\1', img)
                print(f'Found Tokio Extreme image: {orig_img}')
                req_img = urllib.request.Request(orig_img, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req_img) as r_img, open(f'{dest_dir}/tokio_extreme.jpg', 'wb') as f_out:
                    f_out.write(r_img.read())
                print('Downloaded Tokio Extreme!')
                break
except Exception as e:
    print('Error Tokio Extreme:', e)

# 2. Search Sodhisa for Voltrish 21 (or Lisbon 21?)
# Let's search just 'Voltrish' or 'Voltrish 21'
try:
    print('Searching Sodhisa for Voltrish...')
    url = 'https://sodhisabikes.pt/?s=Voltrish&post_type=product'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    imgs = re.findall(r'src="([^"]+wp-content/uploads/[^"]+)"', html)
    if imgs:
        # find the first non-logo product image
        for img in imgs:
            if 'logo' not in img.lower() and 'banner' not in img.lower() and 'extreme' not in img.lower():
                orig_img = re.sub(r'-\d+x\d+\.(jpg|png|jpeg|webp)$', r'.\1', img)
                print(f'Found Voltrish image: {orig_img}')
                req_img = urllib.request.Request(orig_img, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req_img) as r_img, open(f'{dest_dir}/voltrish_21.jpg', 'wb') as f_out:
                    f_out.write(r_img.read())
                print('Downloaded Voltrish!')
                break
except Exception as e:
    print('Error Voltrish:', e)
