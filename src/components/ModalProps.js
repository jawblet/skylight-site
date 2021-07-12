import React, { useState } from 'react';
import { Modal, Button } from 'skylight-react';

const ModalProps = () => {
    const [show, setShow] = useState(false);

    return (  
        <div>
            <Button label="open modal" handleClick={() => setShow(!show)}/>
           {show && 
           <Modal>
                YEHAW!
            </Modal>}
        </div>
    );
}
 
export default ModalProps; 