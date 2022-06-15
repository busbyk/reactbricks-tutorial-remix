import React from 'react'
import {types, Text, RichText, Image} from 'react-bricks/frontend'

interface ThumbnailProps {
  hasShadow: boolean
  bgColor: types.IColor
}

const Thumbnail: types.Brick<ThumbnailProps> = ({
  hasShadow,
  bgColor,
  ...rest
}) => {
  return (
    <div
      className={`my-6 p-6 text-center border rounded-lg ${
        hasShadow ? 'shadow-xl' : ''
      } ${bgColor?.className}`}
      {...rest}
    >
      <Image
        propName='image'
        alt='Fallback alt tag'
        maxWidth={200}
        imageClassName='mb-6'
      />
      <Text
        propName='title'
        renderBlock={({children}) => (
          <h1 className='text-2xl font-bold'>{children}</h1>
        )}
        placeholder='Type a title...'
      />
      <RichText
        propName='description'
        renderBlock={({children}) => (
          <p className='text-lg text-gray-500'>{children}</p>
        )}
        placeholder='Type a description'
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
        ]}
        renderHighlight={({children}) => (
          <span className='px-1 rounded bg-blue-200 text-blue-900'>
            {children}
          </span>
        )}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({
    title: 'An Epic Title',
    description: 'An Epic-er description',
    image: {
      src: 'https://images.reactbricks.com/original/254c2471-4b65-493d-a17c-826ad70a0040.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/254c2471-4b65-493d-a17c-826ad70a0040.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/254c2471-4b65-493d-a17c-826ad70a0040-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/254c2471-4b65-493d-a17c-826ad70a0040-300.jpg 300w,\nhttps://images.reactbricks.com/src_set/254c2471-4b65-493d-a17c-826ad70a0040-200.jpg 200w,\nhttps://images.reactbricks.com/src_set/254c2471-4b65-493d-a17c-826ad70a0040-100.jpg 100w,\nhttps://images.reactbricks.com/src_set/254c2471-4b65-493d-a17c-826ad70a0040-50.jpg 50w',
      width: 1014,
      height: 1014,
      alt: 'Fallback alt tag',
      seoName: '',
    },
    hasShadow: true,
    bgColor: {color: '#ffffff', className: 'bg-white'},
  }),
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bgColor',
      label: 'Background Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: 'White',
            value: {color: '#ffffff', className: 'bg-white'},
          },
          {
            label: 'Light blue',
            value: {color: '#eff6ff', className: 'bg-blue-50'},
          },
        ],
      },
    },
  ],
  hideFromAddMenu: true,
}

export default Thumbnail
