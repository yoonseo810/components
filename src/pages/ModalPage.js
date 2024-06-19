import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Modal demo. This is a sample text to be rendered inside the modal</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lectus
        sodales dolor condimentum volutpat. Nunc vitae feugiat mauris, et
        sagittis lorem. Nullam pharetra orci a interdum tempus. Quisque et
        pellentesque justo. Aliquam egestas, metus eget dignissim volutpat,
        justo ligula volutpat odio, vel ultricies turpis magna et risus. Vivamus
        non ante nulla. Cras hendrerit lectus quam, eu posuere turpis posuere
        ornare. In varius dui quis finibus feugiat. Curabitur finibus eget
        mauris pretium faucibus. Pellentesque felis ante, placerat non arcu a,
        consectetur bibendum urna.
      </p>
    </div>
  );
};

export default ModalPage;
