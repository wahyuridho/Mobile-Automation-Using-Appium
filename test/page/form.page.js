class FormPage {
    get optionSatu() { return $("id:com.fghilmany.dietmealapp:id/rb_rest") }
    get optionDua() { return $("id:com.fghilmany.dietmealapp:id/rb_very_very_low") }
    get optionTiga() { return $("id:com.fghilmany.dietmealapp:id/rb_very_low") }
    get optionEmpat() { return $("id:com.fghilmany.dietmealapp:id/rb_low_to_medium") }
    get optionLima() { return $("id:com.fghilmany.dietmealapp:id/rb_medium") }
    get optionEnam() { return $("id:com.fghilmany.dietmealapp:id/rb_heavy") }
    get optionTujuh() { return $("id:com.fghilmany.dietmealapp:id/rb_very_heavy") }
    get submitBtn() { return $("id:com.fghilmany.dietmealapp:id/bt_finish") }


    selectOption = async (option) => {
        switch(option){
            case "satu":
                await this.optionSatu.click()
                break
            case "dua":
                await this.optionDua.click()
                break
            case "tiga":
                await this.optionTiga.click()
                break
            case "empat":
                await this.optionEmpat.click()
                break
            case "lima":
                await this.optionLima.click()
                break
            case "enam":
                await this.optionEnam.click()
                break
            case "tujuh":
                await this.optionTujuh.click()
                break
            default:
                throw new Error(`Unknown activity level: ${option}`);
        }
    }

    submit = async () => {
        return this.submitBtn.click()
    }

}

export default new FormPage()