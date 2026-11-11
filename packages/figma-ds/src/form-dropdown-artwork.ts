// Exact returned source vectors for form Dropdown840:82414.
const a={
 imgLeft:new URL("./assets/dropdown/form-imgLeft.svg",import.meta.url).href,
 imgRight:new URL("./assets/dropdown/form-imgRight.svg",import.meta.url).href,
 imgTopLine:new URL("./assets/dropdown/form-imgTopLine.svg",import.meta.url).href,
 imgBottomLine:new URL("./assets/dropdown/form-imgBottomLine.svg",import.meta.url).href,
 imgIconsArrows:new URL("./assets/dropdown/form-imgIconsArrows.svg",import.meta.url).href,
 imgLeft1:new URL("./assets/dropdown/form-imgLeft1.svg",import.meta.url).href,
 imgRight1:new URL("./assets/dropdown/form-imgRight1.svg",import.meta.url).href,
 imgTopLine1:new URL("./assets/dropdown/form-imgTopLine1.svg",import.meta.url).href,
 imgBottomLine1:new URL("./assets/dropdown/form-imgBottomLine1.svg",import.meta.url).href,
 imgLeft2:new URL("./assets/dropdown/form-imgLeft2.svg",import.meta.url).href,
 imgRight2:new URL("./assets/dropdown/form-imgRight2.svg",import.meta.url).href,
 imgTopLine2:new URL("./assets/dropdown/form-imgTopLine2.svg",import.meta.url).href,
 imgBottomLine2:new URL("./assets/dropdown/form-imgBottomLine2.svg",import.meta.url).href,
 imgIconsArrows1:new URL("./assets/dropdown/form-imgIconsArrows1.svg",import.meta.url).href,
 imgTopLine3:new URL("./assets/dropdown/form-imgTopLine3.svg",import.meta.url).href,
 imgIconsArrows2:new URL("./assets/dropdown/form-imgIconsArrows2.svg",import.meta.url).href,
 imgTopLine4:new URL("./assets/dropdown/form-imgTopLine4.svg",import.meta.url).href,
};
const make=(left:string,right:string,top:string,bottom:string,arrow:string)=>({Left:left,Right:right,'top line':top,'bottom line':bottom,'Icons/Arrows':arrow});
export const formDropdownArtwork={
 '1715:79530':make(a.imgLeft,a.imgRight,a.imgTopLine,a.imgBottomLine,a.imgIconsArrows),
 '1715:79540':make(a.imgLeft1,a.imgRight1,a.imgTopLine1,a.imgBottomLine1,a.imgIconsArrows),
 '1715:79550':make(a.imgLeft2,a.imgRight2,a.imgTopLine2,a.imgBottomLine2,a.imgIconsArrows1),
 '1715:79561':make(a.imgLeft2,a.imgRight2,a.imgTopLine2,a.imgBottomLine2,a.imgIconsArrows1),
 '1715:79573':make(a.imgLeft,a.imgRight,a.imgTopLine3,a.imgBottomLine,a.imgIconsArrows2),
 '1715:79585':make(a.imgLeft1,a.imgRight1,a.imgTopLine4,a.imgBottomLine1,a.imgIconsArrows2),
} as const;
export const formDropdownSourceIds={'1715:79530':'840:82413','1715:79540':'942:82524','1715:79550':'840:82415','1715:79561':'920:82438','1715:79573':'931:82487','1715:79585':'942:82536'} as const;
