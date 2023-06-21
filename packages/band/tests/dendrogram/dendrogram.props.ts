import { DendrogramDataItem, DendrogramProps } from '../../src'

export const dataDendrogram: Array<DendrogramDataItem> = [
    {
        id: 'alpha',
        merge: [
            [-1, -2],
            [-3, -4],
            [1, 2],
        ],
        height: [0.25, 0.5, 0.75],
        keys: ['a', 'b', 'c', 'd'],
    },
]

export const dendrogramProps: Pick<DendrogramProps, 'data'> = {
    data: dataDendrogram,
}
