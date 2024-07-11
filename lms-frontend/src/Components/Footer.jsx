import { BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs';
function Footer() {
 const currentDate = new Date();
 const year = currentDate.getFullYear();

    return (
        <>
           <div className='relatve left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
           
               <section>
                  CopyRight {year} | All rights reserved.
               </section>

               <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    
                     <a className='hover:text-yellow-500 transition-all ease-in-out'>
                      <BsFacebook /> 
                      </a>
                      <a className='hover:text-yellow-500 transition-all ease-in-out'>
                      <BsTwitter />
                      </a>
                      <a className='hover:text-yellow-500 transition-all ease-in-out'>
                      <BsLinkedin />
                     </a>
               </section>
           </div>     
        </>
    )
}

export default Footer;