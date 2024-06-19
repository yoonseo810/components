import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
  const handleClick = () => {};

  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <Button danger onClick={handleClick}>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoCloudDownload />
          Bye
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          World
        </Button>
      </div>
      <div>
        <Button success>TEST</Button>
      </div>
      <div>
        <Button warning outline>
          Click me
        </Button>
      </div>
      <div>
        <Button>NOPE</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
