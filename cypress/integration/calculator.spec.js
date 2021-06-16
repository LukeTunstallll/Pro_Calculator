describe("my first test", () => {
  it("should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });
  it("should contain 0", () => {
    cy.get(".button__0").contains("0");
  });
});

describe("addition test", () => {
  it("should equal 10", () => {
    cy.get(".button__clear").click();
    cy.get(".button__5").click();
    cy.get(".button__add").click();
    cy.get(".button__5").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("10");
  });
});

describe("addition decimal test", () => {
  it("should equal 14.6", () => {
    cy.get(".button__clear").click();
    cy.get(".button__7").click();
    cy.get(".button__decimal").click();
    cy.get(".button__2").click();
    cy.get(".button__add").click();
    cy.get(".button__7").click();
    cy.get(".button__decimal").click();
    cy.get(".button__4").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("14.6");
  });
});

describe("subtract test", () => {
  it("should equal 5", () => {
    cy.get(".button__clear").click();
    cy.get(".button__8").click();
    cy.get(".button__subtract").click();
    cy.get(".button__3").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("5");
  });
});

describe("multiply test", () => {
  it("should equal 36", () => {
    cy.get(".button__clear").click();
    cy.get(".button__6").click();
    cy.get(".button__multiply").click();
    cy.get(".button__6").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("36");
  });
});

describe("divide test", () => {
  it("should equal 5", () => {
    cy.get(".button__clear").click();
    cy.get(".button__2").click();
    cy.get(".button__5").click();
    cy.get(".button__divide").click();
    cy.get(".button__5").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("5");
  });
});

describe("concurrent result test", () => {
  it("should equal 5", () => {
    cy.get(".button__clear").click();
    cy.get(".button__2").click();
    cy.get(".button__5").click();
    cy.get(".button__divide").click();
    cy.get(".button__5").click();
    cy.get(".button__equals").click();
    cy.get(".button__multiply").click();
    cy.get(".button__5").click();
    cy.get(".button__equals").click();
    cy.get(".display__result").contains("25");
  });
});
