// import React from "react";
// import { useParams } from "react-router-dom";
// import { Data } from "./Data";

// const Single = () => {
//   let { id } = useParams();

//   let item = Data.find((item) => item.id == id);

//   return (
//     <div>
//       <div
//         style={{
//           width: "100%",

//           alignItems: "center",
//           justifyContent: "center",
//           gap: 15,
//           marginTop: 25,
//         }}
//       >
//         <div>
//           <div className="card" style={{ width: "50%", margin: "auto" }}>
//             <h3 className="card-title" style={{ textAlign: "center" }}>
//               {item.id}
//             </h3>
//             <img
//               src={item.thumbnail}
//               class="card-img-top"
//               alt="..."
//               style={{ height: 250, width: "100%" }}
//             />
//             <div className="card-body">
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Title:
//                 </span>
//                 {item.title}
//               </h6>
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Description:
//                 </span>
//                 {item.description.toUpperCase()}
//               </h6>
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   DiscountPercentage:
//                 </span>
//                 {item.discountPercentage}%
//               </h6>
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Category:
//                 </span>
//                 {item.category}
//               </h6>{" "}
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Brand:
//                 </span>
//                 {item.brand}
//               </h6>
//               <h6 className="card-title">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Title:
//                 </span>
//                 {item.title}
//               </h6>
//               <h6 className="card-text">
//                 <span
//                   style={{
//                     color: "black",
//                     fontWeight: 700,
//                     marginRight: 5,
//                     fontSize: 22,
//                   }}
//                 >
//                   Price:
//                 </span>
//                 {item.price}
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;

import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";

const Single = () => {
  let { id } = useParams();

  let item = Data.find((item) => item.id == id);

  return (
    <div>
      <div
        style={{
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 25,
        }}
      >
        <div>
          <div className="card" style={{ width: "50%", margin: "auto" }}>
            <h3 className="card-title" style={{ textAlign: "center" }}>
              {item.id}
            </h3>
            <img
              src={item.thumbnail}
              class="card-img-top"
              alt="..."
              style={{ height: 250, width: "100%" }}
            />
            <div className="card-body">
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Title:
                </span>
                {item.title}
              </h6>
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Description:
                </span>
                {item.description.toUpperCase()}
              </h6>
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  DiscountPercentage:
                </span>
                {item.discountPercentage}%
              </h6>
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Category:
                </span>
                {item.category}
              </h6>{" "}
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Brand:
                </span>
                {item.brand}
              </h6>
              <h6 className="card-title">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Title:
                </span>
                {item.title}
              </h6>
              <h6 className="card-text">
                <span
                  style={{
                    color: "black",
                    fontWeight: 700,
                    marginRight: 5,
                    fontSize: 22,
                  }}
                >
                  Price:
                </span>
                {item.price}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
