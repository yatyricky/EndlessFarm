import { Time } from "../Time";
import { Timer } from "../Timer";
import { CreateUnitSystem } from "./Systems/CreateUnitSystem";
import { TestSystem } from "./Systems/TestSystem";
import { World } from "./World";

/** @noSelf */
export class Engine {

    public static world: World;

    public static Start(): void {
        const world = new World();
        Engine.world = world;

        world.Add(new TestSystem());
        // world. Add(require("Game/Systems/InputSystem").New())
        world.Add(new CreateUnitSystem());
        // world. Add(require("Game/Systems/SpellCastSystem").New())

        world.Awake();
        world.Start();

        new Timer(0.0166667, -1, () => {
            world.Update(Time.GetTime());
        }).Start();
    }

}
