import {test,expect} from '@playwright/test';
const story=(name:string)=>`/iframe.html?id=extensions-commerce-header-and-breadcrumb--${name}&viewMode=story`;
test('editable header uses original logo, working actions/search and current-page breadcrumbs',async({page})=>{
 await page.goto(story('dark'));
 const header=page.getByRole('banner');await expect(header.getByRole('link',{name:'Croma home'})).toBeVisible();
 await expect(header.locator('[data-croma-asset-id="39:2065"]')).toHaveAttribute('width','143');
 await header.getByRole('button',{name:'Account',exact:true}).click();await expect(page.getByRole('status')).toHaveText('Account opened');
 const search=header.getByRole('searchbox',{name:'Header search'});await search.fill('Phone');await search.press('Enter');await expect(page.getByRole('status')).toHaveText('Search: Phone');
 const breadcrumb=page.getByRole('navigation',{name:'Breadcrumb',exact:true});await expect(breadcrumb.getByRole('link',{name:'Home',exact:true})).toHaveAttribute('href','#home');await expect(breadcrumb.locator('[aria-current="page"]')).toHaveText('Exchange a phone');await expect(breadcrumb.getByRole('link',{name:'Exchange a phone',exact:true})).toHaveCount(0);
});
test('mobile header menu supports Escape and focus return without narrow overflow',async({page})=>{
 await page.setViewportSize({width:320,height:844});await page.goto(story('long-content'));
 const menu=page.getByRole('button',{name:'Menu',exact:true}),navigation=page.getByRole('navigation',{name:'Main navigation',exact:true});
 await expect(menu).toHaveAttribute('aria-expanded','false');await expect(navigation).toBeHidden();await menu.click();await expect(navigation).toBeVisible();await expect(menu).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(navigation).toBeHidden();await expect(menu).toBeFocused();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await menu.click();await navigation.getByRole('link',{name:'Phones',exact:true}).click();await expect(menu).toHaveAttribute('aria-expanded','false');
});
