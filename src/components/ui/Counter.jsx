import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { triggerAllInsertion } from "@/test/utils"
import Counter from "./Counter"
import { useCountup } from "@/hooks/useCountup";


describe("Counter", () => {
  beforeEach(() => {
    global.IntersectionObserver.instances = [];
  });

  it("starts at 0 before scrolling into view", () => {
    render(<Counter end={2500} suffix="+" />)
    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it("animates up to the end value once the element intersects", async () => {
    render(<Counter end={100} suffix="+" />);
    triggerAllInsertion(true);
    await waitFor(
      () => {
        expect(screen.getByText("100+")).toBeInTheDocument();
      },
      { timeout: 4000 }
    );

    it("renders decimal values when decimanls prop is set", async () => {
      render(<Counter end={1.1} suffix="k+" decimals={1} />)
      triggerAllInsertion(true);
      await waitFor(
        () => {
          expect(screen.getByText("1.1k+")).toBeInTheDocument();
        },
        { timeout: 4000 }
      );
    })
  })
});

const Counter = ({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {

  const { ref, value } = useCountup(end, { decimals });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals ? value.toFixed(decimals) : value.toLocaleString()}
      {suffix}
    </span>
  )
}

export default Counter