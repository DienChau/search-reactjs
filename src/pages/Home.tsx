/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import { SelectComponent } from "../components/SelectComponents";
import {
    data,
    accessories,
    colors,
    sales,
    published,
    sizes,
    time,
    productData,
} from "../constants";

export interface optionData {
    accessories: string;
    colors: string;
    sizes: string;
    sales: number;
    time: string;
    published: number;
}

export default function Home() {
    const [productData, setProductData] = useState(data);
    const [filteredData, setFilteredData] = useState<productData[]>([]);

    const [myOpts, setMyOpts] = useState<optionData>({
        accessories: "",
        colors: "",
        sizes: "",
        sales: 0,
        time: "",
        published: 0,
    });

    const handleSelectData = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMyOpts({
            ...myOpts,
            [event.target.name]: event.target.value,
        });
    };
    const handleDataSelect = () => {
        const curentData = productData.filter((item) => {
            // Lọc dữ liệu theo các trường myOpts tương ứng
            return (
                (myOpts.accessories === "" ||
                    item.Accessories.toLocaleLowerCase() ===
                        myOpts.accessories.toLocaleLowerCase()) &&
                (myOpts.colors === "" ||
                    item.Color.toLocaleLowerCase() ===
                        myOpts.colors.toLocaleLowerCase()) &&
                (myOpts.sizes === "" ||
                    item.Size.toLocaleLowerCase() ===
                        myOpts.sizes.toLocaleLowerCase()) &&
                (myOpts.sales === 0 || item.Sale === +myOpts.sales) &&
                (myOpts.time === "" ||
                    item.Time.toLocaleLowerCase() ===
                        myOpts.time.toLocaleLowerCase()) &&
                (myOpts.time === "" || item.Published === +myOpts.published)
            );
        });
        setFilteredData(curentData);
    };

    const handleResetData = () => {
        console.log("click");
        setMyOpts({
            accessories: "",
            colors: "",
            sizes: "",
            sales: 0,
            time: "",
            published: 0,
        });
        console.log(myOpts);
    };

    return (
        <div className="flex flex-col items-center justify-center my-2">
            <div className="w-[50%] flex flex-col gap-3">
                <div className="flex justify-start items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type Keywords"
                        className="input input-bordered input-accent w-full max-w-xs"
                    />
                    <button type="button" className="btn btn-primary">
                        {""}
                        <Icon icon="material-symbols:search" />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <h2>ADVANCED SEARCH</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <SelectComponent
                            opts={accessories}
                            title="accessories"
                            onChange={handleSelectData}
                        />
                        <SelectComponent
                            opts={colors}
                            title="colors"
                            onChange={handleSelectData}
                        />
                        <SelectComponent
                            opts={sizes}
                            title="sizes"
                            onChange={handleSelectData}
                        />
                        <SelectComponent
                            opts={sales}
                            title="sales"
                            onChange={handleSelectData}
                        />
                        <SelectComponent
                            opts={time}
                            title="time"
                            onChange={handleSelectData}
                        />
                        <SelectComponent
                            opts={published}
                            title="published"
                            onChange={handleSelectData}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <h4>108 results</h4>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={handleResetData}
                            >
                                RESET
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline btn-primary"
                                onClick={handleDataSelect}
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[50%] flex flex-col gap-3 mt-3">
                {filteredData.length > 0 ? (
                    // Nếu có dữ liệu lọc, hiển thị filteredData
                    filteredData.map((product, index) => (
                        // Render các thành phần của item ở đây
                        <div
                            className="grid grid-cols-5 gap-3 p-2 border-2"
                            key={index}
                        >
                            <h2 className="">{product.Accessories}</h2>
                            <h2 className="">{product.Color}</h2>
                            <h2 className="">{product.Name}</h2>
                            <h2 className="">{product.Published}</h2>
                            <h2 className="">{product.Sale}</h2>
                        </div>
                    ))
                ) : // Nếu không có dữ liệu lọc, kiểm tra để xem có phải người dùng đang filter hay không
                filteredData.length === 0 ? (
                    // Nếu đang filter, nhưng không có kết quả, hiển thị thông báo
                    <h2>Sorry không tìm thấy</h2>
                ) : (
                    // Nếu không có filter, hiển thị productData
                    productData.map((product, index) => (
                        // Render các thành phần của item ở đây
                        <div
                            className="grid grid-cols-5 gap-3 p-2 border-2"
                            key={index}
                        >
                            <h2 className="">{product.Accessories}</h2>
                            <h2 className="">{product.Color}</h2>
                            <h2 className="">{product.Name}</h2>
                            <h2 className="">{product.Published}</h2>
                            <h2 className="">{product.Sale}</h2>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
