import React from "react";
import {GrapesjsReact} from 'grapesjs-react'
import "grapesjs/dist/css/grapes.min.css"

import 'grapesjs-preset-webpage';
import 'grapesjs-preset-newsletter';



export default function App() {
  
  return (
   <div>
      <GrapesjsReact
        id='grapesjs-react'
        plugins={[
          'gjs-preset-newsletter',
          'gjs-blocks-basic'
        ]}
  />;
    </div>
    )
}

