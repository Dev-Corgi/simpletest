// "use client";
// import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
// import ImageComponent from "./imageComponent";
// import CorgiDiv from "@/app/CorgiUI/Components/Div/CorgiDiv";
// import React, { useState, useEffect } from "react";
// import MovingMotionRelative from "@/app/CorgiUI/Motion/MovingMotionRelative";
// import RotationMotionTest from "@/app/CorgiUI/Motion/RotationMotionTest";
// import OpacityMotionAbsolute from "@/app/CorgiUI/Motion/OpacityMotionAbsolute";
// import GuageController from "@/app/CorgiUI/Controller/GuageController";
// import CorgiImg from "@/app/CorgiUI/Components/Div/CorgiImg";

// const ScrollPage = () => {
//   const [scrollController, setScrollController] = useState(
//     new ScrollControllerGlobal(1)
//   );

//   return (
//     <div className="relative bg-white w-full h-[100vh] text-left text-[1.19rem] text-white font-pretendardRegular overflow-hidden">
//       <CorgiDiv
//         className="absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-[#1B1B1B] h-[600rem]"
//         motions={[
//           {
//             input: scrollController,
//             motion: new MovingMotionRelative(
//               0,
//               -1200,
//               "px",
//               0,
//               0.8,
//               [0.39, 0.575, 0.565, 1]
//             ),
//             condition: (state, value) => {
//               return state > 0;
//             },
//           },
//           {
//             input: scrollController,
//             motion: new MovingMotionRelative(
//               0,
//               1200,
//               "px",
//               0,
//               1,
//               [0.39, 0.575, 0.565, 1]
//             ),
//             condition: (state, value) => {
//               return state < 0;
//             },
//           }
//         ]}
//       >
//         <div className="absolute w-[28.06%] top-[1300px] right-[16%] left-[55.94%] flex flex-col items-start justify-start gap-[1441px]"
//         >
//           <ImageComponent imgsrc="/images/testimage1.jpg" content={"교내 동아리 교육담당, 지식을 나누며 갈고닦자"}/>
//           <ImageComponent imgsrc="/images/testimage3.jpg" content={"포트폴리오, 나의 노력들을 기록해두자"}/>
//         </div>
//         <div className="absolute w-[28.06%] top-[100px] right-[56%] left-[15.94%] flex flex-col items-center justify-start gap-[1441px]"
//                   >
//           <ImageComponent imgsrc="/images/testimage2.jpg" content={"공모전 출전, 다른학생들과의 차이를 경험하자"}/>
//           <ImageComponent imgsrc="/images/testimage4.jpg"content={"웹클론 스터디, 실전 기술들도 놓치지 말고 익히자"} />
//         </div>
//       </CorgiDiv>
//     </div>
//   );
// };

// export default ScrollPage;
