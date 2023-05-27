import { createElement, FC, ReactNode } from 'react'
import { merge } from 'lodash'
import { cloneProps, Circle, getClassName, SymbolProps } from '@chsk/core'
import { createConcentricSymbolProps } from './types'

const createConcentricParts = ({
    cx,
    cy,
    r = 1,
    className,
    style,
    setRole,
    //
    variant,
    symbolPrimary = Circle,
    symbolSecondary = Circle,
    rMultiplier = 1,
    styleModifier,
}: createConcentricSymbolProps &
    Pick<SymbolProps, 'cx' | 'cy' | 'r' | 'className' | 'style' | 'setRole'>): {
    background: ReactNode
    foreground: ReactNode
} => {
    const className1 = getClassName(className ?? 'default', 'primary')
    const primary = createElement(symbolPrimary, {
        key: 'primary',
        cx,
        cy,
        r,
        className: className1,
        style,
        setRole,
    })
    const className2 = getClassName(className ?? 'default', 'secondary')
    const mergedStyle = merge(cloneProps(style, false), styleModifier)
    const secondary = createElement(symbolSecondary, {
        key: 'secondary',
        cx,
        cy,
        r: r * rMultiplier,
        className: className2,
        style: mergedStyle,
        setRole,
    })

    const isBackground = variant === 'background'
    return {
        background: isBackground ? secondary : primary,
        foreground: isBackground ? primary : secondary,
    }
}

export const createConcentricSymbol = ({
    variant = 'background',
    symbolPrimary = Circle,
    symbolSecondary = Circle,
    rMultiplier = 1.5,
    styleModifier = { fill: '#ffffff' },
}: createConcentricSymbolProps): FC<SymbolProps> => {
    const ConcentricSymbol = ({ cx, cy, r, className, style, ...props }: SymbolProps) => {
        const { background, foreground } = createConcentricParts({
            cx,
            cy,
            r,
            className,
            style,
            //
            variant,
            symbolPrimary,
            symbolSecondary,
            rMultiplier,
            styleModifier,
        })
        return (
            <g className={className} {...props}>
                {background}
                {foreground}
            </g>
        )
    }
    return ConcentricSymbol
}
