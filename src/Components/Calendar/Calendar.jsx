import { Calendar } from 'primereact/calendar';

import React, { useState } from "react";

export default function BasicDemo() {
  const [date, setDate] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar value={date} onChange={(e) => setDate(e.value)} />
    </div>
  )
}
