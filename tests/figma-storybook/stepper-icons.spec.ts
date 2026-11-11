import {test,expect} from '@playwright/test';
test('stepper icons fit and centre in the written slot in both themes and orientations',async({page})=>{
 await page.goto('/iframe.html?id=components-steppers-figma-states--icon-steps&viewMode=story');await expect(page.locator('.croma-source-steppers')).toHaveCount(4);
 await page.evaluate(()=>document.fonts.ready);const icons=page.locator('.croma-step-icon');await expect(icons).toHaveCount(12);
 for(const icon of await icons.all()){
  await expect.poll(()=>icon.evaluate(n=>{const slot=n.getBoundingClientRect(),art=n.querySelector('[data-croma-asset-id]')!.getBoundingClientRect();return Math.abs(art.width-12)<.01&&Math.abs(art.height-12)<.01&&Math.abs((slot.x+slot.width/2)-(art.x+art.width/2))<.01&&Math.abs((slot.y+slot.height/2)-(art.y+art.height/2))<.01;})).toBe(true);
  await expect(icon).toHaveCSS('width','12px');await expect(icon).toHaveCSS('height','12px');await expect(icon.locator('[data-croma-asset-id]')).toHaveCSS('width','32px');
 }
 for(const count of await page.locator('.croma-spec-step-count').all()){expect(await count.evaluate(n=>({w:n.getBoundingClientRect().width,h:n.getBoundingClientRect().height}))).toEqual({w:24,h:24});}
});
test('numbered stepper examples contain numbers rather than placeholder plus icons',async({page})=>{
 await page.goto('/iframe.html?id=components-steppers-written-states--states-and-variants&viewMode=story');await expect(page.locator('.croma-source-steppers')).toHaveCount(2);await expect(page.locator('.croma-step-icon')).toHaveCount(0);expect(await page.locator('.croma-spec-step-count').allTextContents()).toEqual(['1','2','3','1','2','3']);
});
