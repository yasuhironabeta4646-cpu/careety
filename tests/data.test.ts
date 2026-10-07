import { describe, expect, it } from 'vitest';
import { articles, categories, downloads, queryArticles } from '../src/data';
describe('CMS content integrity',()=>{
 it('keeps 13 categories and resolves every article/download reference',()=>{
  expect(categories).toHaveLength(13);expect(new Set(categories.map(c=>c.slug)).size).toBe(13);expect(new Set(articles.map(a=>a.slug)).size).toBe(articles.length);
  for(const a of articles){expect(categories.some(c=>c.slug===a.category)).toBe(true);expect(a.body.length).toBeGreaterThan(0);expect(new Set(a.body.map(s=>s.id)).size).toBe(a.body.length);for(const slug of a.relatedArticles)expect(articles.some(a=>a.slug===slug)).toBe(true)}
  for(const d of downloads)expect(categories.some(c=>c.slug===d.category)).toBe(true);
 });
 it('distinguishes a specific tag from a whole category',()=>{
  expect(queryArticles(articles,{category:'es'})).toHaveLength(3);
  expect(queryArticles(articles,{category:'es',tag:'ガクチカ'}).map(a=>a.slug)).toEqual(['gakuchika']);
  expect(queryArticles(articles,{q:' ガクチカ '}).map(a=>a.slug)).toEqual(['gakuchika','self-pr']);
  expect(queryArticles(articles,{q:'ｅｓ'})).toHaveLength(3);
  expect(queryArticles(articles,{q:'該当しない検索'})).toEqual([]);
 });
 it('sorts without mutating CMS records',()=>{
  const original=articles.map(a=>a.slug);const old=queryArticles(articles,{sort:'old'});
  expect(old[0].slug).toBe('news-check');expect(queryArticles(articles,{sort:'new'})[0].slug).toBe('start-guide');expect(articles.map(a=>a.slug)).toEqual(original);
 });
 it('filters a thousand records without losing specific tags',()=>{
  const source=Array.from({length:1000},(_,i)=>({...articles[i%articles.length],slug:`fixture-${i}`}));
  const results=queryArticles(source,{category:'es',tag:'ガクチカ'});
  expect(results.length).toBeGreaterThan(50);expect(results.every(a=>a.category==='es'&&a.tags.includes('ガクチカ'))).toBe(true);
 });
});
