import React from 'react';
import { Tag, Flex } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const TagProps = () => {
    const chip = useLocation().hash === "#chip";

    return (
        <Flex gap={1}>
            <Tag chip={chip}>
                Skylight
            </Tag>
            <Tag kind="highlight" chip={chip}>
                Sunlight
            </Tag>
            <Tag kind="lowlight" chip={chip}>
                Artificial light
            </Tag>
            <Tag kind="dark" chip={chip}>
                No light
            </Tag>
        </Flex>
    );
}
 
export default TagProps;