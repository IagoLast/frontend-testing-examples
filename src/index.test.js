import { screen, waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  document.body.innerHTML = `
    <header>
    <button type="button" id="btn-init">
      Start
    </button>
    </header>
  <main></main> 
  `;

  document.querySelector("#btn-init").addEventListener("click", () => {
    const TIME = 1000;
    setTimeout(() => {
      document.querySelector("main").innerHTML = "<p>Clicked!</p>";
    }, TIME);
  });
});

test("should display the text Clicked after a time when the user clicks on the start button", async () => {
  const $button = screen.queryByText("Start", { selector: "button" });
  expect($button).toBeVisible();
  userEvent.click($button);
  return waitFor(() => {
    expect(screen.queryByText("Clicked!")).toBeVisible();
  });
});
