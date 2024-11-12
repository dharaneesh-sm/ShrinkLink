import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/constants';

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setfullUrl] = React.useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await axios.post(`${serverUrl}/shorturl`, {
          fullUrl: fullUrl
        });
        setfullUrl("")
        updateReloadState();
      } catch (error) {
        console.log(error)
      }
  }
  return (
        <div className='container mx-auto p-2'>
            <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
              <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
                <h2 className='text-white text-4xl text-center pb-4'>URL Shortner</h2>
                <p className='text-white text-center text-xl pb-4 font-extralight'>Paste Your Untidy Link to Shorten It!</p>
                <p className='text-white text-center pb-4 text-sm font-thin'>Free Tool Shorten a URL or Reduce Link, Use Our URL Shortner to Create a Shortened & Neat</p>
                <form onSubmit={handleSubmit}>
                  <div className='flex'>
                    <div className='relative w-full'>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlShortner.link/</div>
                      <input 
                      type='text' 
                      placeholder='Add Your Link' 
                      required className='block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setfullUrl(e.target.value)}
                      >
                      </input>
                      <button type='submit' 
                      className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
                      value={fullUrl}
                      >
                        Shorten URL
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
  );
};

export default FormContainer;
