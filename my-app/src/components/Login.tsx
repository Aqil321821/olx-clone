import guitar from '../assets/guuitar.png';
import google from '../assets/google.png';
import phone from '../assets/phone.png';
import { signInWithPopup } from 'firebase/auth';
import { auth,googleProvider } from '../firebase/setup';

const Login = (props) => {
      
    const googleSignin=async ()=>{
        try {
            await signInWithPopup(auth,googleProvider)
            
        } catch (error) {
            console.error(error)
        }
    }



  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity' aria-hidden='true' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <h1 onClick={()=>props?.setLoginPop(false)} className=' cursor-pointer font font-semibold text-3xl'>X</h1>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                  <div className='mt-2'>
                    <img src={guitar} alt='guitar' className='w-20 h-20 ml-44' />
                    <p className='text-base font-medium mt-5 text-center'>Help us to become one of the safest places <br /> to buy and sell</p>
                    <div className='flex border-4 border-black cursor-pointer  p-2 mt-2 rounded-md'>
                      <img src={phone} alt='phone' className='h-7 ml-2' />
                      <h1 className='font-semibold   ml-10'>Continue with Phone</h1>
                    </div>
                    <div onClick={googleSignin} className='flex border-4 border-gray-400 cursor-pointer p-2 mt-2 rounded-md'>
                      <img src={google} alt='phone' className='h-7 ml-2' />
                      <h1 className=' font-semibold  ml-8 '>Continue with Google</h1>
                    </div>
                    <h1 className='text-center mt-5 font-medium'>OR</h1>
                    <h1 className='text-center mt-5 font-medium underline cursor-pointer'>Login with Email</h1>
                    <h1 className='text-center mt-28 text-gray-500 text-sm'>All your details are safe with us.</h1>
                    <h1 className='text-center mt-4 text-gray-500 '>If you continue, you are accepting <span className='text-blue-700'> OLX Terms and Conditions and Privacy Policy</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
