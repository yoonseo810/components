import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      label: 'Test 1',
      content: 'Content for test 1',
    },
    {
      label: 'Test 2',
      content: 'Content for test 2',
    },
    {
      label: 'Test 3',
      content: 'Content for test 3',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
