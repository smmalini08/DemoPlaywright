import {test} from '@playwright/test'

test('right click', async({page})=>{
    await page.goto('https://textbox.johnjago.com/')
    await page.locator('//textarea').pressSequentially('Malini SM ')
    await page.locator('//textarea').dblclick()
    await page.locator('//textarea').click({button: "right"})

})