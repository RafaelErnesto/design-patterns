export interface DatabaseServerInterface {
    connect(url: string): string
    disconnect(): void
}