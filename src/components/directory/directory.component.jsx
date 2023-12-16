//Map all categories
import DirectoryItem from "../directory-item/directory-item.component";

import {DirectoryContainer} from './directory.styles.jsx';

const Directory = ({categories}) => {
  return[
    <DirectoryContainer key='DirectoryContainer'>
    {categories.map((category)=>(
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </DirectoryContainer>
  ]
}

export default Directory;