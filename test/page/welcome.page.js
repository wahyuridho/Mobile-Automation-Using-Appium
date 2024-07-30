class WelcomePage {

    get nameInput() { return $("id:com.fghilmany.dietmealapp:id/et_name") }
    get weightInput() { return $("id:com.fghilmany.dietmealapp:id/et_weight") }
    get heighInput() { return $("id:com.fghilmany.dietmealapp:id/et_height") }
    get maleRadioBtn() { return $("id:com.fghilmany.dietmealapp:id/rb_male") }
    get femaleRadioBtn() { return $("id:com.fghilmany.dietmealapp:id/rb_female") }
    get nextButton() { return $("id:com.fghilmany.dietmealapp:id/bt_next") }


    fillForm = async (name, weight, heigh, gender) => {
        await this.nameInput.addValue(name)
        await this.weightInput.addValue(weight)
        await this.heighInput.addValue(heigh)

        if(gender == "Male" | gender == "male"){
            await this.maleRadioBtn.click()
        }else{
            await this.femaleRadioBtn.click()
        }
    }

    
    submit = async () => {
        return await this.nextButton.click()
    }
}

export default new WelcomePage()