/* eslint-disable react/prop-types */
import { clsx } from "clsx";

export default function Button({ className = "", isOutline, children, ...props }) {

  const classes = clsx(className,{
    "hover:opacity-80 px-2 py-1 rounded-md border hover:cursor-pointer border-main" : true,
    "bg-transparent text-main" : isOutline,
    "bg-main text-white" : !isOutline
  })

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
