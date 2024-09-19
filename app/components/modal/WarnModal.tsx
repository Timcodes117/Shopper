import React from 'react'

type modalProps = {
    title: string,
    description: string,
    onClose?: VoidFunction,
}


export class ModalClass{
    isVisible = false;

    show(props:modalProps){
        console.log("what happened")
        this.isVisible = true;
        return <WarnModal title={props.title} description={props.description} 
         />;
    }
}

const WarnModal = (props:modalProps) => {
  return (
    <div className='w-full flex flex-1 bg-[#0000005e] fixed top-0 left-0'>
        <div></div>
    </div>
  )
}

// export default WarnModal