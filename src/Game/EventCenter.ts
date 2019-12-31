import { Event } from "../Event";

export const SpellCast = new Event();
export const Keyboard = new Event<{ player: player, key: oskeytype }>();
