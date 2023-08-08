import clsx from "clsx";

/* eslint-disable react/prop-types */
export default function Box({className="", children}) {
  return (
    <div className={clsx(className,"px-4 max-w-7xl mx-auto")}>
      {children}
    </div>
  )
}
