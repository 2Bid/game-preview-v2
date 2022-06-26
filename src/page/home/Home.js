import React, { useState } from 'react'

/* Import Hooks */
import { useLoadHomeData } from '../../hooks/loadHomeData'

export default function Home() {

     const page1 = useLoadHomeData(1)

     console.log(page1)

     const [pagination, setPagination] = useState(1)

  return (
    <div>Home</div>
  )
}
