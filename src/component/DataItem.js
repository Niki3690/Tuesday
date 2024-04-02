// import React, { useEffect, useState } from "react";
// import { Data } from "./Data";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "./STORE/CartSlice";
// import { Link } from "react-router-dom";

// const DataItem = () => {
//   const name = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   let [sold, setSold] = useState(Data);
//   let [search, setSearch] = useState("");

//   let FUN = (num) => {
//     let number = Data.filter((nn) => nn.category === num);
//     setSold(number);
//   };

//   let SELECT = (e) => {
//     setSearch(e.target.value);
//     let num = Data.filter((itemss) =>
//       itemss.title.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setSold(num);
//   };

//   const ADD = (item) => {
//     const items = name.find((cartItem) => cartItem.id === item.id);
//     if (!items) {
//       dispatch(add(item));
//     }
//   };
// useEffect(()=>{
//   localStorage.setItem('cart',JSON.stringify(name))
// },[name])

//   return (
//     <>
//       <div
//         style={{
//           textAlign: "center",
//           justifyContent: "center",
//           marginTop: 25,
//           display: "flex",
//           gap: 5,
//         }}
//       >
//         <button onClick={() => setSold(Data)}>ALL</button>
//         <button onClick={() => FUN("smartphones")}>smartphones</button>
//         <button onClick={() => FUN("laptops")}>laptops</button>
//         <button onClick={() => FUN("fragrances")}>fragrances</button>
//         <button onClick={() => FUN("skincare")}>skincare</button>
//         <button onClick={() => FUN("groceries")}>groceries</button>
//         <button onClick={() => FUN("home-decoration")}>home-decoration</button>
//         <input
//           type="text"
//           placeholder="search here.."
//           value={search}
//           onChange={SELECT}
//         />
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "260px 260px 260px 260px",
//           textAlign: "center",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 15,
//           marginTop: 25,
//           padding: "3px 15px",
//         }}
//       >
//         {sold.map((item) => (
//           <div key={item.id}>
//             <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//               <div className="card" style={{ width: "18rem" }}>
//                 <h3 className="card-title">{item.id}</h3>
//                 <Link to={`item/${item.id}`} style={{ textDecoration: "none" }}>
//                   <img
//                     src={item.thumbnail}
//                     className="card-img-top"
//                     alt="..."
//                     style={{ height: 150, width: 255 }}
//                   />
//                 </Link>
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ height: 70 }}>
//                     {item.title}
//                   </h5>
//                   <h5 className="card-text">{item.price}</h5>
//                   <button className="btn btn-primary" onClick={() => ADD(item)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default DataItem;

import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./STORE/CartSlice";
import { Link } from "react-router-dom";
import Pagination from "../component/PAGES/Pagination";

const DataItem = () => {
  const name = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [sold, setSold] = useState(Data);
  const [search, setSearch] = useState("");

  
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sold.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const FUN = (num) => {
    let number = Data.filter((nn) => nn.category === num);
    setSold(number);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const SELECT = (e) => {
    setSearch(e.target.value);
    let num = Data.filter((itemss) =>
      itemss.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSold(num);
    setCurrentPage(1); // Reset to first page when searching
  };

  const ADD = (item) => {
    const items = name.find((cartItem) => cartItem.id === item.id);
    if (!items) {
      dispatch(add(item));
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(name));
  }, [name]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: 25,
          display: "flex",
          gap: 5,
        }}
      >
        <button onClick={() => setSold(Data)}>ALL</button>
        <button onClick={() => FUN("smartphones")}>smartphones</button>
        <button onClick={() => FUN("laptops")}>laptops</button>
        <button onClick={() => FUN("fragrances")}>fragrances</button>
        <button onClick={() => FUN("skincare")}>skincare</button>
        <button onClick={() => FUN("groceries")}>groceries</button>
        <button onClick={() => FUN("home-decoration")}>home-decoration</button>
        <input
          type="text"
          placeholder="search here.."
          value={search}
          onChange={SELECT}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 260px 260px 260px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 25,
          padding: "3px 15px",
        }}
      >
        {currentItems.map((item) => (
          <div key={item.id}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div className="card" style={{ width: "18rem" }}>
                <h3 className="card-title">{item.id}</h3>
                <Link to={`item/${item.id}`} style={{ textDecoration: "none" }}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="..."
                    style={{ height: 150, width: 255 }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ height: 70 }}>
                    {item.title}
                  </h5>
                  <h5 className="card-text">{item.price}</h5>
                  <button className="btn btn-primary" onClick={() => ADD(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={sold.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
export default DataItem;
