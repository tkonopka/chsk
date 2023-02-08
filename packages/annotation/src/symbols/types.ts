import { CssProps, SymbolProps } from '@chsk/core'
import { FC } from 'react'

export interface createConcentricSymbolProps
    extends Omit<SymbolProps, 'cx' | 'cy' | 'r' | 'className' | 'style' | 'setRole'> {
    variant?: 'foreground' | 'background'
    symbolPrimary?: FC<SymbolProps>
    symbolSecondary?: FC<SymbolProps>
    rMultiplier?: number
    styleModifier?: CssProps
}
