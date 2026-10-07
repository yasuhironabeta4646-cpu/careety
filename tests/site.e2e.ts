import { test, expect } from '@playwright/test';
const routes = ['/', '/articles','/articles/es-writing','/category/es','/downloads','/agents','/about','/contact'];
for(const width of [1440,390]) {
 test(`8 pages render with shared layout at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:950});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  for(const route of routes){
   await page.goto(route);await expect(page.locator('main h1')).toBeVisible();
   await expect(page.locator('header .logo')).toBeVisible();await expect(page.locator('footer .logo')).toBeVisible();
   await expect(page.locator('main')).not.toHaveText(/undefined|NaN/);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);expect(overflow,`${route} overflows at ${width}`).toBe(false);
  }
  expect(errors).toEqual([]);
 });
}
test('search, category filters, no-results and pagination',async({page})=>{
 await page.goto('/');
 await page.getByLabel('記事をキーワードで検索').fill('ガクチカ');await page.getByRole('button',{name:'検索する',exact:true}).click();
 await expect(page).toHaveURL(/q=/);await expect(page.locator('.article-card')).toHaveCount(2);
 await page.getByLabel('記事をキーワードで検索').fill('存在しないキーワード');await page.getByRole('button',{name:'検索する',exact:true}).click();await expect(page.getByText('該当する記事がありません')).toBeVisible();
 await page.getByRole('button',{name:'条件をリセット'}).click();await expect(page.locator('.article-card')).toHaveCount(9);
 await page.getByRole('button',{name:'次のページ',exact:true}).click();await expect(page).toHaveURL(/page=2/);await expect(page.locator('.article-card')).toHaveCount(9);
 await page.getByRole('button',{name:'ES・志望動機',exact:true}).click();await expect(page.locator('.article-card')).toHaveCount(3);
 await page.goto('/category/es');await page.getByRole('button',{name:'ガクチカ',exact:true}).click();await expect(page.locator('.article-card')).toHaveCount(1);
});
test('article table of contents, bookmark persistence, related article',async({page})=>{
 await page.goto('/articles/es-writing');await page.locator('.table-of-contents').getByRole('link').nth(1).click();await expect(page).toHaveURL(/#structure$/);
 await page.getByRole('button',{name:'保存する',exact:true}).click();await expect(page.getByRole('button',{name:'保存済み',exact:true})).toHaveAttribute('aria-pressed','true');await page.reload();await expect(page.getByRole('button',{name:'保存済み',exact:true})).toBeVisible();
 await page.locator('.related-articles').getByRole('link',{name:'ガクチカの書き方。経験を「伝わる強み」に変える',exact:true}).click();await expect(page).toHaveURL('/articles/gakuchika');
});
test('four real downloads with correct binary signatures',async({page,request})=>{
 await page.goto('/downloads');await expect(page.locator('.download-card')).toHaveCount(4);
 for(const [file,signature] of [['careety-es-template.docx','PK'],['careety-self-analysis.xlsx','PK'],['careety-schedule.xlsx','PK'],['careety-interview-checklist.pdf','%PDF']]){
  const res=await request.get(`/downloads/${file}`);expect(res.ok()).toBe(true);expect((await res.body()).subarray(0,signature.length).toString()).toBe(signature);
 }
 const downloaded=page.waitForEvent('download');await page.locator('.download-card').first().getByRole('link',{name:'ダウンロード'}).click();expect((await downloaded).suggestedFilename()).toBe('careety-es-template.docx');
 await page.getByRole('button',{name:'自己分析',exact:true}).click();await expect(page.locator('.download-card')).toHaveCount(1);
});
test('contact validates, downloads draft and does not claim delivery',async({page})=>{
 await page.goto('/contact');await page.getByRole('button',{name:'お問い合わせの下書きを保存'}).click();await expect(page.getByRole('status')).toHaveCount(0);
 await page.getByLabel('お名前').fill('テスト太郎');await page.getByLabel('メールアドレス').fill('test@example.com');await page.getByLabel('お問い合わせ内容').fill('記事の内容について確認したいことがあります。');await page.getByRole('checkbox').check();
 const downloaded=page.waitForEvent('download');await page.getByRole('button',{name:'お問い合わせの下書きを保存'}).click();expect((await downloaded).suggestedFilename()).toBe('careety-contact-draft.txt');await expect(page.getByRole('status')).toContainText('送信されていません');
});
test('mobile navigation closes on selection and keyboard escape',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');await page.getByRole('button',{name:'メニューを開く'}).click();await expect(page.getByRole('button',{name:'メニューを閉じる'})).toHaveAttribute('aria-expanded','true');await page.locator('header nav').getByRole('link',{name:'お役立ち資料',exact:true}).click();await expect(page).toHaveURL('/downloads');await expect(page.getByRole('button',{name:'メニューを開く'})).toHaveAttribute('aria-expanded','false');await page.getByRole('button',{name:'メニューを開く'}).click();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'メニューを開く'})).toBeVisible();
});
test('legal pages and missing routes are honest',async({page})=>{
 for(const route of ['privacy','terms','disclaimer','advertising']){await page.goto(`/legal/${route}`);await expect(page.getByText('公開準備用の案です。正式な法務文書として未確定です。公開前に運営情報・利用条件・法務確認を反映してください。')).toBeVisible()}
 await page.goto('/articles/missing');await expect(page.getByRole('heading',{name:'ページが見つかりませんでした。'})).toBeVisible();
});
