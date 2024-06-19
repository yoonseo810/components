import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);
  const [selectionTwo, setSelectionTwo] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const handleSelectTwo = (option) => {
    setSelectionTwo(option);
  };

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  const optionsTwo = [
    {
      label: 'React',
      value: 'react',
    },
    {
      label: 'VueJS',
      value: 'vuejs',
    },
    {
      label: 'Angular',
      value: 'angular',
    },
  ];
  return (
    <div className="flex gap-4 m-2">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown
        options={optionsTwo}
        value={selectionTwo}
        onChange={handleSelectTwo}
      />
    </div>
  );
};

export default DropdownPage;
