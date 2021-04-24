export const required = (value: any) => (value ? undefined : 'Field is required')

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if( value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}