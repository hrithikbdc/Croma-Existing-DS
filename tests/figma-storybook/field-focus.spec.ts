import {test,expect} from '@playwright/test';
test('input and form dropdown focus use the source outline without an extra outer border',async({page})=>{
 await page.goto('/iframe.html?id=components-form-field--interactive&viewMode=story');
 const input=page.getByRole('textbox',{name:'Default label'}),field=page.locator('.croma-spec-field'),control=page.locator('.croma-field-control');
 await page.locator('.croma-field-label').click();await expect(field).toHaveAttribute('data-field-state','Active');await expect(page.locator('.croma-field-label')).toHaveCSS('top','-8px');
 await expect(input).toHaveCSS('outline-style','none');await expect(input).toHaveCSS('box-shadow','none');await expect(control).toHaveCSS('outline-style','none');
 expect(await control.evaluate(n=>({width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height}))).toEqual({width:298,height:54});
 await input.fill('Croma');await input.blur();await page.mouse.move(1100,700);await expect(field).toHaveAttribute('data-field-state','Filled');
 await page.goto('/iframe.html?id=components-dropdown-figma-states--interactive&viewMode=story');
 const combo=page.getByRole('combobox',{name:'Dropdown'}),dropdown=page.locator('.croma-dropdown'),dropdownControl=page.locator('.croma-dropdown__control');
 await combo.click();await expect(dropdown).toHaveAttribute('data-dropdown-branch','Form');await expect(combo).toHaveAttribute('aria-expanded','true');await expect(dropdown).toHaveAttribute('data-source-id','840:82415');
 await expect(dropdownControl).toHaveCSS('outline-style','none');await expect(dropdownControl).toHaveCSS('box-shadow','none');await expect(combo).toHaveCSS('outline-style','none');await expect(page.locator('.croma-dropdown__floating-label')).toHaveCSS('top','-8px');
 expect(await dropdownControl.evaluate(n=>({width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height}))).toEqual({width:294,height:54});
 await page.getByRole('listbox').getByRole('option',{name:'Option 2',exact:true}).click();await expect(combo).toHaveValue('2');await expect(combo).toHaveAttribute('aria-expanded','false');
 await combo.press('Space');await expect(combo).toHaveAttribute('aria-expanded','true');await expect(dropdownControl).toHaveCSS('outline-style','none');await combo.press('Escape');await expect(combo).toBeFocused();await expect(combo).toHaveAttribute('aria-expanded','false');
});

test('previous focus outline remains available as an alternate and labels stay upright',async({page})=>{
 for(const id of ['components-form-field--interactive','components-form-field--previous-focus-appearance']){
  await page.goto('/iframe.html?id='+id+'&viewMode=story');const input=page.getByRole('textbox',{name:'Default label'});await input.focus();
  const label=page.locator('.croma-field-label'),control=page.locator('.croma-field-control');await expect(label).toHaveCSS('font-style','normal');await expect(input).toHaveCSS('font-style','normal');
  await expect(control).toHaveCSS('outline-style',id.endsWith('previous-focus-appearance')?'auto':'none');
 }
 for(const id of ['components-dropdown-figma-states--interactive','components-dropdown-figma-states--previous-focus-appearance']){
  await page.goto('/iframe.html?id='+id+'&viewMode=story');const combo=page.getByRole('combobox',{name:'Dropdown'});await combo.focus();await combo.press('Space');
  await expect(page.locator('.croma-dropdown__floating-label')).toHaveCSS('font-style','normal');await expect(page.locator('.croma-dropdown__value')).toHaveCSS('font-style','normal');
  await expect(page.locator('.croma-dropdown__control')).toHaveCSS('outline-style',id.endsWith('previous-focus-appearance')?'auto':'none');
  await page.getByRole('listbox').getByRole('option',{name:'Option 3',exact:true}).click();await expect(combo).toHaveValue('3');
 }
});
