import {test} from '@playwright/test'

test('iframes', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const iframe = await page.frameLocator('#singleframe')
    await iframe.locator('[type="text"]').fill('Malini')
})

test('content frame usage', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const iframe = await page.locator('#singleframe')
    const framesSet = await iframe.contentFrame()
    await framesSet.locator('[type="text"]').fill('Malini')
})
