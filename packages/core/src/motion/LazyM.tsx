import { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

export const LazyM = ({ children }: { children: ReactNode }) => (
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
)
