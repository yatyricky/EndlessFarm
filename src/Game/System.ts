export interface ISystem {
    Awake(): void;
    Start(): void;
    Update(delta: float): void;
}
