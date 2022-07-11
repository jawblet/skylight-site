import { DropdownY, Button, Fade, Blur, SlideX } from 'skylight-react';

export const ANIMATIONS = [
    {
      label: 'Fade',
      id: 'fade', 
      path: '/animations#fade', 
      component: <Fade/>
    },
    { 
      label: 'Rolldown',
      id: 'rolldown',
      path: '/animations#rolldown',
      component: <DropdownY/>, 
      layout: Component,
  },
  { 
    label: 'Slide offscreen',
    id: 'slide',
    path: '/animations#slide',
    component: <SlideX/>, 
    layout: Component,
  },
{ 
  label: 'Blur',
  id: 'blur',
  path: '/animations#blur',
  component: <Blur/>, 
  layout: Component,
}
];