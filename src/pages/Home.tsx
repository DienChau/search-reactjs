/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import { SelectComponent } from "../components/SelectComponents";
import {
  data,
  accessories,
  colors,
  sale,
  published,
  size,
  time,
  productData,
} from "../constants";

export interface optionData {
  accessories: string;
  colors: string;
  size: string;
  sale: number | string;
  time: string;
  published: number | string;
}

export default function Home() {
  const [productData, setProductData] = useState(data);
  const [filteredData, setFilteredData] = useState<productData[]>([]);

  const [myOpts, setMyOpts] = useState<optionData>({
    accessories: "",
    colors: "",
    size: "",
    sale: 0, // ""
    time: "",
    published: 0, // ""
  });
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredData(productData);
  }, []);

  const handleSelectData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMyOpts({
      ...myOpts,
      [event.target.name]: event.target.value,
    });
  };

  const handleFilterDataAdvanced = (data:productData[]) =>{
    return data.filter((item) => {
      // Lọc dữ liệu theo các trường myOpts tương ứng
      return (
        (myOpts.accessories === "" ||
          item.Accessories.toLocaleLowerCase() ===
            myOpts.accessories.toLocaleLowerCase()) &&
        (myOpts.colors === "" ||
          item.Color.toLocaleLowerCase() ===
            myOpts.colors.toLocaleLowerCase()) &&
        (myOpts.size === "" ||
          item.Size.toLocaleLowerCase() === myOpts.size.toLocaleLowerCase()) &&
        (myOpts.sale === 0 || item.Sale === +myOpts.sale) &&
        (myOpts.time === "" ||
          item.Time.toLocaleLowerCase() === myOpts.time.toLocaleLowerCase()) &&
        (myOpts.published === 0 || item.Published === +myOpts.published)
      );
    });
  }

  const handleDataSelect = () => {

    if(searchInput!==""){
      setFilteredData((prev) => 
        handleFilterDataAdvanced(prev)
    )

    } else {
      const currentData = handleFilterDataAdvanced(productData)
      setFilteredData(currentData);
    }
  };

  const handleResetData = () => {
    setMyOpts({
      accessories: "",
      colors: "",
      size: "",
      sale: 0,
      time: "",
      published: 0,
    });
    setFilteredData(productData);
    setSearchInput("")
  };

  function convertViToEn(str:string, toUpperCase = false) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return toUpperCase ? str.toUpperCase() : str;
  }

  const handleSearchInput = () => {
    const filteredSearchDataByName = filteredData.filter((el) => {
      //if no input the return the original
      if (searchInput === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        const newConvertSearchInput= convertViToEn(searchInput)
        const newConvertName = convertViToEn(el.Name)
        return newConvertName.toLowerCase().includes(newConvertSearchInput.trim().toLowerCase());
      }
    });
    setFilteredData(filteredSearchDataByName)
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center my-2">
      <div className="w-[50%] flex flex-col gap-3">
        <div className="flex justify-start items-center gap-2">
          <input
            type="text"
            placeholder="Type Keywords"
            value={searchInput}
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchInput();
            }}
          />
          <button
            onClick={handleSearchInput}
            type="button"
            className="btn btn-primary"
          >
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
              isSelected={myOpts.accessories} // ""
            />
            <SelectComponent
              opts={colors}
              title="colors"
              onChange={handleSelectData}
              isSelected={myOpts.colors}
            />
            <SelectComponent
              opts={size}
              title="size"
              onChange={handleSelectData}
              isSelected={myOpts.size} // 0
            />
            <SelectComponent
              opts={sale}
              title="sale"
              onChange={handleSelectData}
              isSelected={myOpts.sale}
            />
            <SelectComponent
              opts={time}
              title="time"
              onChange={handleSelectData}
              isSelected={myOpts.time}
            />
            <SelectComponent
              opts={published}
              title="published"
              onChange={handleSelectData}
              isSelected={myOpts.published}
            />
          </div>
          <div className="flex items-center justify-between">
            <h4>{filteredData.length} results</h4>
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
            <div className="grid grid-cols-6 gap-3 p-2 border-2" key={index}>
              <h2 className="">{product.Accessories}</h2>
              <h2 className="">{product.Color}</h2>
              <h2 className="">{product.Name}</h2>
              <h2 className="">{product.Time}</h2>
              <h2 className="">{product.Sale}</h2>
              <h2 className="">{product.Published}</h2>
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
            <div className="grid grid-cols-6 gap-3 p-2 border-2" key={index}>
              <h2 className="">{product.Accessories}</h2>
              <h2 className="">{product.Color}</h2>
              <h2 className="">{product.Name}</h2>
              <h2 className="">{product.Time}</h2>
              <h2 className="">{product.Sale}</h2>
              <h2 className="">{product.Published}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
