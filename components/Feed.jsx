"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import ShortCuts from "./ShortCuts";
import Chart from "./Chart";
import CreditCard from "./CreditCards";
const PromptCardList = () => {
  return (
    <div className='mt-0 prompt_layout items-center '>
        <PromptCard/>
        <ShortCuts/>
        <Chart/>
        <CreditCard/>
    </div>
  );
};

const Feed = () => {
  return (
    <section className='feed'>
        <PromptCardList />
    </section>
  );
};

export default Feed;