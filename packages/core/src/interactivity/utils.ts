import { WithId } from '../general'

export const guessLabel = <DataSpec extends WithId & Record<string, unknown>>(
    x: DataSpec
): string => {
    if ('label' in x) return String(x.label)
    const result = x as DataSpec & { label?: string }
    if ('key' in x && 'data' in x) {
        return String(result['key']) + ' - ' + String(result['data'])
    }
    if ('key' in x) {
        return String(result['key'])
    }
    return result.id
}
