using System;
using UnityEngine;

namespace WE
{
    [CreateAssetMenu(fileName = "unit_config", menuName = "WE/Unit Config"), Serializable]
    public class UnitConfig : ScriptableObject
    {
        public Field[] Fields;
    }
}
