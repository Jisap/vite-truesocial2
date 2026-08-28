import { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom"

const isInternal = (href = "") => href.startsWith("/")

const useRipple = () => {
  const [ripples, setRipples] = useState([]);
  const idRef = useRef(0);

  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = idRef.current++;
    const ripple = {
      id,
      size,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
    }

    setRipples((prev) => [...prev, ripple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 650)
  }, []);

  const rippleLayer = (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="animate-ripple absolute rounded-full bg-white/50"
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
        />
      ))}
    </span>
  )

  return { rippleLayer, addRipple }
}



const Button = ({
  href,
  onClick,
  type = "button",
  variant = "default",
  className = "",
  children
}) => {

  const Tag = href ? (isInternal(href) ? Link : "a") : "button";
  const { addRipple, rippleLayer } = useRipple();

  const linkProps = href
    ? isInternal(href)
      ? { to: href }
      : { href, target: "_blank", rel: "noopener noreferrer" }
    : { type };

  const handleClick = (e) => {
    addRipple(e);
    onClick?.(e);
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"

  if (variant === "readmore") {
    return (
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`
          group relative inline-flex items-center gap-3 pr-8 text-base font-bold text-accent transition-colors duration-300 hover:text-primary
          ${focusRing} rounded-sm
          ${className}
        `}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
        </span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute right-0 h-5 w-5 -translate-y-1/2 top-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Tag>
    )
  }


  if (variant === "highlighted") {
    return (
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`
          relative block w-full overflow-hidden rounded-full bg-primary py-[15px] text-center text-base font-bold text-dark
          capitalize transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent hover:bg-shadow-[0_16px_35px_-12px_rgba(191.247.71,0.55)]
          active:translate-y-0 active:scale-[0.98]
          ${focusRing}
          ${className}
        `}
      >
        {rippleLayer}
        {children}
      </Tag>
    )
  }

  // default: premium glassmorphic pill with gradient border, shine + ripple
  return (
    <span
      className={`
        btn-gradient-border group/btn relative mr-12.5 inline-block rounded-full p-[1.5px] transition-transform duration-500
        ease-out hover:scale-[1.03] border border-gray-50/20 active:scale-[0.97]
        ${className}
      `}
    >
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`
          relative z-10 block overflow-hidden rounded-full bg-white/10 py-[12px] pr-[58px] pl-[22px] text-[15px] font-bold text-primary
          capitalize backdrop-blur-[20px] transition-all duration-500 ease-in-out sm:py-[14px] sm:pr-[65px] sm:pl-[25px] sm:text-base
          ${focusRing}
        `}
      >
        <span className="relative z-10">
          {children}
        </span>

        {/* shine sweep, replays each hover */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from transparent via-white/40 to-transparent 
          opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100"
        />

        {rippleLayer}
      </Tag>

      {/* circular accent arrow */}
    </span>
  )
}

export default Button