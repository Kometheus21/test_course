import ButtonsPage from "../pageObjects/Buttons.page";
import CheckBoxPage from "../pageObjects/Checkbox.page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
import TextBoxPage from "../pageObjects/TextBox.page";

describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Textbox - positive case", () => {
      TextBoxPage.usernameField.type("Donald Duck");
      TextBoxPage.emailField.type("random@email.com");
      TextBoxPage.currentAddressField.type("Valmiera - A");
      TextBoxPage.permanentAddressField.type("Valmiera - B");
      TextBoxPage.submitButton.click();
      TextBoxPage.outputName.should("have.text", "Name:Donald Duck");
      TextBoxPage.outputEmail.should("have.text", "Email:random@email.com");
      TextBoxPage.outputCurrentAddress.should("contain.text", "Current Address :Valmiera - A");
      TextBoxPage.outputPermanentAddress.should("contain.text", "Permananet Address :Valmiera - B");
    });

    it("Textbox - negative case", () => {
      TextBoxPage.emailField.type("random@email@xxx.com");
      TextBoxPage.submitButton.click();
      TextBoxPage.errorOutline.should("be.visible");
      TextBoxPage.emailField.should("have.class", "field-error");
    });
  });

  context("Check values - Notes, Angular, Private and Excel", () => {
    beforeEach(() => {
      CheckBoxPage.visit("/checkbox");
    });

    it("Check values", () =>{
      CheckBoxPage.expandButton.click();
      CheckBoxPage.fileNames.contains("Notes").click();
      CheckBoxPage.fileNames.contains("Angular").click();
      CheckBoxPage.fileNames.contains("Private").click();
      CheckBoxPage.fileNames.contains("Excel File.doc").click();
      CheckBoxPage.successText.should("contain.text", "notes");
      CheckBoxPage.successText.should("contain.text", "angular");
      CheckBoxPage.successText.should("contain.text", "private");
      CheckBoxPage.successText.should("contain.text", "excelFile");
    });

    it("Check value - Office", () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.fileNames.contains("Office").click();
      CheckBoxPage.successText.should("contain.text", "public");
      CheckBoxPage.successText.should("contain.text", "private");
      CheckBoxPage.successText.should("contain.text", "classified");
      CheckBoxPage.successText.should("contain.text", "general");
    });
  });

  context("Radio buttons scenario", () => {
    beforeEach(() => {
      RadioButtonPage.visit("/radio-button");
    });

    it("Click radio buttons", () => {
      RadioButtonPage.yesRadioButton.click({force: true});
      RadioButtonPage.successText.should("contain.text", "Yes")
      RadioButtonPage.impressiveRadioButton.click({force: true});
      RadioButtonPage.successText.should("contain.text", "Impressive");
      RadioButtonPage.noRadioButton.should("have.class", "disabled");
    });
  });

  context("Buttons", () => {
    beforeEach(() => {
      ButtonsPage.visit("/buttons");
    });

    it("Button clicking", () => {
      ButtonsPage.doubleCLickButton.dblclick();
      ButtonsPage.doubleClickMessage.should("have.text", "You have done a double click");
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickMessage.should("have.text", "You have done a right click");
      ButtonsPage.dynamicButton.click();
      ButtonsPage.dynamicMessage.should("have.text", "You have done a dynamic click");
    });
  });
});