/**
 * str = hp
 * agi = dodge
 * int = mp
 */
export enum UnitAttr {
    // basic //
    Strength,
    Agility,
    Intelligence,
    Life,
    Mana,
    // offensive //
    Power,
    /**
     * 0 ~ +oo
     */
    DamageDealt,
    /**
     * 0 ~1.0 1 agi = 0.0025 critic
     */
    CritRate,
    /**
     * -oo ~ +oo
     */
    AttackSpeed,
    /**
     * 0.25 ~1.00
     */
    AttackRate,
    /**
     * 0 ~ +oo 1 int = 0.002 haste
     */
    CDR,
    // defensive //
    /**
     * 0 ~0.75 1 agi = 0.004 dodge
     */
    DodgeRate,
    /**
     * 0 ~ + oo
     */
    PhyxResist,
    PhyxDef,
    /**
     * 0 ~ + oo
     */
    SpellResist,
    SpellDef,
    /**
     * 0 ~ + oo
     */
    PhyxCritTaken,
    /**
     * 0 ~ + oo
     */
    SpellCritTaken,
    /**
     * 0 ~ + oo
     */
    DamageTaken,
    // utility //
    LifeRegen,
    /**
     * 0 ~ +oo 1 int = 0.03 regen
     */
    ManaRegen,
    Speed,
    Absorb,
    LifeLeech,
    ManaLeech,
}
