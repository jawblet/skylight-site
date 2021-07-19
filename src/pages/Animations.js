import React, { useReducer } from 'react';
import { DropdownY, Button, Fade, Blur, SlideX, Flex } from 'skylight-react';

const Test = () => {
    return (
        <div style={{height:"5rem", width:"5rem", background:"var(--body)"}}>
        </div>
    )
}

const Animations = () => {

    const initialState = { 
        dropdown: true, 
        slide: true, 
        fade: true, 
        blur: true };

    function reducer(state, action) {
        switch (action.type) {
            case 'dropdown':
                return { ...state, dropdown: !state.dropdown };
            case 'slide':
                return { ...state, slide: !state.slide };
            case 'fade':
                return { ...state, fade: !state.fade };
            case 'blur':
                return { ...state, blur: !state.blur };
          default:
            throw new Error();
        }
      }

    const [state, dispatch] = useReducer(reducer, initialState);

    const ANIMATIONS = [
        {
        title: "DropdownY",
        dispatch: "dropdown",
        description: "Unroll components vertically.",
        children:  <DropdownY in={state.dropdown}>
                    <Test/>
                </DropdownY>
        }, 
        {
        title: "SlideX",
        dispatch: "slide",
        description: "Unroll components horizontally.",
        children: <SlideX in={state.slide}>
                    <Test/>
                </SlideX>
        }, 
        {
        title: "Fade",
        dispatch: "fade",
        description: "Fade in and out.",
        children: <Fade in={state.fade}>
                    <Test/>
                </Fade>
        }, 
        {
        title: "Blur",
        dispatch: "blur",
        description: "Blur in and out.",
        children: <Blur in={state.blur}>
                    <Test/>
                </Blur>
        }
    ]

    return (
    <div className="component">
        <h2 className="marBottomL">Animations</h2>
        {ANIMATIONS.map(el => {
           return (
           <Flex column left gap={1} className="marBottomL">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <div style={{height:"6rem"}}>
                    {el.children}
                </div>
                <Button label={`test ${el.title}`} 
                    handleClick={() => dispatch({type: el.dispatch })}/>
            </Flex>
            )
        })}
    </div>);
}
 
export default Animations;
