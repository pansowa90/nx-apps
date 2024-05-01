import Select, { type SelectOption } from "@component/select/Select";
import { useState } from "react";

const options: Array<SelectOption> = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

export default function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(options[0]);
  const [multipleValue, setMultipleValue] = useState<Array<SelectOption>>([options[0]]);


  return (
    <div className="m-4">
      <Select options={options} value={singleValue} onChange={option => setSingleValue(option)} />
      <br />
      <Select multiple options={options} value={multipleValue} onChange={option => setMultipleValue(option)} />
    </div>
  );
}
