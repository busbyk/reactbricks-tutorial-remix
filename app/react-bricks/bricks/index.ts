import {types} from 'react-bricks/frontend'

// React Bricks UI website bricks
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'

// Example brick
import HeroUnit from './HeroUnit'
import Thumbnail from './Thumbnail'
import Gallery from './Gallery'

const bricks: types.Brick<any>[] = [
  ...website,
  ...blog,
  HeroUnit,
  Thumbnail,
  Gallery,
]

export default bricks
