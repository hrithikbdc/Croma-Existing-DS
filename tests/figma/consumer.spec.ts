import {test,expect} from '@playwright/test';
test('field association, keyboard focus, controlled entry and local submit',async({page})=>{
 const failures:string[]=[]; page.on('pageerror',e=>failures.push(e.message));
 await page.goto('/');
 const input=page.getByRole('textbox',{name:'Your name'});
 const button=page.getByRole('button',{name:'Continue'});
 const geometry=await button.evaluate(el=>{const c=getComputedStyle(el);return {height:el.getBoundingClientRect().height,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight};});
 expect(geometry).toEqual({height:56,paddingLeft:'24px',paddingRight:'24px'});
 await input.focus(); await expect(input).toBeFocused();
 await input.fill('Croma prototype'); await expect(input).toHaveValue('Croma prototype');
 await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:'Continue'})).toBeFocused();
 await page.keyboard.press('Enter');await expect(page.getByRole('status').filter({hasText:'Thanks, Croma prototype'})).toBeVisible();
 expect(failures).toEqual([]);
});
test('controlled selections, keyboard tabs, popup dismissal and search compose',async({page})=>{
 await page.goto('/');
 const checkbox=page.getByRole('checkbox',{name:'Include accessories'});await checkbox.check();await expect(checkbox).toBeChecked();
 const toggle=page.getByRole('switch',{name:'Receive example updates'});await toggle.check();await expect(toggle).toBeChecked();
 const filter=page.getByRole('button',{name:'Available nearby'});await filter.click();await expect(filter).toHaveAttribute('aria-pressed','true');
 await page.getByRole('radio',{name:'Collection',exact:true}).check();await expect(page.getByRole('combobox',{name:'Fulfilment dropdown'})).toHaveValue('collection');
 await page.getByRole('tab',{name:'Overview',exact:true}).focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'Details',exact:true})).toBeFocused();await expect(page.getByRole('tabpanel',{name:'Details'})).toBeVisible();
 const opener=page.getByRole('button',{name:'Open example popup'});await opener.click();await expect(page.getByRole('dialog',{name:'Example popup'})).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();await expect(opener).toBeFocused();
 await page.getByRole('searchbox',{name:'Example search'}).fill('headphones');await page.keyboard.press('Enter');await expect(page.getByRole('status').filter({hasText:'Example query: headphones'})).toBeVisible();
});
test('long text stays editable and layout fits narrow viewport',async({page})=>{
 await page.setViewportSize({width:320,height:844});await page.goto('/');
 const input=page.getByRole('textbox',{name:'Your name'});await input.fill('Long prototype name '.repeat(12));
 await expect(input).toHaveValue('Long prototype name '.repeat(12));
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter((i): i is HTMLImageElement => i instanceof HTMLImageElement).filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src));expect(broken).toEqual([]);
});
