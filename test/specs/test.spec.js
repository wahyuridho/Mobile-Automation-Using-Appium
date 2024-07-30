import WelcomePage from "../page/welcome.page.js"
import FormPage from "../page/form.page.js"
import HomePage from '../page/home.page.js'

describe('Positif Flow', () => {
    it('User Successfully Go to Homepage', async () => {
        await WelcomePage.fillForm("Rudy", "88", "180", "Male")
        await WelcomePage.submit()
        await FormPage.selectOption("tiga")
        await FormPage.submit()

        await expect(HomePage.headerName).toBeDisplayed();
        await expect(HomePage.headerDesc).toBeDisplayed();
    })
})