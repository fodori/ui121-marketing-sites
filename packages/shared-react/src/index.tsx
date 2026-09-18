import type { CSSProperties, ReactNode } from 'react'

/** Tiny non-visual primitives — sites own all design. */

export type StackProps = {
  children: ReactNode
  gap?: number
  style?: CSSProperties
  className?: string
}

export const Stack = ({ children, gap = 12, style, className }: StackProps) => (
  <div className={className} style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
    {children}
  </div>
)

export type VisuallyHiddenProps = { children: ReactNode }

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
  <span
    style={{
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    }}
  >
    {children}
  </span>
)
