import {test,expect} from '@playwright/test';
const story=(name:string)=>`/iframe.html?id=components-acceptance-fixes-interaction-compositions--${name}&viewMode=story`;
test('removing a focused chip returns focus to the next surviving removal control',async({page})=>{await page.goto(story('removal-focus'));const first=page.getByRole('button',{name:'Remove Delivery'});await first.focus();await first.press('Enter');await expect(page.getByRole('button',{name:'Remove Collection'})).toBeFocused();await page.keyboard.press('Enter');await expect(page.getByRole('button',{name:'Remove Accessories'})).toBeFocused();await page.keyboard.press('Enter');await expect(page.getByRole('group',{name:'Remove options'})).toBeFocused();await expect(page.getByRole('status')).toHaveText('0 options remaining');});
test('navigation steps activate by keyboard while disabled destinations stay unavailable',async({page})=>{await page.goto(story('navigable-steps'));await page.getByRole('button',{name:'Review',exact:true}).focus();await page.keyboard.press('Enter');await expect(page.getByRole('status')).toHaveText('Step 3');await expect(page.getByRole('button',{name:'Complete',exact:true})).toBeDisabled();});
test('temporary navigation surface moves focus, skips disabled rows and returns focus',async({page})=>{await page.goto(story('temporary-navigation-menu'));const opener=page.getByRole('button',{name:'Choose fulfilment'});await opener.focus();await page.keyboard.press('ArrowDown');const popup=page.getByRole('dialog',{name:'Fulfilment choices'});await expect(popup).toBeVisible();await expect(page.getByRole('button',{name:'Delivery',exact:true})).toBeFocused();await page.keyboard.press('ArrowDown');await expect(page.getByRole('button',{name:'Collection',exact:true})).toBeFocused();await page.keyboard.press('Enter');await expect(popup).toHaveCount(0);await expect(opener).toBeFocused();await expect(page.getByRole('status')).toHaveText('Selected: Collection');await opener.click();await page.keyboard.press('Escape');await expect(opener).toBeFocused();});
test('popup action order reverses physically for RTL and keyboard confirmation closes safely',async({page})=>{for(const rtl of [false,true]){await page.goto(story(rtl?'popup-actions-rtl':'popup-actions'));const opener=page.getByRole('button',{name:'Open confirmation'});await opener.click();const dialog=page.getByRole('dialog',{name:'Confirmation'});await expect(dialog).toBeVisible();const dismiss=dialog.getByRole('button',{name:'Dismiss',exact:true}),confirm=dialog.getByRole('button',{name:'Confirm',exact:true});const d=await dismiss.boundingBox(),c=await confirm.boundingBox();expect(Boolean(d&&c&&(rtl?d.x>c.x:d.x<c.x))).toBe(true);await confirm.focus();await page.keyboard.press('Enter');await expect(dialog).not.toBeVisible();await expect(opener).toBeFocused();await expect(page.getByRole('status')).toHaveText('Action: Confirm');}});

test('temporary surface flips above a bottom-edge trigger and stays inside a narrow viewport',async({page})=>{await page.setViewportSize({width:320,height:600});await page.goto(story('temporary-menu-near-bottom'));const opener=page.getByRole('button',{name:'Choose fulfilment'});await opener.click();const popup=page.getByRole('dialog',{name:'Fulfilment choices'});await expect(popup).toBeVisible();const p=await popup.boundingBox(),o=await opener.boundingBox();expect(Boolean(p&&o&&p.y+p.height<=o.y+1&&p.x>=0&&p.x+p.width<=320)).toBe(true);await page.keyboard.press('End');await expect(page.getByRole('button',{name:'Collection',exact:true})).toBeFocused();});

test('Escape from the trigger closes an already open navigation surface',async({page})=>{
 await page.goto(story('temporary-navigation-menu'));
 const opener=page.getByRole('button',{name:'Choose fulfilment'});
 const popup=page.getByRole('dialog',{name:'Fulfilment choices'});
 await opener.click();
 await expect(page.getByRole('button',{name:'Delivery',exact:true})).toBeFocused();
 await opener.focus();
 await expect(popup).toBeVisible();
 await opener.press('Escape');
 await expect(popup).toHaveCount(0);
 await expect(opener).toBeFocused();
 await expect(opener).toHaveAttribute('aria-expanded','false');
});
