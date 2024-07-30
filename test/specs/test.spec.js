import WelcomePage from "../page/welcome.page.js"
import FormPage from "../page/form.page.js"
import HomePage from '../page/home.page.js'

describe('Positif Flow', () => {
    it('User Successfully Go to Homepage', async () => {
        await WelcomePage.fillForm("Hahaa", "54", "290", "Male")
        await WelcomePage.submit()
        await FormPage.selectOption("dua")
        await FormPage.submit()

        await expect(HomePage.headerName).toBeDisplayed();
    })
})