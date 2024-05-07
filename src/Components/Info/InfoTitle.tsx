import React from "react";

type Props = {
    title:string;
}
export  const InfoTitle: React.FC<Props> = ({title}) => {
  return(
      <h2>
          {title}
      </h2>
  )
}