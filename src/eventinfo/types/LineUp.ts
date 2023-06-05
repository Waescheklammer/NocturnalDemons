export interface LineUp {
    headliners: string[],
    stages: Stage[]
}

interface Stage {
    name: string,
    acts: string[]
}