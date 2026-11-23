# Search index banata hai: python3 _tools/build_search_index.py  (repo ke root se chalayein)
# Nayi post aane par ye dobara chalana hai, phir search-index.js commit karna hai.
import re, json, glob, os, html as H
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def rd(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def meta(s, name):
    m = re.search(r'<meta name="%s" content="([^"]*)"' % name, s)
    return H.unescape(m.group(1)).strip() if m else ''
def info(p):
    s = rd(p)
    t = re.search(r'<title>(.*?)</title>', s, re.S)
    t = H.unescape(t.group(1)).strip() if t else ''
    t = re.sub(r'\s*\|\s*Danishts\s*$', '', t)
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    h1 = H.unescape(re.sub(r'<[^>]+>', '', h1.group(1))).strip() if h1 else ''
    return dict(t=h1 if (h1 and len(h1) < 110) else t, d=meta(s, 'description'), k=meta(s, 'keywords'))
js = rd('blog-posts.js')
groups = dict(re.findall(r"url:\s*'([^']+)',\s*date:\s*'[^']*',\s*group:\s*'([^']+)'", js))
SKIP = {'index.html'}  # home ko alag se jodte hain
out = []
en_files = sorted(os.path.basename(f) for f in glob.glob(os.path.join(ROOT, '*.html')))
for f in en_files:
    en = info(f)
    for lang in ['', 'ur/', 'es/']:
        p = lang + f
        if not os.path.exists(os.path.join(ROOT, p)): continue
        me = info(p)
        g = groups.get(f, 'page')
        out.append(dict(u=p, t=me['t'], d=me['d'][:170], g=g,
                        h=' '.join([me['t'], me['k'], me['d'], en['t'], en['k'], en['d']]).lower()))
open(os.path.join(ROOT, 'search-index.js'), 'w', encoding='utf-8').write(
    '/* Auto-generated: _tools/build_search_index.py */\nwindow.DTS_SEARCH=' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(out), 'entries')
