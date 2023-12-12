export interface productData {
    Name: string;
    Accessories: string;
    Color: string;
    Size: string;
    Sale: number;
    Time: string;
    Published: number;
}

const optNames = [
    "Áo Lông Chồn",
    "Mũ Lưỡi Trai",
    "Quần Thể Thao",
    "Quần Dài Thời Trang",
];

const accessories = ["Áo khoác", "Áo", "Mũ", "Quần"];
const colors = ["Blue", "Black", "Green", "Red"];
const size = ["Large", "Medium", "Small"];
const sale = [10, 20, 15, 22];
const time = ["Last time", "This month", "This week", "This year", "Today"];
const published = [2018, 2020, 2023, 2022, 2019];

const data: productData[] = [
    {
        Name: "Áo Lông Chồn",
        Accessories: "Áo khoác",
        Color: "Black",
        Size: "Large",
        Sale: 20,
        Time: "Last time",
        Published: 2018,
    },
    {
        Name: "Mũ Lưỡi Trai",
        Accessories: "Mũ",
        Color: "Red",
        Size: "Medium",
        Sale: 10,
        Time: "This month",
        Published: 2020,
    },
    {
        Name: "Quần Thể Thao",
        Accessories: "Quần",
        Color: "Black",
        Size: "Small",
        Sale: 20,
        Time: "This week",
        Published: 2023,
    },
    {
        Name: "Quần Nữ Cá Tính",
        Accessories: "Quần",
        Color: "Red",
        Size: "Small",
        Sale: 20,
        Time: "This week",
        Published: 2023,
    },

    {
        Name: "Quần Dài Thời Trang",
        Accessories: "Quần",
        Color: "Black",
        Size: "Medium",
        Sale: 15,
        Time: "This year",
        Published: 2022,
    },
    {
        Name: "Áo Ba Lỗ Thời Trang",
        Accessories: "Áo",
        Color: "Black",
        Size: "Large",
        Sale: 22,
        Time: "Today",
        Published: 2023,
    },
    {
        Name: "Quần Đùi Thời Trang Nữ",
        Accessories: "Quần",
        Color: "Red",
        Size: "Medium",
        Sale: 25,
        Time: "Today",
        Published: 2023,
    },
    {
        Name: "Nón Tai Bèo Thời Trang",
        Accessories: "Nón",
        Color: "Blue",
        Size: "Large",
        Sale: 30,
        Time: "This year",
        Published: 2023,
    },
    {
        Name: "Áo Thun Boxy Thời Trang Nam",
        Accessories: "Áo",
        Color: "Blue",
        Size: "Medium",
        Sale: 49,
        Time: "Last time",
        Published: 2019,
    },
    {
        Name: "Quần Thể Thao Thời Trang Nam",
        Accessories: "Quần",
        Color: "Green",
        Size: "Large",
        Sale: 20,
        Time: "This week",
        Published: 2019,
    },
];

export { data, optNames, accessories, colors, size, sale, time, published };
