import React from 'react'
import Convertation from './Convertation'
import useGetConversations from '../../hooks/useGetConversations.js'
import { getRandomEmoji } from '../../utils/emojis';

const Convertations = () => {
  const {loading,conversations}=useGetConversations();
  return (
    <div className='py-2 flex-col overflow-auto'>
    {conversations.map((conversation, idx) => (
				<Convertation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))
      
     }

     {
      loading?<span className='loading loading-spinner mx-auto'></span>:null
     }
    </div>
  )
}

export default Convertations
