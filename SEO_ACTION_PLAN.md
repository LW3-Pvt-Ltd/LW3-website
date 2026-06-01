# SEO Action Plan for LW3 Business Site

**Status:** Foundation built (2026-06-01)  
**Audit Source:** www.lw3.world_issues_20260601.xlsx

---

## What's Been Created

### 1. **robots.txt** (`/public/robots.txt`)
- Guides Google, Bing, and AI crawlers on what to index
- Allows all pages by default
- Specifies sitemap location
- **Next:** Download and test in [Google Search Console](https://search.google.com/search-console)

### 2. **sitemap.xml** (`/public/sitemap.xml`)
- Currently lists only homepage (add routes as you build them)
- Required for Google to discover all pages
- **Next:** Update `lastmod` when content changes; add new routes

### 3. **SEO Utility** (`/src/lib/seo.ts`)
- TypeScript helper for managing meta tags
- `setSeoMeta()` function updates title, description, OpenGraph, Twitter cards
- Default homepage SEO config provided
- **Next:** Use this for every new page (see example below)

### 4. **Homepage Meta Tags** 
- `App.tsx` now calls `setSeoMeta(homepageSeo)` on load
- Title: "Battery Passport & Post Quantum Security | Logistics W3"
- Description: "EU regulation compliant battery passport with post-quantum cryptography..."
- **Next:** Verify in browser DevTools (`<head>` section)

---

## Priority Fixes (Audit Issues)

### 🔴 CRITICAL — Fix This Week

| Issue | Audit Count | Fix | Effort |
|-------|-------------|-----|--------|
| **Server 5xx errors** | 0.1 | Debug error logs; deploy stable build | Medium |
| **Duplicate titles** | 2 pages | Make each page title unique | Low |
| **Duplicate meta descriptions** | 2 pages | Write distinct descriptions | Low |
| **Certificate issues** | Expiring soon | Renew SSL cert in hosting (Vercel) | Low |
| **Mixed content (HTTP/HTTPS)** | 6 pages | Serve all resources over HTTPS | Medium |
| **Broken JS/CSS files** | 4 files | Fix file paths; check `public/` links | Medium |
| **Redirect chains** | 4 pages | Replace A→B→C with A→C | Low |

### 🟡 MEDIUM — This Month

| Issue | Count | Fix | Effort |
|-------|-------|-----|--------|
| **Slow page load** | 2 pages | Compress images; minify CSS/JS; enable caching | High |
| **Missing H1 tags** | 2 pages | Add semantic `<h1>` to each page | Low |
| **Low word count** | 2 pages | Expand content to 300+ words | Medium |
| **Missing meta descriptions** | 2 pages | Write 155–160 char descriptions | Low |
| **Viewport/mobile issues** | 2 pages | Ensure `<meta name="viewport">` exists | Low |

### 🟢 LOW — Batch Later

- Create missing robots.txt ✅ (done)
- Create missing sitemap.xml ✅ (done)
- Add llms.txt (for AI crawler access)
- Enable HSTS header (server-side Vercel config)
- Minify and bundle JS/CSS files

---

## How to Use the SEO Utility

### For Existing Pages
Update the `seo.ts` file with page-specific configs:

```typescript
// In seo.ts, add:
export const aboutPageSeo: SEOConfig = {
  title: 'About Logistics W3 | Battery Traceability Leader',
  description: 'Learn how LW3 enables circular economy through post-quantum secured battery passports.',
  canonicalUrl: 'https://www.lw3.world/about',
};
```

### For New Pages
In your React component, call `setSeoMeta()` on mount:

```typescript
import { useEffect } from 'react'
import { setSeoMeta } from '../lib/seo'

export default function ProductPage() {
  useEffect(() => {
    setSeoMeta({
      title: 'Battery Passport Solution | Logistics W3',
      description: 'Compliant with EU 2023/1542. Post-quantum secured digital product passport.',
      canonicalUrl: 'https://www.lw3.world/product',
    })
  }, [])

  return <div>Product content...</div>
}
```

---

## Next Immediate Steps

### Step 1: Verify This Build
```bash
npm run build
```
Ensure no errors. Check that `public/robots.txt` and `public/sitemap.xml` are included.

### Step 2: Deploy to Vercel
Push to your Git repo (main branch). Vercel auto-deploys.

### Step 3: Verify in Browser
```bash
curl https://www.lw3.world/robots.txt
curl https://www.lw3.world/sitemap.xml
```

Both should return 200 OK.

### Step 4: Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.lw3.world`
3. Upload `sitemap.xml` in Sitemaps tab
4. Monitor "Coverage" → fix any crawl errors

### Step 5: Fix Top Audit Issues
From audit report, prioritize:
1. Certificate/HTTPS warnings (contact Vercel support)
2. Duplicate titles/descriptions (use audit sheet as reference)
3. Broken JS/CSS files (test homepage thoroughly)
4. Speed (use Lighthouse in DevTools)

---

## Ongoing Maintenance

**Weekly:** Check Google Search Console for crawl errors  
**Monthly:** Audit with SEMrush, Ahrefs, or Screaming Frog  
**Per page:** Add SEO meta before deploying any new route  
**On content update:** Refresh `sitemap.xml` lastmod date  

---

## Files Created

| File | Purpose |
|------|---------|
| `public/robots.txt` | Crawler instructions |
| `public/sitemap.xml` | Page discovery (update per new route) |
| `src/lib/seo.ts` | Meta tag utilities + configs |
| `src/App.tsx` | Updated to call `setSeoMeta()` on homepage |
| `SEO_ACTION_PLAN.md` | This document |

---

## Quick Reference: Meta Tag Checklist

- [ ] Page title (50–60 chars, includes brand)
- [ ] Meta description (155–160 chars, readable, includes keyword)
- [ ] Canonical URL (prevents duplicate content)
- [ ] H1 tag (one per page, matches title closely)
- [ ] Mobile viewport (`<meta name="viewport">`)
- [ ] Open Graph image (1200×630px minimum)
- [ ] sitemap.xml updated
- [ ] robots.txt allows page
- [ ] Page load time < 3 seconds (Lighthouse)

---

## Questions?

Refer to audit file (`www.lw3.world_issues_20260601.xlsx`) for detailed issue counts and affected pages.
