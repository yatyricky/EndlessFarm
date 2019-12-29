using System;

namespace WE
{
    public enum Career
    {
        TANK = 1,
        HEALER = 2,
        DPS = 4,
        MINION = 8,
        BOSS = 16,
        CREEP = 32,
    }

    public enum PrimaryAttribute
    {
        STR = 1,
        AGI = 2,
        INT = 3,
        NON = 4,
    }

    public enum Type
    {
        INT,
        INT256,
        STRING,
        FLOAT,
        ENUM_CAREER,
        ENUM_PRIMARY_ATTRIBUTE,
    }

    [Serializable]
    public struct Field
    {
        public string Name;
        public Type Type;
        public string sValue;
        public int iValue;
        public float fValue;
    }
}
