"use client"

import * as React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <select ref={ref} {...props}>
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

export const SelectTrigger = Select
export const SelectContent = React.Fragment
export const SelectItem = React.forwardRef<HTMLOptionElement, React.OptionHTMLAttributes<HTMLOptionElement>>(
  (props, ref) => <option ref={ref} {...props} />
)
SelectItem.displayName = "SelectItem"
