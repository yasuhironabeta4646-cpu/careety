import { test, expect } from '@playwright/test';
for(const width of [1440,390,320])test(`visual TOP at ${width}px: images, layout, navigation`,async({page})=>{
 await page.setViewportSize({width,height:950});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
 await page.goto('/');await expect(page.locator('.visual-hero h1')).toContainText('もっとわかりやすく');await page.evaluate(async()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all(Array.from(document.images).map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r})));await document.fonts.ready});
 expect(await page.evaluate(()=>Array.from(document.querySelectorAll<HTMLImageElement>('.visual-home img')).every(i=>i.naturalWidth>0))).toBe(true);expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)).toBe(false);
 await expect(page.locator('.visual-category')).toHaveCount(8);await page.getByRole('button',{name:'すべてのカテゴリーを見る',exact:true}).click();await expect(page.locator('.visual-category')).toHaveCount(13);
 await page.locator('.visual-category').filter({hasText:'自己分析'}).click();await expect(page).toHaveURL('/category/self-analysis');await page.goto('/');await page.getByLabel('記事をキーワードで検索').fill('ガクチカ');await page.getByRole('button',{name:'検索する'}).click();await expect(page.locator('.article-card')).toHaveCount(2);expect(errors).toEqual([]);
});
test('visual TOP downloads real assets and keeps the archive available',async({page})=>{
 await page.goto('/');const download=page.waitForEvent('download');await page.locator('.visual-download').first().click();expect((await download).suggestedFilename()).toBe('careety-es-template.docx');await page.goto('/top-classic');await expect(page.locator('.hero')).toBeVisible();await expect(page.locator('.visual-home')).toHaveCount(0);
});
