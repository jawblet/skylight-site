import React, { Suspense, lazy } from 'react';
import VariantMenu from './VariantMenu';
import { Flex, Grid } from 'skylight-react';
import ComponentInfo from './ComponentInfo';

const getComponent = component => 
    lazy(() => 
        import(`../../components/${component}`)
        .catch(() => 
            import('../../components/Error') 
        )
    );

const Demo = ({ component }) => {
    const Example = getComponent(component);
    return (
        <Suspense fallback={<p>...</p>}>
            <Example/>
        </Suspense> 
    ); 
}

const ComponentDetails = ({ object }) => {
    return ( 
        <Flex column gap={1.5}>
            <Grid columns="5fr 1fr">
            <Flex center middle className="component__demo">
                <Demo component={object.component}/>
            </Flex>
                {object.variants &&
                    <VariantMenu items={object.variants}/>}
            </Grid>
                <p>{object.description}</p>
            <ComponentInfo label={object.label}/>
     </Flex>
    );
}
 
export default ComponentDetails;