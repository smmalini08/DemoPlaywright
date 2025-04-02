import {test} from "@playwright/test";

test('Keyboard actions', async({page})=>{
    await page.goto('https://textbox.johnjago.com/')
    await page.locator('//textarea').pressSequentially('Malini SM ')
    page.get
    await page.locator('//textarea').press('Control+A')
    await page.locator('//textarea').press('Backspace')
})

test('Keyboard actions on page', async({page})=>{
    await page.goto('https://textbox.johnjago.com/')
    await page.keyboard.type('Hello World')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')
    for(let i=0; i< 'World'.length; i++)
    {
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')
})