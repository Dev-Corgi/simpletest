"use client";
import RotationMotion from "@/app/CorgiUI/Motion/RotationMotion";
import OpacityMotion from "@/app/CorgiUI/Motion/OpacityMotion";
import GuageController from "@/app/CorgiUI/Controller/GuageController";
import CorgiImg from "@/app/CorgiUI/Components/CorgiImg";
import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
import React, { useEffect, useState } from "react";
import CorgiDiv from "@/app/CorgiUI/Components/CorgiDiv";
import MovingMotion from "@/app/CorgiUI/Motion/MovingMotion";
const Gallary = () => {
  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal(0)
  );

  const [scrollGuage, setScrollGuage] = useState(
    new GuageController(scrollController, 0, 10)
  );

  return (
    <div className="relative bg-whitesmoke w-full h-[100vh] overflow-hidden text-right text-[0.94rem] text-black font-pretendard">
      <div className="absolute top-[calc(50%_-_335px)] left-[calc(50%_-_197px)] bg-[#0C151E] w-[24.56rem] h-[36.69rem] overflow-hidden" />

      <CorgiImg
        className="absolute top-[calc(50%_-_335px)] left-[calc(50%_-_197px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_1.png"
        motions={[
          {
            input: scrollController,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
          },
          {
            input: scrollController,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
          },
        ]}
      />

      <CorgiImg
        className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_2.png"
        motions={[
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 5;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 5;
            },
          },
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -10,
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 4;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1100,
              "px",
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 4;
            },
          },
        ]}
      />

      <CorgiImg
        className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_3.png"
        motions={[
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 6;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 6;
            },
          },
          {
            input: scrollGuage,
            motion: new RotationMotion(
              10,
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 5;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1100,
              "px",
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 5;
            },
          },
        ]}
      />

      <CorgiImg
        className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_4.png"
        motions={[
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 7;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 7;
            },
          },
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -10,
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 6;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1100,
              "px",
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 6;
            },
          },
        ]}
      />

      <CorgiImg
        className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_5.png"
        motions={[
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 8;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 8;
            },
          },
          {
            input: scrollGuage,
            motion: new RotationMotion(
              10,
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 7;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1100,
              "px",
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 7;
            },
          },
        ]}
      />

      <CorgiImg
        className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
        src="/images/img_gallarypic_6.png"
        motions={[
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -80,
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 9;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1000,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 9;
            },
          },
          {
            input: scrollGuage,
            motion: new RotationMotion(
              -10,
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 8;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              -300,
              -1100,
              "px",
              0.1,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition: (state, value) => {
              return value == 8;
            },
          },
        ]}
      />

      <div className="absolute top-[calc(50%_-_89px)] right-[7.19rem] font-pretendardSemiBold text-[2.5rem]">
        <span>20</span>
        <span className="text-[#ECECEC]">08</span>
        <span>년</span>
      </div>
      <div className="absolute top-[calc(50%_-_75px)] right-[7.19rem] w-[8.44rem] h-[2rem] overflow-hidden text-center text-[2.5rem]">
        <CorgiDiv className="absolute top-[calc(50%_-_15px)] left-[4.69rem] flex flex-col items-start justify-start gap-[0.31rem]"
        motions={[
            {
              input: scrollGuage,
              motion: new MovingMotion(
                0,
                -35*7,
                "px",
                0,
                1,
                [0.785, 0.135, 0.15, 0.86]
              ),
              condition : (state,value) => {return value == 4}
            },
            {
                input: scrollGuage,
                motion: new MovingMotion(
                  0,
                  -35*6,
                  "px",
                  0,
                  1,
                  [0.785, 0.135, 0.15, 0.86]
                ),
                condition : (state,value) => {return value == 5}
              },
          ]}>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            8
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            9
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            0
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            1
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            2
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            3
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            4
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            5
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            6
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            7
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            8
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            9
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            0
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            1
          </div>
        </CorgiDiv>
        <CorgiDiv className="absolute top-[calc(50%_-_15px)] left-[3.09rem] flex flex-col items-start justify-start gap-[0.31rem]"
                motions={[
                    {
                      input: scrollGuage,
                      motion: new MovingMotion(
                        0,
                        -35,
                        "px",
                        0,
                        1,
                        [0.785, 0.135, 0.15, 0.86]
                      ),
                      condition : (state,value) => {return value == 4}
                    },
                    {
                        input: scrollGuage,
                        motion: new MovingMotion(
                          0,
                          -35,
                          "px",
                          0,
                          1,
                          [0.785, 0.135, 0.15, 0.86]
                        ),
                        condition : (state,value) => {return value == 5}
                      },
                  ]}>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            0
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            1
          </div>
          <div className="relative font-pretendardSemiBold flex items-center justify-center w-[1.63rem] h-[1.88rem] shrink-0">
            2
          </div>
        </CorgiDiv>
      </div>

      <div className="absolute top-[18.44rem] right-[6.5rem] w-[7rem] h-[0.75rem] text-left">
        <div className="absolute top-[0rem] left-[0rem] font-pretendardSemiBold">
          2008
        </div>
        <div className="absolute top-[0rem] left-[4.5rem] font-pretendardSemiBold text-[#B0B0B0]">
          2021
        </div>
        <div className="absolute top-[1rem] left-[2.7rem] box-border w-[1.36rem] h-[0.04rem] border-t-[0.7px] border-solid border-[#B0B0B0]" />
        <div className="absolute top-[0rem] left-[-3.2rem] font-pretendardSemiBold">
          SINCE.
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_9px)] right-[7.19rem] tracking-[0.04em]  text-[#6E7379] font-pretendardSemiBold">
        프론트엔드 엔지니어를 꿈꾸게 될때까지
      </div>
      <div className="absolute top-[calc(50%_+_49px)] right-[7.19rem] text-[1rem] tracking-[0.05em]  text-[#6E7379] font-pretendardSemiBold">
        SCROLL
      </div>
      <CorgiDiv className="absolute top-[19.19rem] left-[5.63rem] w-[23.56rem] h-[15rem] text-left text-[6.25rem]  font-bookkmyeongjo overflow-clip"
       motions={[
        {
          input: scrollGuage,
          motion: new OpacityMotion(
            -1,
            0,
            1,
            [0.785, 0.135, 0.15, 0.86]
          ),
          condition : (state,value) => {return value == 4}
        },
        {
            input: scrollGuage,
            motion: new MovingMotion(
              30,
              0,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition : (state,value) => {return value == 4}
          },
      ]}
      >
        <b className="absolute top-[calc(50%_-_120px)] right-[0rem] tracking-[-0.02em] leading-[7.5rem]"
        >
          <p className="m-0">{"미술에\n좌절하다"}</p>
        </b>
      </CorgiDiv>

      <CorgiDiv className="absolute top-[19.19rem] left-[4rem] w-[23.56rem] h-[15rem] text-left text-[6.25rem]  font-bookkmyeongjo overflow-clip opacity-0"
       motions={[
        {
          input: scrollGuage,
          motion: new OpacityMotion(
            -1,
            0,
            1,
            [0.785, 0.135, 0.15, 0.86]
          ),
          condition : (state,value) => {return value == 5}
        },
        {
            input: scrollGuage,
            motion: new MovingMotion(
              30,
              0,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition : (state,value) => {return value == 5}
          },
          {
            input: scrollGuage,
            motion: new OpacityMotion(
              1,
              0.5,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition : (state,value) => {return value == 4}
          },
          {
              input: scrollGuage,
              motion: new MovingMotion(
                30,
                0,
                "px",
                0.5,
                1,
                [0.785, 0.135, 0.15, 0.86]
              ),
              condition : (state,value) => {return value == 4}
            }
      ]}
      >
        <b className="absolute top-[calc(50%_-_120px)] right-[0rem] tracking-[-0.02em] leading-[7.5rem]"
        >
          <p className="m-0">{"그래픽을\n만나다"}</p>
        </b>
      </CorgiDiv>

      <CorgiDiv className="absolute top-[19.19rem] left-[4rem] w-[23.56rem] h-[15rem] text-left text-[6.25rem]  font-bookkmyeongjo overflow-clip opacity-0"
       motions={[
        {
          input: scrollGuage,
          motion: new OpacityMotion(
            -1,
            0,
            1,
            [0.785, 0.135, 0.15, 0.86]
          ),
          condition : (state,value) => {return value == 6}
        },
        {
            input: scrollGuage,
            motion: new MovingMotion(
              30,
              0,
              "px",
              0,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition : (state,value) => {return value == 6}
          },
          {
            input: scrollGuage,
            motion: new OpacityMotion(
              1,
              0.5,
              1,
              [0.785, 0.135, 0.15, 0.86]
            ),
            condition : (state,value) => {return value == 5}
          },
          {
              input: scrollGuage,
              motion: new MovingMotion(
                30,
                0,
                "px",
                0.5,
                1,
                [0.785, 0.135, 0.15, 0.86]
              ),
              condition : (state,value) => {return value == 5}
            }
      ]}
      >
        <b className="absolute top-[calc(50%_-_120px)] right-[0rem] tracking-[-0.02em] leading-[7.5rem]"
        >
          <p className="m-0">{"어떻게\n살것인가"}</p>
        </b>
      </CorgiDiv>
    </div>
  );
};

export default Gallary;
