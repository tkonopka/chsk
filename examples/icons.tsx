/**
 * Functions that create icons
 */

type IconProps = {
    x?: number
    y?: number
    fill?: string
    className?: string
}
export const defaultIconActiveFill = '#555'
export const defaultIconInactiveFill = '#ccc'

// replay icon: https://fonts.google.com/icons?icon.platform=web
export const ReplayIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
            fill={fill}
            d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"
        />
    </svg>
)

// chevron right icon: https://fonts.google.com/icons?icon.platform=web
export const NextIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
    </svg>
)

// chevron left icon: https://fonts.google.com/icons?icon.platform=web
export const PreviousIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
    </svg>
)

// first page icon: https://fonts.google.com/icons?icon.platform=web
export const FirstPageIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
    </svg>
)

// last page icon: https://fonts.google.com/icons?icon.platform=web
export const LastPageIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="m7 18-1.4-1.4 4.6-4.6-4.6-4.6L7 6l6 6Zm9 0V6h2v12Z" />
    </svg>
)

// filter icon: https://fonts.google.com/icons?icon.platform=web
export const FilterIcon = ({
    x = 0,
    y = 0,
    fill = defaultIconActiveFill,
    className,
}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x={x} y={y} height="24" width="24">
        <path
            d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
            fill={fill}
            className={className}
        />
    </svg>
)

// dataset icon: https://fonts.google.com/icons?icon.platform=web
export const DatasetIcon = ({
    x = 0,
    y = 0,
    fill = defaultIconActiveFill,
    className,
}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x={x} y={y} height="24" width="24">
        <path
            fill={fill}
            d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,17H7v-4h4V17z M11,11H7V7h4V11 z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"
            className={className}
        />
    </svg>
)

// check icon: https://fonts.google.com/icons?icon.platform=web
export const CheckIcon = ({ x = 0, y = 0, fill = defaultIconActiveFill, className }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x={x} y={y} height="24" width="24">
        <path
            fill={fill}
            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
            className={className}
        />
    </svg>
)
