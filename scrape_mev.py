import urllib.request
import urllib.parse
import re

def search_mev(q):
    url = 'https://www.mevmobility.pt/?s=' + urllib.parse.quote(q) + '&post_type=product'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # find image source of products
        # standard woo commerce img
        imgs = re.findall(r'<img[^>]+src="([^"]+)"[^>]*class="[^"]*attachment-woocommerce_thumbnail', html)
        return list(set(imgs))
    except Exception as e:
        print('err', e)
        return []

def search_bsmov(q):
    url = 'https://bsmov.com/?s=' + urllib.parse.quote(q) + '&post_type=product'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        imgs = re.findall(r'<img[^>]+src="([^"]+)"[^>]*class="[^"]*attachment-woocommerce_thumbnail', html)
        return list(set(imgs))
    except Exception as e:
        return []

for brand, func in [('MEV', search_mev), ('BSMOV', search_bsmov)]:
    print(f'--- {brand} ---')
    print('LUNA QS', func('LUNA QS'))
    print('LUNA QC', func('LUNA QC'))
    print('Kiev', func('Kiev'))
    print('Voltrish 21', func('Voltrish 21'))
    print('Tokio EXTREME', func('Tokio EXTREME'))
