import {CSSProperties} from "react";

export interface GridProps {
    /** variant */
    variant?: 'x' | 'y' | 'xy'
    /** css style */
    style?: Partial<CSSProperties>
}
