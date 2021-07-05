import React from 'react';
import { Tag, Flex } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const TagProps = () => {
    const chip = useLocation().hash === "#chip";

    return (
        <Flex gap={1}>
            <Tag chip={chip}>
                Facts
            </Tag>
            <Tag style="highlight" chip={chip}>
                Lies
            </Tag>
            <Tag style="lowlight" chip={chip}>
                Fiction
            </Tag>
            <Tag style="dark" chip={chip}>
                Fiction
            </Tag>
        </Flex>
    );
}
 
export default TagProps;