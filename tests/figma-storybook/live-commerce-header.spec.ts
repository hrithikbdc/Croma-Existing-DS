import {test,expect} from '@playwright/test';
const story='/iframe.html?id=prototype-extensions-live-croma-header--current-website&viewMode=story';
test('dated live header renders artwork and connects menu, search and action callbacks',async({page})=>{
 await page.goto(story);const header=page.locator('.croma-live-header');
 await expect(header).toHaveAttribute('data-design-source','croma.com/2026-11-05');
 await expect(header).toHaveCSS('background-color','rgb(0, 0, 0)');
 await expect(header.getByRole('button',{name:'Account',exact:true}).locator('img')).toHaveJSProperty('naturalWidth',32);
 await expect(header.locator('.croma-live-header__inner')).toHaveCSS('min-height','78px');
 await page.getByRole('button',{name:'Menu',exact:true}).click();await expect(page.getByRole('navigation',{name:'Main navigation'})).toBeVisible();
 await page.keyboard.press('Escape');await expect(page.getByRole('navigation',{name:'Main navigation'})).toHaveCount(0);await expect(page.getByRole('button',{name:'Menu',exact:true})).toBeFocused();
 await page.getByRole('searchbox',{name:'Search Croma products'}).fill('iPhone');await page.getByRole('button',{name:'Search',exact:true}).click();await expect(page.getByRole('status')).toHaveText('Prototype search: iPhone');
 for(const [name,result] of [['Choose location','Location requested'],['Account','Account requested'],['Shopping bag','Bag requested']]){await page.getByRole('button',{name,exact:true}).click();await expect(page.getByRole('status')).toHaveText(result);}
});
test('live header keeps controls and search available at narrow widths',async({page})=>{
 for(const width of [390,320]){await page.setViewportSize({width,height:844});await page.goto(story);await expect(page.getByRole('searchbox',{name:'Search Croma products'})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);for(const name of ['Menu','Choose location','Account','Shopping bag'])await expect(page.getByRole('button',{name,exact:true})).toBeVisible();}
});
