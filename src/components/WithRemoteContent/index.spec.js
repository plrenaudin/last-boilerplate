import WithRemoteContent from "./index.svelte";
import { render } from "@testing-library/svelte";

describe("My Component", () => {
  it("renders My Component", () => {
    const { container } = render(WithRemoteContent);

    expect(container).toMatchSnapshot();
  });
});
