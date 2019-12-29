using System;
using UnityEditor;
using UnityEngine;

namespace WE
{
    [CustomEditor(typeof(UnitConfig))]
    public class UnitConfigEditor : Editor
    {
        private UnitConfig This { get => target as UnitConfig; }

        public override void OnInspectorGUI()
        {
            EditorGUI.BeginChangeCheck();

            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Count", GUILayout.Width(120f));
            int count = Math.Max(EditorGUILayout.DelayedIntField(This.Fields?.Length ?? 0), 0);
            if (This.Fields == null || This.Fields.Length != count)
            {
                Array.Resize(ref This.Fields, count);
            }
            EditorGUILayout.EndHorizontal();
            for (int i = 0; i < count; i++)
            {
                ref Field e = ref This.Fields[i];
                EditorGUILayout.BeginHorizontal();
                e.Type = (Type)EditorGUILayout.EnumPopup(e.Type);
                e.Name = EditorGUILayout.TextField(e.Name, GUILayout.Width(120f));
                switch (e.Type)
                {
                    case Type.INT:
                        e.iValue = EditorGUILayout.IntField(e.iValue);
                        break;
                    case Type.INT256:
                        e.sValue = EditorGUILayout.TextField(e.sValue);
                        break;
                    case Type.STRING:
                        e.sValue = EditorGUILayout.TextField(e.sValue);
                        break;
                    case Type.FLOAT:
                        e.fValue = EditorGUILayout.FloatField(e.fValue);
                        break;
                    case Type.ENUM_CAREER:
                        e.iValue = (int)(Career)EditorGUILayout.EnumPopup((Career)e.iValue);
                        break;
                    case Type.ENUM_PRIMARY_ATTRIBUTE:
                        e.iValue = (int)(PrimaryAttribute)EditorGUILayout.EnumPopup((PrimaryAttribute)e.iValue);
                        break;
                    default:
                        break;
                }

                EditorGUILayout.EndHorizontal();
            }

            if (EditorGUI.EndChangeCheck())
            {
                EditorUtility.SetDirty(This);
                AssetDatabase.SaveAssets();
            }
        }
    }
}
