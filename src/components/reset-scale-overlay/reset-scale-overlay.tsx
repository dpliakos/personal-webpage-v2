'use client';

import { resetScale } from "@/components/utils/reset-scale/utils";
import "./reset-scale-overlay.css";

export const ResetScaleOverlay = () => {
  return (
    <div className="reset-scale-overlay" onClick={() => resetScale(false) }></div>
  )
}
