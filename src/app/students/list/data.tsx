interface DataType {
    id: number;
    fullname: string;
    grade: string;
    status: "present" | "absent" | "late" | "permission";
    uid: `#${string}`;
  }
  
  export const data: Array<DataType> = [
    { id: 1, fullname: "John Doe", grade: "10 A", status: "late", uid: "#1021" },
    { id: 2, fullname: "Jane Smith", grade: "10 B", status: "present", uid: "#1022" },
    { id: 3, fullname: "Emily Johnson", grade: "10 C", status: "absent", uid: "#1023" },
    { id: 4, fullname: "Michael Brown", grade: "10 D", status: "late", uid: "#1024" },
    { id: 5, fullname: "Sarah Davis", grade: "10 E", status: "present", uid: "#1025" },
    { id: 6, fullname: "David Wilson", grade: "10 F", status: "absent", uid: "#1026" },
    { id: 7, fullname: "Laura Martinez", grade: "11 A", status: "late", uid: "#1027" },
    { id: 8, fullname: "James Anderson", grade: "11 B", status: "present", uid: "#1028" },
    { id: 9, fullname: "Olivia Thomas", grade: "11 C", status: "absent", uid: "#1029" },
    { id: 10, fullname: "Daniel Taylor", grade: "11 D", status: "late", uid: "#1030" },
    { id: 11, fullname: "Isabella Hernandez", grade: "11 E", status: "present", uid: "#1031" },
    { id: 12, fullname: "Christopher Moore", grade: "11 F", status: "absent", uid: "#1032" },
    { id: 13, fullname: "Sophia Jackson", grade: "12 A", status: "late", uid: "#1033" },
    { id: 14, fullname: "Matthew Lee", grade: "12 B", status: "present", uid: "#1034" },
    { id: 15, fullname: "Mia White", grade: "12 C", status: "absent", uid: "#1035" },
    { id: 16, fullname: "Ethan Harris", grade: "12 D", status: "late", uid: "#1036" },
    { id: 17, fullname: "Ava Clark", grade: "12 E", status: "present", uid: "#1037" },
    { id: 18, fullname: "Joshua Lewis", grade: "12 F", status: "absent", uid: "#1038" },
    { id: 19, fullname: "Charlotte Robinson", grade: "9 A", status: "late", uid: "#1039" },
    { id: 20, fullname: "Liam Walker", grade: "9 B", status: "present", uid: "#1040" },
    { id: 21, fullname: "Amelia Young", grade: "9 C", status: "absent", uid: "#1041" },
    { id: 22, fullname: "Alexander Allen", grade: "9 D", status: "late", uid: "#1042" },
    { id: 23, fullname: "Harper Scott", grade: "9 E", status: "present", uid: "#1043" },
    { id: 24, fullname: "Benjamin King", grade: "9 F", status: "absent", uid: "#1044" },
    { id: 25, fullname: "Mason Wright", grade: "8 A", status: "late", uid: "#1045" },
    { id: 26, fullname: "Ella Adams", grade: "8 B", status: "present", uid: "#1046" },
    { id: 27, fullname: "Lucas Baker", grade: "8 C", status: "absent", uid: "#1047" },
    { id: 28, fullname: "Aria Nelson", grade: "8 D", status: "late", uid: "#1048" },
    { id: 29, fullname: "Jacob Mitchell", grade: "8 E", status: "present", uid: "#1049" },
    { id: 30, fullname: "Mila Carter", grade: "8 F", status: "absent", uid: "#1050" },
    { id: 31, fullname: "Logan Phillips", grade: "7 A", status: "late", uid: "#1051" },
    { id: 32, fullname: "Grace Evans", grade: "7 B", status: "present", uid: "#1052" },
    { id: 33, fullname: "Noah Turner", grade: "7 C", status: "absent", uid: "#1053" },
    { id: 34, fullname: "Zoe Carter", grade: "7 D", status: "late", uid: "#1054" },
    { id: 35, fullname: "Oliver Green", grade: "7 E", status: "present", uid: "#1055" },
    { id: 36, fullname: "Lily Adams", grade: "7 F", status: "absent", uid: "#1056" },
    { id: 37, fullname: "Elijah Morris", grade: "6 A", status: "late", uid: "#1057" },
    { id: 38, fullname: "Chloe Roberts", grade: "6 B", status: "present", uid: "#1058" },
    { id: 39, fullname: "William Davis", grade: "6 C", status: "absent", uid: "#1059" },
    { id: 40, fullname: "Maya Campbell", grade: "6 D", status: "late", uid: "#1060" },
    { id: 41, fullname: "James Wilson", grade: "6 E", status: "present", uid: "#1061" },
    { id: 42, fullname: "Nora Lee", grade: "6 F", status: "absent", uid: "#1062" },
    { id: 43, fullname: "Henry Young", grade: "5 A", status: "late", uid: "#1063" },
    { id: 44, fullname: "Evelyn Walker", grade: "5 B", status: "present", uid: "#1064" },
    { id: 45, fullname: "Sebastian Allen", grade: "5 C", status: "absent", uid: "#1065" },
    { id: 46, fullname: "Mila Scott", grade: "5 D", status: "late", uid: "#1066" },
    { id: 47, fullname: "Jackson Taylor", grade: "5 E", status: "present", uid: "#1067" },
    { id: 48, fullname: "Avery Green", grade: "5 F", status: "absent", uid: "#1068" },
    { id: 49, fullname: "Owen Harris", grade: "4 A", status: "late", uid: "#1069" },
    { id: 50, fullname: "Lillian Clark", grade: "4 B", status: "present", uid: "#1070" },
  ];
  