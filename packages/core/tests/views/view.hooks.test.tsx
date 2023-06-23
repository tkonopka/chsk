import { ProcessedDataContextProps, useIdsKeys } from '../../src/views'
import { cloneDeep } from 'lodash'
import { render } from '@testing-library/react'

type IdsKeys = { idSet: Set<string>; keySet: Set<string>; idArray: string[]; keyArray: string[] }

describe('useIdsKeys', () => {
    const mockProcessedDataProps: ProcessedDataContextProps = {
        data: [],
        seriesIndexes: { A: 0, B: 1, C: 2 },
        keys: ['x', 'y', 'z'],
    }
    const mockResult: IdsKeys = { idSet: new Set(), keySet: new Set(), idArray: [], keyArray: [] }

    const GetIdsKeys = ({
        ids,
        keys,
        target,
    }: {
        ids?: string[] | null
        keys?: string[] | null
        target: IdsKeys
    }) => {
        const result = useIdsKeys(ids, keys, mockProcessedDataProps)
        target.idSet = result.idSet
        target.keySet = result.keySet
        target.idArray = result.idArray
        target.keyArray = result.keyArray
        return null
    }

    it('gets all available ids and keys', () => {
        const result = cloneDeep(mockResult)
        render(<GetIdsKeys ids={undefined} keys={undefined} target={result} />)
        expect(Array.from(result.idSet).sort()).toEqual(['A', 'B', 'C'])
        expect(Array.from(result.keySet).sort()).toEqual(['x', 'y', 'z'])
    })

    it('gets empty outputs', () => {
        const result = cloneDeep(mockResult)
        render(<GetIdsKeys ids={null} keys={null} target={result} />)
        expect(Array.from(result.idSet)).toHaveLength(0)
        expect(Array.from(result.keySet)).toHaveLength(0)
        expect(Array.from(result.idArray)).toHaveLength(0)
        expect(Array.from(result.keyArray)).toHaveLength(0)
    })

    it('gets a subset of ids and keys', () => {
        const result = cloneDeep(mockResult)
        render(<GetIdsKeys ids={['B']} keys={['z', 'y']} target={result} />)
        expect(Array.from(result.idSet).sort()).toEqual(['B'])
        expect(Array.from(result.keySet).sort()).toEqual(['y', 'z'])
    })

    it('removes unnecessary ids and keys', () => {
        const result = cloneDeep(mockResult)
        render(<GetIdsKeys ids={['B', 'Z']} keys={['z', 'y', 'w']} target={result} />)
        expect(Array.from(result.idSet).sort()).toEqual(['B'])
        expect(Array.from(result.keySet).sort()).toEqual(['y', 'z'])
    })

    it('creates arrays for ids and keys', () => {
        const result = cloneDeep(mockResult)
        render(<GetIdsKeys ids={['C', 'A']} keys={['z', 'y', 'w']} target={result} />)
        expect(result.idArray).toEqual(['A', 'C'])
        expect(result.keyArray).toEqual(['y', 'z'])
    })
})
