
export interface Challenge {
    id: number,
    category: string,
    description: string,
    amount?: number,
    frequency?: number,
    duration: number,
}