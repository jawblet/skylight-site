import { Component, Multicomponent } from '../pages/Component';
 
export const COMPONENTS = [
  { 
    label: 'Card',
    path: 'card',
    component: 'CardProps', 
    description: 'A very simple card that may wrap around static content.',
    layout: Component,
  },
  { 
    label: 'Drawer', 
    path: 'drawer', 
    component: 'DrawerProps', 
    layout: Component,
    description: 'This dropdown is the base of menus, search results, notification lists, and other drawers positioned above other content.',
    variants: [{label: 'Flat', path: '#flat'}, {label: 'Shadow', path:'#shadow'}],
  }, 
{ 
  label: 'Menu + MenuItem',
  path: 'menu',
  description: 'The building blocks of all menus.',
  layout: Multicomponent,
  sections: [
    {
      label: 'Menu',
      component: 'MenuProps', 
      description: 'List menu made up of MenuItem components.',
    },
    {
      label: 'MenuItem',
      component: 'MenuItemProps',
      description: ''
    }
  ],
},
{ 
  label: 'Button',
  path: 'button',
  component: 'ButtonProps',
  layout: Component,
  description: 'Yeah the main button',
  variants: [ {label: 'Call to action', path:'#cta'}] 
        }, 
  { 
  label: 'Icon Button',
  path: 'icon-button',
  component: 'IconButtonProps',
  layout: Component,
  variants: [
    {label: 'Primary', path:'#primary'}, 
    {label: 'Inline', path:'#inline'}, 
    {label: 'Warning', path:'#warning'} ]
},  
{
  label: 'Loader',
  path: 'loader',
  component: 'LoadingProps',
  layout: Component,
},
{ label: 'Toggle',
  path: 'toggle',
  component: 'ToggleProps',
  layout: Component,
},
{
  label: 'Inputs + Textarea',
  path: 'inputs',
  layout: Multicomponent,
  sections: [
    {
      label: 'Input',
      component: 'InputProps',
      description: 'All props on the input component also apply to the <Password/> and <Textarea/> components. Additional props for those components are listed beneath them.',
      variants: [
        {label: 'Placeholder', path:'#placeholder'}, 
        {label: 'Labeled', path:'#label'}, 
        {label: 'Failed', path:'#fail'}, 
        {label: 'Inline', path:'#inline'},
        {label: 'Disabled', path:'#disabled'}, 
      ] 
    },
    {
      label: 'Textarea',
      component: 'TextareaProps',
      description: 'Textarea for longer inputs. Uses the autosize library to resize on overflow.',
    }
  ]
},
{
  label: 'Paginate',
  path: 'paginate',
  component: 'PaginateProps',
  layout: Component,
}
];

/*
{ label: 'Panel',
  path: 'panel',
  component: 'ToggleProps',
  layout: Component,
},


*/