describe('Open Scenario', () => {
    it('Oke', async () => {
        const el1 = await driver.$("id:com.fghilmany.dietmealapp:id/et_name");
        await el1.addValue("rusdi");
        const el2 = await driver.$("id:com.fghilmany.dietmealapp:id/et_weight");
        await el2.addValue("67");
        const el3 = await driver.$("id:com.fghilmany.dietmealapp:id/et_height");
        await el3.addValue("170");
        const el4 = await driver.$("id:com.fghilmany.dietmealapp:id/rb_male");
        await el4.click();
        const el5 = await driver.$("id:com.fghilmany.dietmealapp:id/bt_next");
        await el5.click();
        await driver.reloadSession();
    })

    it('Yo', async () => {
        const el2 = await driver.$("id:com.fghilmany.dietmealapp:id/et_weight");
        await el2.addValue("67");
        const el3 = await driver.$("id:com.fghilmany.dietmealapp:id/et_height");
        await el3.addValue("170");
        const el4 = await driver.$("id:com.fghilmany.dietmealapp:id/rb_male");
        await el4.click();
        await driver.deleteSession()

    })

})