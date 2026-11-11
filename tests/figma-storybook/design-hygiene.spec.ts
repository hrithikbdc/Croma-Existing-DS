import {test,expect} from '@playwright/test';
const story=(theme='dark')=>`/iframe.html?id=prototype-extensions-design-hygiene--${theme}&viewMode=story`;
function contrast(a:string,b:string){const luminance=(s:string)=>{const c=s.match(/[\d.]+/g)!.slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return .2126*c[0]+.7152*c[1]+.0722*c[2]};const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
test('field has one focus boundary, owns help spacing and preserves error associations',async({page})=>{
 await page.goto(story());const input=page.getByRole('textbox',{name:'Enter IMEI 1'});await page.getByRole('button',{name:'Focus IMEI'}).click();await expect(input).toBeFocused();
 await expect(input).toHaveCSS('outline-style','none');await expect(input).toHaveCSS('box-shadow','none');await expect(input).toHaveCSS('border-top-color','rgb(18, 218, 168)');
 const gap=()=>input.evaluate(n=>{const help=document.getElementById(n.getAttribute('aria-describedby')!)!;return help.getBoundingClientRect().top-n.getBoundingClientRect().bottom});expect(await gap()).toBe(12);
 await page.getByRole('button',{name:'Toggle validation message'}).click();await expect(input).toHaveAttribute('aria-invalid','true');await expect(input).toHaveAccessibleDescription('Enter a 15-digit IMEI.');expect(await gap()).toBe(12);
});
test('choice rows keep equal geometry through selection, keyboard focus and rerender',async({page})=>{
 await page.goto(story());await page.evaluate(()=>document.fonts.ready);const yes=page.getByRole('radio',{name:'Yes',exact:true}),no=page.getByRole('radio',{name:'No — it only stays on while plugged in',exact:true}),label=yes.locator('xpath=..');const geometry=()=>label.evaluate(n=>{const r=n.getBoundingClientRect();return {width:r.width,height:r.height,top:r.top+scrollY,left:r.left+scrollX}});const initial=await geometry();await yes.check();expect(await geometry()).toEqual(initial);expect((await no.locator('xpath=..').boundingBox())!.height).toBe(initial!.height);
 await yes.focus();await expect(label).toHaveCSS('outline-style','none');await expect(yes).toHaveCSS('outline-style','none');await expect(label).toHaveCSS('transition-duration','0s');const fill=await label.evaluate(n=>getComputedStyle(n).backgroundColor);
 await page.getByRole('button',{name:'Rerender selection'}).click();await expect(yes).toBeChecked();await expect(label).toHaveCSS('background-color',fill);expect(await geometry()).toEqual(initial);
 await yes.focus();await page.keyboard.press('ArrowRight');await expect(no).toBeChecked();
 const black=page.getByRole('radio',{name:'Black',exact:true});await black.locator('xpath=..').click();await expect(black).toBeChecked();expect(await black.evaluate(n=>n.getBoundingClientRect().width)).toBe(1);await black.focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('radio',{name:'White',exact:true})).toBeChecked();
});
test('both themes provide readable card/help text and only one nested surface layer',async({page})=>{
 for(const theme of ['dark','light']){await page.goto(story(theme));const outer=page.locator('.cx-surface-card').first(),nested=outer.locator('.cx-surface-card'),plain=outer.locator('.cx-plain-section');await expect(nested).toHaveCSS('background-color','rgba(0, 0, 0, 0)');await expect(nested).toHaveCSS('border-top-width','0px');await expect(plain).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
 const bg=await outer.evaluate(n=>getComputedStyle(n).backgroundColor);for(const locator of [outer.locator('.cx-surface-card__title').first(),outer.locator('.cx-surface-card__supporting').first(),page.getByText('Where do I find the IMEI?',{exact:true})]){const fg=await locator.evaluate(n=>getComputedStyle(n).color);expect(contrast(fg,bg)).toBeGreaterThanOrEqual(4.5);}
 await page.getByRole('button',{name:'Toggle validation message'}).click();const error=page.getByText('Enter a 15-digit IMEI.',{exact:true});expect(contrast(await error.evaluate(n=>getComputedStyle(n).color),bg)).toBeGreaterThanOrEqual(4.5);
 const help=page.getByText('Where do I find the IMEI?',{exact:true});await help.focus();await page.keyboard.press('Enter');await expect(page.getByText('Dial *#06# on your phone or check its device settings.')).toBeVisible();
 }
});
test('cards and long dialog actions remain inside 320px and 1440px layouts',async({page})=>{
 for(const width of [1440,320]){await page.setViewportSize({width,height:853});await page.goto(story());expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);const actions=page.locator('.cx-surface-card__actions .cx-button');for(const action of await actions.all()){expect(await action.evaluate(n=>n.scrollWidth<=n.clientWidth)).toBe(true);}
 await page.goto(story('dialog-actions'));const trigger=page.getByRole('button',{name:'Open review'});await trigger.click();const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();expect(await dialog.evaluate(n=>n.scrollWidth<=n.clientWidth)).toBe(true);const primary=page.getByRole('button',{name:'Continue with this phone and review my exchange estimate'});expect(await primary.evaluate(n=>n.scrollWidth<=n.clientWidth)).toBe(true);const bounds=await primary.boundingBox();expect(bounds!.y+bounds!.height).toBeLessThanOrEqual(853);await page.keyboard.press('Escape');await expect(trigger).toBeFocused();}
});
