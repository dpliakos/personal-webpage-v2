'use client';

import React from "react";
import {resetScale} from "@/components/utils/reset-scale/utils";

export const ResetScale = () => {

  React.useEffect(() => {
    resetScale();
  }, []);

  return (<></>);
}
