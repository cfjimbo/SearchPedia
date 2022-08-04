export interface Search{
    id?: string,
    entity?: string,
    abstract?: string
}

export interface SearchId extends Search{id:string}