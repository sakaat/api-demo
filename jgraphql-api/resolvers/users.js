const users = [
    {
        id: "bf6b1df9-2bba-4b44-906d-2a62b11df166",
        name: "Ardith Steuber",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "cdbee66e-e850-4d02-a3c4-69ee00da0180",
        name: "Benjamin Herzog",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "0a315281-2d01-4ae3-a976-59244e1aab56",
        name: "Camila Stracke",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "ff374a99-374a-4220-a97e-fd3d36e578d9",
        name: "Llewellyn Dicki",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "78c4022c-a858-422a-8619-bcb100a4498b",
        name: "Mabelle Walker",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "89801189-c067-4570-9b36-a14d7283fea2",
        name: "Jennings Toy",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "0c8c3aed-3263-461b-b6cc-05f2726c2b57",
        name: "Layla Mraz",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "ec8adec6-2b53-427c-bce9-10d0b6d48c5c",
        name: "Kaya Fahey",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "2cd4f804-4ecb-4cff-9b7c-c1f4eacb619e",
        name: "Angela Powlowski",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "9196c18a-cf9a-4d37-b429-dfd645bda680",
        name: "Felton Bradtke",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "aed85529-fdfa-43ed-b58b-aaafe3d2a860",
        name: "Haleigh Klein",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "1cfe9695-4f85-4ed5-a311-8279c7362af4",
        name: "Monte Koch",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "13339f62-4baa-45ab-89eb-a2d577a58d37",
        name: "Kelvin Farrell",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "b0b88766-72e0-45d7-bb6e-9121312c2efd",
        name: "Meaghan Jakubowski",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "1d135c60-d736-45a8-902a-77b005176b09",
        name: "Lisette Gerlach",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "8b3fa595-c5f5-41a0-b7a2-19a4ba1669d8",
        name: "Adelia Haag",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "5895d000-14f2-4ddd-b8f6-6bd7d4db7065",
        name: "Damian Jacobs",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "2c4fb736-6658-4b5e-9f09-53ace0a52d39",
        name: "Karli Larkin",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "e4918a86-e28c-4011-bf54-030c1bda26c2",
        name: "Jermain Howell",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "651fecbb-547c-4916-8906-44a75decd8bd",
        name: "Clementina Schumm",
        teamid: "e90eca21-8558-4384-930a-e7630adc0ac8",
    },
    {
        id: "80683dce-01df-4ed1-b064-ec5f33f3c83b",
        name: "Patricia White",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "fbb9790d-001d-498c-aa90-d935cefa7813",
        name: "Candida Witting",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "e9361841-66a2-42d6-837e-34038315b48d",
        name: "Lilian Borer",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "b38dd6f6-dc9d-4c83-98fe-ed8a75c5a27b",
        name: "Yolanda O'Keefe",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "30b1e4c6-024b-4610-a728-ccdaff6a69dd",
        name: "Clarabelle Metz",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "d0f2f5c6-f4b2-4e03-92f2-c177ead95d74",
        name: "Mathew Okuneva",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "73efe9ef-b847-4d68-ab55-169d7ef1b049",
        name: "Norwood Donnelly",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "d42f215f-cc98-447c-b7b1-ede26e46aa4e",
        name: "Shayna Von",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "84324011-bdcc-417d-bab2-39f8ba4253c9",
        name: "Nicole Kertzmann",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "14fa1db8-06fd-49c6-8af3-3607aacbbf8d",
        name: "Titus Grant",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "0ece7d72-9ebd-4a9a-8c4c-a7e454ecbc51",
        name: "Carmela Adams",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "41160d33-f16e-40e1-a6aa-d4ef30557720",
        name: "Pauline Quitzon",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "2767012e-bc8e-428e-84f1-131d18e19aa2",
        name: "Daphnee Koch",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "bacee143-ee63-4574-b999-d74bc61c9d43",
        name: "Ethyl Emard",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "8413e7c0-f191-4dbc-8e64-d405b9f3fb11",
        name: "Thaddeus Gislason",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "70502636-5ef8-414c-badc-640322e2d2eb",
        name: "Shanna Braun",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "826e1a83-008a-4bd4-9d0b-38e0f6a86c6d",
        name: "Elody Toy",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "7454d8bf-bf65-4fe6-9e33-db38a6800d4f",
        name: "Talia Tillman",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "7bde4bde-ed3a-466f-b540-6030cdbfd25d",
        name: "Eloise Abshire",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "e1a0f14a-2b52-42cc-b4d0-1641dd9306e8",
        name: "Ernestina Abbott",
        teamid: "e971be6b-34a6-4693-9592-cf2ce8d8f9f2",
    },
    {
        id: "39d3eca9-7f70-4935-820d-c0ba5d6abdbb",
        name: "Beverly Keebler",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "bf0652d8-f09c-4272-8725-939dd9656501",
        name: "Mohammad Fritsch",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "e5945d44-b097-4eaa-a242-2eff7840cb4a",
        name: "Kiara Considine",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "86794fed-568c-4c20-b6d7-f084d6266d16",
        name: "Ottilie Stokes",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "c4997e48-f641-4a5b-a3b4-f58d09e5aa8d",
        name: "Emerald Reynolds",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "0b7056f1-5807-4817-9e9c-b5466fd6a5d6",
        name: "Phyllis Mueller",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "27694d84-42eb-41c4-ad1a-f5d2d176fb6a",
        name: "Rachel Flatley",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "1dfd5bca-0751-413e-a888-7febb43997ac",
        name: "Al Stark",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "8e28f98b-2876-4e1c-ac54-279ab0aec64f",
        name: "Clifton Connelly",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "fa588900-bcc8-4ddd-b8d0-5d8069561b4e",
        name: "Dudley Mante",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "9f4ba155-5f90-43cd-92df-5a2ff2a02faf",
        name: "Walker Hayes",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "ad5011a6-eaa8-4800-aecf-02944bbb07bf",
        name: "Rosie Bosco",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "a0aded78-2eaf-4990-a0c8-8bddeefdbfea",
        name: "Aniya Bosco",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "9e60138e-310f-4a6c-af12-a033d5580372",
        name: "Fernando Rice",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "82600d22-d14c-41f4-b558-c0b1d8ab9500",
        name: "Ismael Harris",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "33ea1c0a-825b-4b88-b046-eee7bf992ac7",
        name: "Aiyana Volkman",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "6a98a6b5-8303-4e98-92a6-fe5926bad1d9",
        name: "Price Haag",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "0a45a77e-300f-4e5d-9ac8-2d599568e8cf",
        name: "Lucious Bosco",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "745446f2-fc4f-4ef1-9815-d5ef6a45267a",
        name: "Verda Rutherford",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
    {
        id: "34b25677-0747-46c1-b720-d8d13178f492",
        name: "Wilfred Klein",
        teamid: "1c37de88-4f42-46f4-b7d6-c2997a4ab33f",
    },
];

module.exports = users;
