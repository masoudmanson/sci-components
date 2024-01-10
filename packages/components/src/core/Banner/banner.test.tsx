import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";
import * as stories from "./index.stories";

// Returns a component that already contain all decorators from story level, meta level and global level.
const { Test } = composeStories(stories);

describe("<Banner />", () => {
  generateSnapshots(stories);

  it("renders banner component", async () => {
    render(<Test {...Test.args} />);
    const banner = screen.getByRole("banner");
    expect(banner).not.toBeNull();
  });

  it("renders text given to it", () => {
    const text = "this is a test component";
    render(<Test {...Test.args} textChild={text} />);
    const bannerText = screen.getByText(text);
    expect(bannerText).not.toBeNull();
  });

  it("can be dismissed", async () => {
    render(<Test {...Test.args} />);
    const banner = screen.getByRole("banner");
    expect(banner).not.toBeNull();

    const closeButton = screen.getByRole("button");
    const click = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    fireEvent(closeButton, click);

    const banner2 = screen.queryByRole("banner");
    expect(banner2).toBeNull();
  });

  it("executes callback on close", () => {
    const onClose = jest.fn();
    render(<Test {...Test.args} onClose={onClose} />);

    const closeButton = screen.getByRole("button");
    const click = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    fireEvent(closeButton, click);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
