import { Engine } from "./src/Game/Engine";
import { Locale } from "./src/Game/Locale";
import { Time } from "./src/Time";

Time.Init();
Locale.Init("EN");
Engine.Start();
