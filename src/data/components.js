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
    description: 'This dropdown is the base of menus, search results, notification lists, and other drawers absolutely positioned above other content.',
    variants: [{label: 'Flat', path: '#flat'}, {label: 'Shadow', path:'#shadow'}],
  }, 
{ 
  label: 'Menu and MenuItem',
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
  variants: [ 
    {label: 'Default', path:'#default'},
    {label: 'Call to action', path:'#cta'}] 
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
  label: 'Button Bar',
  path: 'buttonbar',
  component: 'ButtonBarProps',
  layout: Component,
  description: '',
  variants: [ 
    {label: 'Row', path:'#row'},
    {label: 'Column', path:'#column'}] 
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
  label: 'Inputs and Textarea',
  path: 'inputs',
  layout: Multicomponent,
  sections: [
    {
      label: 'Input',
      component: 'InputProps',
      variants: [
        {label: 'Default', path:'#default'}, 
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
},
{
  label: 'Tag',
  path: 'tag',
  component: 'TagProps',
  variants: [
    {label: 'Default', path:'#default'},
    {label: 'Chip', path:'#chip'}
  ],
  layout: Component,
},
{
  label: 'Accordion menu',
  path: 'accordion',
  component: 'AccordionProps',
  layout: Component,
},
{
  label: 'Banner',
  path: 'banner',
  description: "A banner component for immediate feedback that times out after five seconds by default.",
  variants: [
    {label: 'Info', path:'#info'},
    {label: 'Error', path:'#error'},
    {label: 'Success', path:'#success'}
  ],
  component: 'BannerProps',
  layout: Component,
},
{
  label: 'Checkbox',
  path: 'checkbox',
  component: 'CheckboxProps',
  layout: Component
},
{
  label: 'Modal',
  path: 'modal',
  component: 'ModalProps',
  layout: Component
}
];

export const UTILS = [
  {
    label: 'Flex',
    path: 'flex',
    component: 'FlexProps',
    layout: Component,
  },
  {
    label: 'Grid',
    path: 'grid',
    component: 'GridProps',
    layout: Component,
  }
]

export const CUSTOM = [
  {
    label: "Styles",
    path: "styles"
  },
  {
    label: "Useful",
    path: "useful"
  }
]

