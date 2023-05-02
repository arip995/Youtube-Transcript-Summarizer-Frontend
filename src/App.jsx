import { useState } from 'react';
import './App.css';

function App() {
  const [summarizedData, setSummarizedData] = useState(null);
  const [link, setLink] = useState(null);

  const handleChange = (event) => {
    setLink(event.target.value)
  }
  const handleClick = () => {
    console.log("Panda")
    fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(json => {
      console.log(json.body)
      setSummarizedData(json?.body)
    })
  }
  return (
    <div className="">
      <div className='flex justify-center w-full absolute bg-gray-100 min-h-screen'>
        <div className="xlmin:w-2/4 xlmax:w-3/4 rounded-lg text-4xl font-bold absolute mt-12 bg-white p-6 z-100">
          Youtube Transcript Summarizer
          <div className='mt-6'>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input className="px-2  text-gray-700 placeholder-gray-500 bg-white outline-none d focus:placeholder-transparent" type="text" name="youtube" placeholder="Paste youtube link" aria-label="paste youtube link" 
              onChange={(event) => handleChange(event)}
              />

              <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                onClick={() => handleClick()}
              >Generate summary</button>
            </div>
          </div>
          {summarizedData &&
            <div className='panda overflow-y-hidden min-h-0 mt-8 mb-2 text-2xl text-gray-600 text-justify z-2'>
              {summarizedData}
            </div>
          }
        </div>
      </div>

      {/* <div class="writer">
            <div class="writer-text">Apana tike gandi marantu</div>
        </div> */}
    </div>
  );
}

export default App;
