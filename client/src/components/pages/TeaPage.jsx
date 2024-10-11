import React, { useEffect, useState } from "react";

import TeaCard from "../ui/TeaCard";
import { Row } from "react-bootstrap";

//
export default function TeaPage() {
  //
  const [currentTea, setCurrentTea] = useState([]); // текущее состояние чаев,

  //
  const getTea = async () => {
    try {
      const res = await fetch("/api/tea"); // возвращает промис с полем status
      if (res.status === 200) {
        const teaFromDb = await res.json();
        setCurrentTea(teaFromDb);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //
  useEffect(() => {
    getTea();
  }, []);

  //
  return (
    <Row>
      {currentTea.map((el) => (
        <TeaCard key={el.id} tea={el} />
      ))}
    </Row>
  );
}
