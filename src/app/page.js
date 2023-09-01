"use client";
import React, { useState, useEffect } from "react";
import Gallary from "./pages/Gallary/page";
import CorgiLoader from "./CorgiUI/CorgiLoader";

export default function Home() {

  return (
    <CorgiLoader>
      <Gallary></Gallary>
    </CorgiLoader>
  );
}
