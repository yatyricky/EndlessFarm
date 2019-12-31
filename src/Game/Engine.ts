import { Time } from "../Time";
import { Timer } from "../Timer";
import { World } from "./World";

export class Engine {

    public static world: World;

    public static Start(): void {
        const world = new World();
        Engine.world = world;

        // world. Add(require("Game/Systems/TestSystem").New())
        // world. Add(require("Game/Systems/InputSystem").New())
        // world. Add(require("Game/Systems/CreateUnitSystem").New())
        // world. Add(require("Game/Systems/SpellCastSystem").New())

        world.Awake();
        world.Start();

        new Timer(0.0166667, -1, () => {
            world.Update(Time.GetTime());
        }).Start();
    }

}
