import React, { useState } from 'react';
import { Modal, Button } from 'skylight-react';

const ModalProps = () => {
    const [show, setShow] = useState(false);

    return (  
        <div>
            <Button label="open modal" handleClick={() => setShow(!show)}/>
            <Modal open={show}>
                <h3>YEHAW!</h3>
            </Modal>
        </div>
    );
}
 
export default ModalProps; 