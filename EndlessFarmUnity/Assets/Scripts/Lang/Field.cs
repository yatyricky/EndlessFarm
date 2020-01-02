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

    public enum FieldType
    {
        INT,
        INT256,
        STRING,
        FLOAT,
        ENUM_CAREER,
        ENUM_PRIMARY_ATTRIBUTE,
    }

    [Serializable]
    public struct FieldDefine
    {
        public string Name;
        public FieldType Type;
    }

    [Serializable]
    public struct Field
    {
        public string SValue;
        public int IValue;
        public float FValue;
    }
}
