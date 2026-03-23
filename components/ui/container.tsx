import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Reusable Container component for consistent horizontal alignment
 * Uses: max-width-7xl with centered alignment and responsive padding
 * Padding: px-4 sm:px-6 lg:px-8
 * 
 * Usage:
 * <Container>
 *   Your content here
 * </Container>
 */
export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
}

export default Container
